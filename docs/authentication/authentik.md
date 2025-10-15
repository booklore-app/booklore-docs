# 🔐 Authentik Authentication

Seamlessly integrate Authentik as your single sign-on (SSO) provider for Booklore. Centralize user authentication, enhance security, and simplify access management across your applications.

:::danger[Username Matching Required]
The username in Authentik must exactly match the username in Booklore for authentication to work properly. Case sensitivity matters. If a user doesn't exist in Booklore with the matching username, authentication will fail.
:::

:::info[Configuration Scope]
This guide covers the essential configuration required to integrate Authentik with Booklore. Once the basic integration is functional, you may customize Authentik settings to align with your organization's specific security policies and user management requirements.
:::

---

## 🌟 What You'll Achieve

With Authentik integration, you can:

- **Enable single sign-on (SSO)** for seamless access to Booklore without separate login credentials
- **Centralize user management** across multiple applications from one unified interface
- **Enhance security** with OAuth2/OpenID Connect protocols and optional multi-factor authentication
- **Control access** through provider bindings and authorization flows at user or group level
- **Simplify login experience** for your users with automatic session management
- **Audit authentication** with comprehensive logging of all login attempts and user activities

---

## ✨ How Authentik Integration Works

### 🔄 The Authentication Flow

Understanding the authentication flow helps troubleshoot issues and explains what happens behind the scenes:

1. **🎫 User Initiates Login**  
   User attempts to access Booklore and is redirected to Authentik's secure login portal. The original destination URL is preserved for automatic redirect after authentication.

2. **🔑 Authentik Authenticates**  
   User enters credentials in Authentik's secure login page. Authentik validates the credentials against its user directory and can optionally prompt for additional authentication factors (MFA).

3. **✅ Token Exchange**  
   Authentik validates credentials and issues OAuth2 tokens (access token, ID token, and optionally a refresh token). These tokens contain user information and are cryptographically signed.

4. **🚪 Access Granted**  
   Booklore receives and validates the tokens, extracts user information, matches it with an existing Booklore user account, and grants access to the authenticated user.

---

## 🚀 Setting Up Authentik

### Step 1: Create Application and Configure OAuth2 Provider

Begin by setting up Booklore as an application in Authentik with OAuth2 authentication. This entire process should take about 5-10 minutes:

1. **Navigate to Applications**  
   Open your Authentik dashboard and click **"Create a new application"**. This will launch a setup wizard that guides you through the process.

   ![Create Application](/img/authentication/authentik/authentik-1.jpg)

2. **Configure Application Details**

   ![Application Configuration](/img/authentication/authentik/authentik-2.jpg)

   Fill in the application section:
    - **Name:** `Booklore` (or your preferred name) - This name will be displayed to users on the Authentik login page
    - **Slug:** `booklore` (used in URLs, lowercase recommended) - This creates a unique identifier for the application
    - Click **Next** to proceed to provider configuration

3. **Select Provider Type**

   ![Choose Provider](/img/authentication/authentik/authentik-3.jpg)

    - Choose **OAuth2/OpenID Provider** from the available options
    - Click **Next** to configure provider settings

4. **Configure Provider Settings**

   ![Configure Provider](/img/authentication/authentik/authentik-4.jpg)

    - **Name:** `Booklore OAuth2` (or your preferred name) - This is the internal provider name
    - **Authorization Flow:** Select `default-provider-authorization-implicit-consent`
        - This flow handles user consent and authorization
        - Implicit consent means users won't be prompted to approve access each time
    - **Client Type:** Select **Public** (under Protocol settings)
        - Public clients are suitable for applications that run in browsers or mobile apps
        - Client secrets cannot be securely stored in these environments

   :::note[Public Client Type]
   Public client type is appropriate for applications where the client secret cannot be kept confidential. Booklore's frontend needs to initiate the OAuth flow, making this the correct choice.
   :::

5. **Set Up Redirect URIs**

   Configure where Authentik should redirect users after authentication. These URIs are critical for security:

   ![Redirect URIs](/img/authentication/authentik/authentik-5.jpg)

   Add the following URIs (replace `<your-booklore-domain>` with your actual domain):

    - **Strict:** `https://<your-booklore-domain>/oauth2/callback/`
        - This is the exact callback endpoint that handles the OAuth response
        - The trailing slash is required and must not be omitted
    - **Regex:** `https://<your-booklore-domain>/*`
        - This pattern allows flexibility for various OAuth flows
        - The asterisk permits any path under your domain

   :::danger[Important: Redirect URI Format]
   Ensure the trailing slash is included in the strict redirect URI. Use your actual domain without brackets or placeholders. Incorrect redirect URIs are the most common cause of authentication failures.
   :::

   **Example for a production setup:**
   ```
   Strict: https://books.example.com/oauth2/callback/
   Regex: https://books.example.com/*
   ```

   **Example for local testing:**
   ```
   Strict: http://localhost:3000/oauth2/callback/
   Regex: http://localhost:3000/*
   ```

