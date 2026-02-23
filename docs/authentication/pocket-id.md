# 🔐 Pocket ID Authentication

Integrate [Pocket ID](https://pocket-id.org/) as an OIDC single sign-on provider for Booklore.

:::danger[Username Matching Required]
The username in Pocket ID must exactly match the username in Booklore (case-sensitive). If no matching user exists in Booklore, authentication will fail.
:::

---

## 🚀 Setting Up Pocket ID

### Step 1: Create OIDC Client in Pocket ID

Begin by configuring Booklore as an OIDC client in Pocket ID:

1. **Navigate to OIDC Clients**  
   Open your Pocket ID admin panel and navigate to **Settings → Administration → OIDC Clients**. Click the **"Add OIDC Client"** button to begin the setup process.

   ![Access OIDC Client UI](/img/authentication/pocket-id/pocket-id--1-create-client-access-ui.jpg)

2. **Configure Client Details**

   Fill in the OIDC client configuration form with the following information:

   ![Configure Client](/img/authentication/pocket-id/pocket-id--2-create-client-fill-info.jpg)

   - **Name:** `Booklore` (or your preferred name) - This name will be displayed to users in the Pocket ID dashboard
   - **Callback URLs:** Configure the redirect URIs where Pocket ID should send users after authentication:
     - `https://<your-booklore-domain>/oauth2-callback` - The exact callback endpoint (trailing slash required)
     - `https://<your-booklore-domain>/*` - Pattern allowing flexibility for various OAuth flows
   - **Public Client:** Toggle **ON** - Public clients are suitable for applications running in browsers
   - **Client Launch URL:** `https://<your-booklore-domain>/` - The main URL where your Booklore instance is hosted
   - Click **Save** to create the client

   :::danger[Important: Callback URL Format]
   Ensure the trailing slash is included in the callback URL. Use your actual domain without brackets or placeholders. Incorrect redirect URIs are the most common cause of authentication failures.
   :::

   **Example for a production setup:**
   ```
   Callback URLs:
   - https://books.example.com/oauth2-callback
   - https://books.example.com/*
   Client Launch URL: https://books.example.com/
   ```

   **Example for local testing:**
   ```
   Callback URLs:
   - http://localhost:3000/oauth2-callback
   - http://localhost:3000/*
   Client Launch URL: http://localhost:3000/
   ```


---

### Step 2: Retrieve Client Credentials

After creating the OIDC client, you'll need to copy the credentials for Booklore configuration:

![Copy Client ID](/img/authentication/pocket-id/pocket-id--3-create-client-copy-client-id.jpg)

1. **Copy Client ID**  
   After saving the client configuration, a **Client ID** will be automatically generated. This is a unique identifier for your Booklore application.
   
   - Copy this Client ID to a secure location
   - You'll need this in the next step to configure Booklore

2. **Note the Issuer URL**  
   Your Pocket ID issuer URL will be: `https://<your-pocket-id-domain>/`
   - Make sure to include the trailing slash
   - This is the base URL where your Pocket ID instance is hosted


---

## ⚙️ Configuring Booklore

### Step 3: Connect Booklore to Pocket ID

Now configure Booklore to use Pocket ID as the authentication provider. This is the final configuration step:

![Configure Booklore](/img/authentication/pocket-id/pocket-id--4-configure-booklore.jpg)

1. **Open Booklore Settings**  
   Navigate to **Settings → Authentication** in your Booklore admin interface. You'll need administrator privileges to access this section.

2. **Configure OIDC Provider**
   
   In the **OIDC Authentication** section, enter the following details:
   
   - **Provider Name:** `Pocket ID` (or your preferred display name)
     - This name appears on the login button, so make it recognizable to users
   - **Client ID:** Paste the Client ID you copied from Pocket ID
     - Ensure there are no extra spaces before or after
   - **Issuer URL:** Enter your Pocket ID URL: `https://<your-pocket-id-domain>/`
     - Must include the trailing slash
     - Example: `https://auth.example.com/`
   - **Claim** Fill out the following claims
     - Username Claim: preferred_username
     - Email Claim: email
     - Display Name Claim: name
      
   - Click **Save** to store the configuration

4. **Enable OIDC Authentication**  
   Toggle **"OIDC Enabled"** to **ON** to activate Pocket ID authentication
   - When enabled, users will see a "Login with Pocket ID" button on the Booklore login page
   - The standard username/password login will still be available unless specifically disabled


---

## 🧪 Testing the Integration

### Step 4: Test Login with Pocket ID

Verify that the integration works correctly:

1. **Access Pocket ID Dashboard**
   
   Navigate to **Settings → My Apps** in your Pocket ID admin panel. You should see the Booklore application card displayed.

   ![Booklore App Card](/img/authentication/pocket-id/pocket-id--5-booklore-app-card.jpg)

2. **Launch Booklore**
   
   Click on the **"Booklore"** app card to initiate authentication. Pocket ID will automatically handle the OAuth flow and redirect you to Booklore.

   ![Booklore Opens](/img/authentication/pocket-id/pocket-id--6-booklore-opens.jpg)

3. **Verify Successful Login**
   
   - You should be automatically logged into Booklore
   - Check that your username and email are displayed correctly
   - Verify that you have access to your expected content and permissions
   - Test logging out and logging back in to ensure session handling works

   **Alternative Testing Method:**
   - Open an incognito/private browser window
   - Navigate to your Booklore instance
   - Click "Login with Pocket ID" (or your configured provider name)
   - You'll be redirected to Pocket ID for authentication
   - After logging in, you should be redirected back to Booklore


---

## 🔄 Managing Authentication

### Disabling Pocket ID Authentication

If you need to temporarily disable or switch authentication methods (for maintenance or troubleshooting):

![Disable OIDC](/img/authentication/pocket-id/pocket-id--7-disable-pocket-id.jpg)

1. **Navigate to Authentication Settings**  
   Go to **Booklore → Settings → Authentication**

2. **Disable OIDC**  
   Toggle **"OIDC Enabled"** to **OFF**
   - This immediately disables Pocket ID authentication
   - Active sessions remain valid until they expire
   - New login attempts will use standard authentication

3. **Log Out**  
   Click **Logout** to end your current session and verify the change

4. **Standard Login Returns**  
   You'll be redirected to the standard Booklore login page with username/password fields

![Booklore Login](/img/authentication/pocket-id/pocket-id--8-booklore-login-screen.jpg)

:::note[Configuration Persistence]
Disabling OIDC doesn't delete your Pocket ID configuration. All settings (Client ID, Issuer URL) are preserved. You can re-enable it anytime by toggling the switch back on. Users who were authenticated via Pocket ID can still log in with standard credentials if they have them configured.
:::

---

## 🛠️ Troubleshooting

### Common Issues and Solutions

**Authentication Fails:**

- ✓ Verify usernames match exactly between Pocket ID and Booklore (case-sensitive)
- ✓ Check callback URLs include trailing slashes
- ✓ Ensure user exists in both Pocket ID and Booklore
- ✓ Verify Client ID is correctly copied (no extra spaces)
- ✓ Check browser console for errors (F12)

**Redirect Errors:**

- ✓ Verify callback URL: `/oauth2-callback` (with trailing slash)
- ✓ Confirm domain matches exactly in both systems
- ✓ Ensure HTTPS is used in production
- ✓ Validate wildcard pattern: `https://your-domain/*`

**User Not Found:**

- ✓ Create matching username in Booklore (case-sensitive)
- ✓ Verify user account is active in Pocket ID
- ✓ Check that email addresses match between systems

**"Invalid Client" Error:**

- ✓ Check Client ID is copied correctly (no extra spaces)
- ✓ Verify "Public Client" is toggled ON in Pocket ID
- ✓ Ensure Issuer URL ends with trailing slash

**Connection Refused:**

- ✓ Verify Pocket ID service is running and accessible
- ✓ Check network connectivity between Booklore and Pocket ID
- ✓ Ensure firewall rules allow communication
- ✓ Validate DNS resolution for both domains

**SSL/Certificate Errors:**

- ✓ Ensure valid SSL certificates on both systems
- ✓ Verify Issuer URL uses HTTPS in production
- ✓ Check certificate chains are properly configured
- ✓ Validate certificate expiration dates

### Viewing Logs

**Pocket ID:** Check application logs for OAuth-related events and errors  
**Booklore:** Review authentication logs in the application logs directory

---

## 📚 Additional Resources

- **[Pocket ID Documentation](https://pocket-id.org/docs)**
