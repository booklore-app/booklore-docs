# 🔐 Authelia

This guide walks you through setting up [Authelia](https://www.authelia.com/) as an OIDC provider for Booklore. Authelia is a popular self-hosted authentication server that provides SSO and multi-factor authentication for your reverse proxy setup. If you're already using Authelia to protect your services behind Traefik, Caddy, or nginx, adding Booklore as an OIDC client is straightforward.

By the end of this guide, your users will be able to sign in to Booklore with their Authelia account. The setup takes about 5 minutes.

:::info[Already have OIDC working?]
This guide covers the initial setup. For details on user provisioning, group mapping, OIDC-Only Mode, and other advanced features, see the [OIDC Settings](oidc-settings.md) reference.
:::

---

## 🚀 Part 1: Add Booklore as an OIDC Client in Authelia

Authelia's OIDC configuration lives in its YAML config file. Add a client entry for Booklore under `identity_providers.oidc.clients`.

Here's a complete working configuration. Replace `booklore.example.com` with your actual Booklore domain and `auth.example.com` with your Authelia domain:

```yaml
identity_providers:
  oidc:
    lifespans:
      access_token: 1h
      authorize_code: 1m
      id_token: 1h
      refresh_token: 90m

    enforce_pkce: public_clients_only

    cors:
      endpoints:
        - authorization
        - pushed-authorization-request
        - token
        - revocation
        - introspection
        - userinfo
      allowed_origins_from_client_redirect_uris: true

    claims_policies:
      booklore:
        id_token:
          - email
          - email_verified
          - preferred_username
          - name
          - groups

    clients:
      - client_id: booklore
        client_name: Booklore
        public: true
        authorization_policy: two_factor
        claims_policy: booklore
        consent_mode: implicit
        require_pkce: true
        pkce_challenge_method: S256
        scopes:
          - openid
          - profile
          - email
          - groups
          - offline_access
        redirect_uris:
          - https://booklore.example.com/oauth2-callback
        response_types:
          - code
        grant_types:
          - authorization_code
          - refresh_token
```

### What Each Section Does

**`claims_policy`** controls which user attributes are included in the ID token. Booklore needs `preferred_username`, `email`, `name`, and `groups` (if you plan to use group mapping).

**`public: true`** means Booklore uses PKCE instead of a client secret. This is the recommended approach for browser-based apps.

**`consent_mode: implicit`** means users won't be prompted to approve access each time they log in.

**`authorization_policy: two_factor`** requires 2FA. Change to `one_factor` if you don't use MFA, or adjust based on your security needs.

**`scopes`** must include `groups` if you want to use Booklore's [Group Mapping](oidc-settings.md#group-mapping) feature. Without it, Authelia won't include group memberships in the token.

:::danger[Don't forget the `groups` scope]
If you plan to use group mapping, you must include `groups` in both the `scopes` list and the `claims_policy`. Without it, Authelia won't send group information to Booklore, and group mapping will silently do nothing.
:::

:::tip[Generating a random Client ID]
While `booklore` works fine as a client ID, you can use a random string for extra security. It must be 100 characters or fewer and contain only [RFC3986 unreserved characters](https://datatracker.ietf.org/doc/html/rfc3986#section-2.3) (letters, digits, `-`, `.`, `_`, `~`).
:::

Restart Authelia after saving the config.

---

## ⚙️ Part 2: Configure Booklore

Navigate to **Settings > OIDC** in Booklore.

![Booklore OIDC Settings](/img/authentication/authelia/booklore-oidc-settings.jpg)

Fill in the provider configuration:

| Field | Value |
|-------|-------|
| **Provider Name** | `Authelia` (shown on the login button) |
| **Client ID** | `booklore` (or whatever you set as `client_id` in the Authelia config) |
| **Client Secret** | Leave empty (public client) |
| **Issuer URI** | Your Authelia URL **without** a trailing slash (e.g., `https://auth.example.com`) |

:::danger[No trailing slash on the Issuer URI]
Authelia's issuer does **not** use a trailing slash, unlike Authentik. Using `https://auth.example.com/` (with slash) will cause discovery to fail. Use `https://auth.example.com` (without slash).
:::

The default claim mappings work with Authelia:

| Claim | Value |
|-------|-------|
| **Username** | `preferred_username` |
| **Email** | `email` |
| **Display Name** | `name` |
| **Groups** | `groups` |

Click **Test Connection** to verify Booklore can reach Authelia. All checks should pass.

Click **Save**, then toggle **OIDC Login** to **ON** in the Login Methods section.

### Optional: Configure Back-Channel Logout

To keep sessions in sync (so logging out of Authelia also ends the Booklore session):

1. Copy the **Back-Channel Logout URI** from Booklore's Provider Configuration Reference panel
2. If your Authelia version supports back-channel logout, add it to the client config:
   ```yaml
   backchannel_logout_uri: https://booklore.example.com/api/v1/auth/oidc/backchannel-logout
   ```

---

## 🧪 Test It

Open an incognito/private browser window and navigate to your Booklore instance. Click "Sign in with Authelia". You'll be redirected to Authelia's login page.

After authenticating (including 2FA if configured), you should be redirected back to Booklore and logged in.

![Login Success](/img/authentication/authelia/login-success.jpg)

Verify that your username and email are correct.

---

## 🔧 What's Next

Now that basic OIDC is working, you can configure additional features in Booklore's [OIDC Settings](oidc-settings.md):

- **[User Provisioning](oidc-settings.md#-user-provisioning):** Automatically create Booklore accounts when users sign in for the first time
- **[Group Mapping](oidc-settings.md#group-mapping):** Map Authelia groups to Booklore permissions and library access (make sure you included `groups` in the scopes and claims policy)
- **[OIDC-Only Mode](oidc-settings.md#-oidc-only-mode):** Hide the local login form and redirect everyone to Authelia
- **[Account Linking](oidc-settings.md#link-existing-local-accounts):** Migrate existing local users to OIDC without losing their data

---

## 🛠️ Troubleshooting

### Test Connection Fails

- The Issuer URI must **not** have a trailing slash. Use `https://auth.example.com`, not `https://auth.example.com/`.
- Make sure Booklore's server can reach Authelia. If both run in Docker, they need to be on the same network or the external URL must be reachable.
- Check that Authelia restarted successfully after your config change. A YAML syntax error can prevent the OIDC provider from starting.

### Login Redirects But Fails

- The **redirect URI** in Authelia's config must match exactly: `https://booklore.example.com/oauth2-callback`
- Make sure `response_types` includes `code` and `grant_types` includes `authorization_code`.
- Check Authelia's logs for a detailed error message.

### "User Not Provisioned" Error

Auto-provisioning is off by default. Either enable it in [OIDC Settings](oidc-settings.md#-user-provisioning), or create a Booklore user with a username that exactly matches the Authelia username (case-sensitive).

### Group Mapping Not Working

- Make sure `groups` is in both the `scopes` list and the `claims_policy` in Authelia's config.
- Verify the **Groups Claim** in Booklore is set to `groups`.
- Check that **Group Sync Mode** in Booklore is not set to Disabled.
- The group names must match exactly (case-sensitive) between Authelia and Booklore's group mappings.

### 2FA Prompt Every Time

This is controlled by Authelia's `authorization_policy`. If you set it to `two_factor`, users authenticate with 2FA. Change to `one_factor` if you don't want MFA for Booklore.

### Can't Access Booklore At All

- Admin backdoor: `/login?local=true`
- Nuclear option: set `FORCE_DISABLE_OIDC=true` as an environment variable and restart

---

## 📚 Additional Resources

- [Authelia OpenID Connect Documentation](https://www.authelia.com/configuration/identity-providers/openid-connect/provider/)
- [Authelia OIDC Client Configuration](https://www.authelia.com/configuration/identity-providers/openid-connect/clients/)
- [Booklore OIDC Settings Reference](oidc-settings.md)