6. **Configure OAuth Scopes**

   Define what information Authentik will share with Booklore. Each scope grants access to specific user data:

   ![OAuth Scopes](/img/authentication/authentik/authentik-6.jpg)

   Add the following scopes (all are required):
    - ✉️ **email** - User's email address for notifications and account identification
    - 🆔 **openid** - Basic OpenID Connect authentication (required for OIDC)
    - 👤 **profile** - User profile information including name and username
    - 🔄 **offline_access** - Enables refresh tokens for extended sessions without re-authentication

   Click **Save** to apply the configuration.

   :::tip[Privacy-Friendly Scopes]
   These scopes provide Booklore with essential user information while respecting privacy. Without these scopes, Booklore won't have the necessary data to create or match user sessions.
   :::

7. **Bind Users to Application**

   Control which users can access Booklore through Authentik. This step is crucial for access control:

   ![Configure Bindings](/img/authentication/authentik/authentik-7.jpg)

   In the "Configure Bindings" section:
    - **Type:** Select **User** to bind individual users, or **Group** to bind entire groups
    - **Select Users/Groups:** Choose the users or groups who should have access to Booklore
    - **Timeout:** (Optional) Set session timeout in seconds for enhanced security
    - Click **Save Binding** to apply

   :::note[Access Control Options]
   You can bind individual users, groups, or both depending on your access control requirements. For easier management at scale, consider using groups. Users not bound to this application will not see Booklore in their Authentik dashboard and cannot authenticate.
   :::

---

### Step 2: Retrieve Provider Credentials

Get the credentials needed to connect Booklore to Authentik. You'll need these in the next step:

![Provider List](/img/authentication/authentik/authentik-8.jpg)

1. **Navigate to Providers**  
   From the Authentik main page, go to **Applications → Providers** and select the provider you just created (it should be named `Booklore OAuth2` if you followed the naming convention)

![Provider Credentials](/img/authentication/authentik/authentik-9.jpg)

2. **Copy Credentials**  
   You'll need two pieces of information from this screen:
    - 🔑 **Client ID** - Your application's unique identifier (looks like a long alphanumeric string)
    - 🌐 **OpenID Configuration Issuer URL** - The authentication endpoint (typically `https://your-authentik-domain/application/o/booklore/`)

:::tip[Save These Credentials]
Copy both the Client ID and Issuer URL to a secure location. You'll paste these into Booklore in the next step. Keep this tab open or save these values in a password manager.
:::

---

## ⚙️ Configuring Booklore

### Step 3: Connect Booklore to Authentik

Now configure Booklore to use Authentik as the authentication provider. This is the final configuration step:

![Booklore OIDC Settings](/img/authentication/authentik/authentik-10.jpg)

1. **Open Booklore Settings**  
   Navigate to **Settings → Authentication** in your Booklore admin interface. You'll need administrator privileges to access this section.

2. **Configure OIDC Provider**
   Enter the credentials you copied from Authentik:
    - **Provider Name:** `Authentik` (or your preferred display name)
        - This name appears on the login button, so make it recognizable to users
    - **Client ID:** Paste the Client ID from Authentik (the long alphanumeric string)
        - Make sure there are no extra spaces before or after
    - **Issuer URI:** Paste the OpenID Configuration Issuer URL from Authentik
        - This should end with a trailing slash
        - Example: `https://auth.example.com/application/o/booklore/`
    - Click **Save** to store the configuration

3. **Enable OIDC Authentication**  
   Toggle **"OIDC Enabled"** to ON to activate Authentik authentication
    - When enabled, users will see a "Login with Authentik" button on the Booklore login page
    - The standard username/password login will still be available unless specifically disabled

:::success[Configuration Complete!]
Booklore is now configured to use Authentik for authentication. The next step is testing the integration to ensure everything works correctly.
:::

---

## 🧪 Testing the Integration

### Step 4: Test Login with Authentik

Verify that the integration works correctly before rolling it out to users. Testing ensures a smooth experience:

![User Impersonation](/img/authentication/authentik/authentik-11.jpg)

1. **Impersonate a User (Recommended for Testing)**
    - Go to **Authentik → Directory → Users**
    - Select a user bound to the Booklore application
    - Click **"Impersonate"** to log in as that user
    - This allows you to test without logging out of your admin account

   **Alternative Testing Method:**
    - Open an incognito/private browser window
    - Navigate to your Booklore instance
    - Click "Login with Authentik" (or your configured provider name)

![Authentik Login Page](/img/authentication/authentik/authentik-12.jpg)

2. **Access Booklore**
    - You'll see the Authentik login page with available applications
    - The **"Booklore"** tile should be visible (if the user is bound to the application)
    - Click the **"Booklore"** tile to initiate authentication
    - You should be automatically redirected and logged into Booklore

