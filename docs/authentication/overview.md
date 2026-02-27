# 🔐 Authentication Overview

Booklore supports three authentication methods that can run side by side: local (built-in), OpenID Connect (OIDC), and remote header-based authentication. You can enable any combination of these.

---

## Local Authentication

Built-in username and password authentication. Works immediately after installation with no external dependencies.

- Ready to use out of the box
- Always available as a fallback, even when other methods are enabled
- Users are created and managed directly in Booklore

---

## OIDC Authentication

Integrate with any OpenID Connect provider for single sign-on across your self-hosted apps.

Booklore has detailed setup guides for:

- [Authentik](authentik.md)
- [Pocket ID](pocket-id.md)
- [Authelia](authelia.md)

These guides can be adapted for most OIDC-compliant providers.

### Configuration

Go to **Settings > Authentication** to configure your OIDC provider. The required fields are:

| Field | Description |
|-------|-------------|
| Provider Name | Display name shown on the login page |
| Client ID | OAuth2 client ID from your provider |
| Issuer URI | Your provider's OIDC issuer URL |
| Claim Mappings | Map provider claims to Booklore fields (username, name, email) |

### Auto User Provisioning

When enabled, users who log in via OIDC for the first time are automatically created in Booklore with configurable default permissions and library access. This avoids having to manually create every user.

See [Auto User Provisioning](auto-user-provisioning.md) for details.

### Emergency Override

Set the environment variable `FORCE_DISABLE_OIDC=true` to disable OIDC at the infrastructure level, regardless of the database setting. Useful if a misconfigured OIDC provider locks you out.

---

## Remote Header Authentication

For setups where a reverse proxy handles authentication (e.g., Authelia or Traefik forward auth), Booklore can trust user identity from HTTP headers.

Configured via environment variables:

| Variable | Description |
|----------|-------------|
| `REMOTE_AUTH_ENABLED` | Enable remote header auth |
| `REMOTE_AUTH_HEADER_NAME` | Header containing the username |
| `REMOTE_AUTH_HEADER_USER` | Header for the display name |
| `REMOTE_AUTH_HEADER_EMAIL` | Header for the email |
| `REMOTE_AUTH_HEADER_GROUPS` | Header for group membership |
| `REMOTE_AUTH_ADMIN_GROUP` | Group name that grants admin access |
| `REMOTE_AUTH_GROUPS_DELIMITER` | Delimiter for the groups header |
| `REMOTE_AUTH_CREATE_NEW_USERS` | Auto-create users from headers |

---

## Which Method to Choose

**Local only:** You just want to get started quickly, or don't run other self-hosted services with SSO.

**OIDC:** You already run Authentik, Authelia, Keycloak, or a similar provider and want a single login across all your apps. Also gives you MFA and centralized user management for free.

**Remote header auth:** Your reverse proxy already handles authentication and you want Booklore to trust it.

**Multiple methods:** You can enable all three simultaneously. The login page shows the available options, and local auth always works as a fallback.

---

## Common Questions

**What if my identity provider goes down?**
Local authentication stays available, so you can always log in.

**Do I need to migrate users when enabling OIDC?**
No. Users logging in via OIDC can be auto-provisioned, or you can create matching usernames manually.

**Are usernames case-sensitive?**
Yes. Usernames must match exactly between Booklore and your identity provider.

**Does OIDC support MFA?**
Yes. Whatever security features your identity provider supports (MFA, hardware keys, etc.) work automatically.
