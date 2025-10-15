# 🔐 Authentication Overview

Booklore offers flexible authentication to secure your library while keeping things simple. Out of the box, it works with built-in username and password authentication, no setup required. If you're already running an identity provider like Authentik or Pocket ID for your other self-hosted apps, Booklore can integrate seamlessly via OpenID Connect (OIDC), giving you single sign-on across your entire stack.

Both methods can run side-by-side, so you can keep local authentication as a backup while using OIDC for daily access. This guide will help you understand your options and get started with the authentication method that fits your setup.

---

## 🎯 Authentication Methods

### 🏠 Local Authentication (Built-in)

Booklore includes built-in username and password authentication that works immediately after installation:

- **Self-Contained** - No external dependencies required
- **Quick Setup** - Ready to use with zero configuration
- **Always Available** - Works as a fallback even when OIDC is enabled

**Perfect for:**
- Getting started without extra dependencies
- Keeping authentication simple and self-contained
- Running Booklore as a standalone service

---

### 🌐 OIDC Authentication (Optional)

Integrate with OpenID Connect (OIDC) providers for centralized authentication:

- **Single Sign-On (SSO)** - Authenticate once across multiple applications
- **Centralized Management** - Control users from your identity provider
- **Enhanced Security** - MFA, audit logs, and additional security features
- **Standard Compliant** - Works with any OAuth2/OIDC provider

**Supported Identity Providers:**
- ✅ Authentik (detailed setup guide available)
- ✅ Pocket ID (guide coming soon)
- ✅ Authelia (not tested yet)

**Perfect for:**
- Already running an identity provider for other apps
- Want single login across all your services
- Need MFA or advanced security features

---

## 🚀 Getting Started

### Using Local Authentication

No setup needed! Just:
1. Access your Booklore instance
2. Log in with your username and password
3. You're done!

### Setting Up OIDC

1. Choose your identity provider
2. Create an OAuth2/OIDC application in your provider
3. Add the credentials to Booklore's authentication settings
4. Test the login flow

**📚 Setup Guides:**
- [**Authentik Integration Guide**](./authentik.md) - Complete step-by-step tutorial with screenshots

> 📝 **Note:** The Authentik guide can be adapted for most OIDC providers. Additional guides coming soon.

---

## 🔧 Configuration

Access authentication settings: **Settings → Authentication**

### Running Both Methods

You can enable both local and OIDC authentication at the same time:
- Users can choose how they want to log in
- Local auth always works as a fallback
- The login page shows available options automatically

---

## ❓ Common Questions

**Q: Can I use both local and OIDC authentication?**  
A: Yes! Enable both and users can choose their preferred method.

**Q: What if my identity provider goes down?**  
A: Local authentication stays available, so you can always log in.

**Q: Do I need to migrate users when enabling OIDC?**  
A: No. Just create matching usernames in your identity provider when you're ready.

**Q: Does OIDC support MFA?**  
A: Yes! Whatever security features your identity provider has (MFA, hardware keys, etc.) will work automatically.

**Q: Are usernames case-sensitive?**  
A: Yes. Make sure usernames match exactly between Booklore and your identity provider.

---

## 🎯 Which Method Should I Choose?

**Local Authentication:**
- Just want to get started quickly
- Don't run other authentication services
- Prefer keeping everything self-contained

**OIDC Authentication:**
- Already running Authentik, Authelia, or similar
- Want to log in once for all your apps
- Need extra security like MFA

**Both Methods:**
- Testing OIDC while keeping local as backup
- Want maximum flexibility

---

## 📚 Next Steps

**Using Local Auth?** You're all set! Just log in and start using Booklore.

**Want to set up OIDC?** Head to the [Authentik Setup Guide](./authentik.md) for a detailed walkthrough.

---

Choose the authentication method that fits your setup. You can always change it later.