![Booklore Homepage](/img/authentication/authentik/authentik-13.jpg)

3. **Verify User Information**
    - Check that your username and email are displayed correctly in Booklore
    - Verify that you have access to your expected content and permissions
    - Test logging out and logging back in to ensure session handling works

:::success[Integration Successful!]
Your Authentik integration is working correctly. You can now roll it out to your users.
:::

---

## 🔄 Managing Authentication

### Disabling Authentik Authentication

If you need to temporarily disable or switch authentication methods (for maintenance or troubleshooting):

![Disable OIDC](/img/authentication/authentik/authentik-14.jpg)

1. **Navigate to Authentication Settings**  
   Go to **Booklore → Settings → Authentication**

2. **Disable OIDC**  
   Toggle **"OIDC Enabled"** to OFF
    - This immediately disables Authentik authentication
    - Active sessions remain valid until they expire
    - New login attempts will use standard authentication

3. **Log Out**  
   Click **Logout** to end your current session and verify the change

4. **Standard Login Returns**  
   You'll be redirected to the standard Booklore login page with username/password fields

![Booklore Login](/img/authentication/authentik/authentik-15.jpg)

:::note[Configuration Persistence]
Disabling OIDC doesn't delete your Authentik configuration. All settings (Client ID, Issuer URI) are preserved. You can re-enable it anytime by toggling the switch back on. Users who were authenticated via Authentik can still log in with standard credentials if they have them configured.
:::

---

## 🛠️ Troubleshooting

### Common Issues and Solutions

**Authentication Fails:**

- ✓ Verify usernames match exactly between Authentik and Booklore (case-sensitive)
- ✓ Check redirect URIs include trailing slashes
- ✓ Ensure user is bound to the Booklore application
- ✓ Confirm all required OAuth scopes are enabled
- ✓ Check browser console for errors (F12)

**Redirect Errors:**

- ✓ Verify redirect URI: `/oauth2/callback/` (with trailing slash)
- ✓ Confirm domain matches exactly in both systems
- ✓ Ensure HTTPS is used in production
- ✓ Validate regex pattern: `https://your-domain/*`

**User Not Found:**

- ✓ Create matching username in Booklore (case-sensitive)
- ✓ Verify user has appropriate bindings in Authentik
- ✓ Ensure email scope is properly configured

**"Invalid Client" Error:**

- ✓ Check Client ID is copied correctly (no extra spaces)
- ✓ Verify provider is set to "Public" client type
- ✓ Ensure Issuer URI ends with trailing slash

**Session/Token Issues:**

- ✓ Enable offline_access scope for refresh tokens
- ✓ Review session timeout settings in both systems
- ✓ Check token expiration settings in Authentik

**SSL/Certificate Errors:**

- ✓ Ensure valid SSL certificates on both systems
- ✓ Verify Issuer URI uses HTTPS in production
- ✓ Check certificate chains are properly configured

### Viewing Logs

**Authentik:** System → System Tasks or Events → Logs  
**Booklore:** Check application logs for OAuth-related errors

---

## 🎯 Best Practices

### Security Recommendations

- 🔒 **Use HTTPS** - Always use HTTPS in production with valid SSL certificates
- 👥 **Review Bindings** - Audit user access regularly and use groups for easier management
- 🔄 **Enable offline_access** - Improves user experience while maintaining security
- 📊 **Monitor Activity** - Track login attempts and set up alerts for unusual patterns
- 🛡️ **Keep Updated** - Regularly update both Authentik and Booklore, test in staging first
- 🔐 **Enable MFA** - Implement multi-factor authentication, especially for administrators
- 🔑 **Rotate Credentials** - Review access regularly and regenerate credentials annually

### Optimization Tips

- 📝 **Use descriptive names** - Name providers clearly (e.g., "Booklore Production OAuth2")
- 🏷️ **Leverage groups** - Organize users by department/role and bind groups instead of individuals
- ⚡ **Optimize tokens** - Use short access tokens (15-60 min) with long-lived refresh tokens
- 🌐 **Use reverse proxy** - Add rate limiting, IP whitelisting, and WAF rules
- 🔄 **Test in staging** - Validate changes in a staging environment before production

### User Experience

- 🎨 **Customize branding** - Add your logo and consistent color schemes to the login page
- 📚 **Document the process** - Create user guides with screenshots and support contact info
- 🆘 **Enable self-service** - Allow password resets and MFA device management

---

## 📚 Additional Resources

- **Authentik Documentation:** [goauthentik.io/docs](https://goauthentik.io/docs/)
- **OAuth 2.0 Specification:** Understanding the protocol behind SSO
- **OpenID Connect Core:** Detailed information about OIDC flows
- **Security Best Practices:** Regular security audits and penetration testing

---

Authentik provides enterprise-grade authentication with minimal configuration. Once set up, your users will have secure, streamlined access to Booklore with the convenience of single sign-on and the security of centralized authentication management.
