# 📧 Email Setup Guide

Booklore allows you to send books directly via email using various email providers. This guide will walk you through setting up Gmail as your email provider, enabling you to use the "Quick Book Send" feature from any book card.

:::info[What's New in v2]
Users with email permission can now set up their own personal email providers and recipients without interfering with other users' configurations. Each user manages their own email settings independently. Additionally, administrators can optionally share email providers with all users, making it
easy to provide centralized email configurations while still allowing users to create their own private providers.
:::

---

## 🔧 Prerequisites

Before setting up Gmail as your email provider, ensure you have:

1. **A Gmail account** with email sending privileges
2. **2-Factor Authentication enabled** on your Google account (required for app passwords)
3. **App Password generated** for Booklore (we'll guide you through this process)
4. **Email permission** in your Booklore account (contact your administrator if needed)

---

## 🔐 Step 1: Generate Gmail App Password

Since Gmail requires secure authentication, you'll need to create an app-specific password for Booklore.

1. Go to your [Google Account Security Settings](https://myaccount.google.com/security)
2. Ensure **2-Step Verification** is enabled (required for app passwords)
3. Click on **App passwords** under "Signing in to Google"

---

1. Select **Mail** as the app type
2. Choose **Other (Custom name)** for the device
3. Enter "Booklore" as the custom name
4. Click **Generate**
5. **Copy the 16-character password** - you'll need this for the Booklore setup

:::warning[Important]
Save this app password securely. Google will only display it once!
:::

---

## ⚙️ Step 2: Configure Email Provider in Booklore

Now let's add Gmail as an email provider in your Booklore settings.

:::info[Personal and Shared Providers]
Your email provider configuration is personal to your account by default. Other users won't see or be able to use your email providers unless you're an admin and choose to share them. Admins can optionally share providers with all users, while non-admin users' providers remain private.
:::

![Email Providers Page](/img/email/email-1.jpg)

1. Navigate to **Settings** > **Email** in Booklore
2. Click **Create Provider**

---

![Gmail Configuration](/img/email/email-2.jpg)

Fill in the Gmail configuration details:

| Field            | Value                                                  |
|------------------|--------------------------------------------------------|
| **Name**         | Gmail (or any descriptive name)                        |
| **Host**         | `smtp.gmail.com`                                       |
| **Port**         | `587`                                                  |
| **Username**     | Your full Gmail address (e.g., `your-email@gmail.com`) |
| **Password**     | The 16-character app password you generated            |
| **From Address** | Your Gmail address (same as username)                  |
| **Auth**         | ✅ Enabled                                              |
| **StartTLS**     | ✅ Enabled                                              |
| **Shared**       | ⬜ (Admin only - check to share with all users)         |

1. Click **Create Email Provider** to save the configuration

:::info[Admin Sharing]
If you are an administrator, you'll see a **Shared** checkbox. Enabling this option will make the email provider available to all users in your Booklore instance. Shared providers appear with an "S" badge and can only be modified or deleted by the admin who created them.
:::

---

## 📮 Step 3: Set Up Recipient Emails

After configuring your email provider, you'll need to add recipients who will receive your books via email.

:::info[Personal Recipients]
Your recipient list is private to your account. Each user maintains their own list of recipients independently.
:::

1. Navigate to **Email** > **Recipients** in Booklore
2. Click **Create Recipient**

---

![Add Recipient](/img/email/email-3.jpg)

Fill in the recipient details:

| Field                 | Value                                                      |
|-----------------------|------------------------------------------------------------|
| **Email Address**     | The recipient's email address (e.g., `friend@example.com`) |
| **Name**              | A friendly name for the recipient (e.g., `John's Kindle`)  |
| **Default Recipient** | Check this box to set as your default recipient            |

1. Click **Save** to add the recipient

:::tip
You can add multiple recipients such as family members, friends, or different devices (Kindle, tablet, etc.)
:::

:::success[Quick Send Ready]
Once you have configured a default email provider and default recipient, you can send books with one click using "Quick Book Send" from any book card. Your default settings are personal to your account.
:::

---

This is how the interface should look after setting up both the email provider and recipient:

![Recipients List](/img/email/email-4.jpg)

---

## 📚 Step 4: Sending Books via Email

Booklore offers two convenient methods to send books via email:

:::info
When sending books, you'll use your own configured email providers and recipients. Other users sending books will use their own configurations.
:::

![Advanced Send](/img/email/email-5.jpg)

### 🚀 Quick Book Send (One-Click)

For fast, streamlined sending using your default settings:

1. Navigate to any book in your library
2. Click the **three-dot menu** on the book card
3. Select **Book Send** > **Quick Send**
4. The book is instantly sent using your **default email provider** to your **default recipient**

:::tip
Perfect for regular sending to the same recipient (such as your Kindle).
:::

### ⚙️ Custom/Advanced Send

For flexible sending with specific provider and recipient selection:

1. Navigate to any book in your library
2. Click the **three-dot menu** on the book card
3. Select **Book Send** > **Custom Send**
4. Choose your desired **email provider** from the dropdown
5. Select the **recipient** from the dropdown
6. Click **Send**

:::tip
Perfect for sending to different recipients or using specific email providers for certain books.
:::

---

## 👥 Multi-User Email Configuration

:::info[Multi-User Email Configuration]
In the new email configuration system, each user can configure their own email providers and recipients. Administrators can optionally share email providers with all users for centralized management.
:::

### How Email v2 Works

In the new email configuration system:

- **Personal Email Providers**: Each user can configure their own private email providers (Gmail, Outlook, custom SMTP, etc.)
- **Shared Email Providers (Admin Only)**: Administrators can create shared providers that are available to all users
- **Personal Recipients**: Each user maintains their own list of email recipients
- **Independent Defaults**: Each user sets their own default email provider and default recipient
- **Provider Protection**: Users cannot modify or delete shared providers created by other admins
- **No Interference**: Users cannot see or modify other users' private email configurations
- **Shared Library**: All users can send any book from the shared library using their own email settings

### Shared Providers

**What are Shared Providers?**

- Administrators can mark email providers as "shared" to make them available to all users
- Shared providers appear with an "S" badge in the provider list
- All users can use shared providers to send books
- Only the admin who created a shared provider can modify or delete it

**Benefits of Shared Providers:**

- **Centralized Management**: Admins can set up instance-wide email providers
- **Simplified Setup**: Users don't need to configure their own SMTP settings
- **Cost Efficiency**: Share paid email services across your instance
- **Consistency**: Ensure all users have access to reliable email providers

**Use Cases for Shared Providers:**

- Shared email service account for the entire instance
- Educational institutions providing centralized email access
- Families sharing a single email account for sending books
- Small teams wanting simplified configuration

### Use Cases

**Scenario 1: Instance with Shared Provider**

- Admin sets up a shared Gmail account for all users
- Users can use the shared provider to send books
- Users can also add their own personal providers if desired
- Each user maintains their own recipient list

**Scenario 2: Family Library with Mixed Setup**

- Parent (admin) shares their Gmail provider with the family
- Children use the shared provider to send to their devices
- Other parent adds their own Outlook provider for personal use
- Each person has their own recipient lists

**Scenario 3: Friend Group Library**

- Admin creates shared email provider for the group
- Friends can use the shared provider immediately
- Friends can add personal providers if they prefer
- Everyone manages their own recipient lists privately

**Scenario 4: Privacy-Focused Users**

- Users create only private email providers
- No sharing enabled - full privacy
- Each person's email configuration is completely isolated
- Suitable for privacy-conscious individuals sharing a library

---

## 🔍 Troubleshooting

### Common Issues and Solutions

**❌ Authentication Failed**

- Double-check your Gmail address and app password
- Ensure 2-Factor Authentication is enabled on your Google account
- Verify you're using the app password, not your regular Gmail password

**❌ Connection Timeout**

- Confirm the host is `smtp.gmail.com` and port is `587`
- Check that StartTLS is enabled
- Verify your network allows SMTP connections

**❌ "Less Secure App" Error**

- This usually indicates you're using your regular password instead of an app password
- Generate a new app password and use that instead

**❌ Books Not Arriving**

- Check the recipient's spam/junk folder
- Verify the recipient email address is correct
- Ensure your Gmail account has sufficient sending limits

**❌ Recipient Not Receiving Books**

- Verify the recipient's email address is correct
- Check if the recipient needs to whitelist your Gmail address
- For Kindle users, ensure your Gmail address is added to their approved email list in their Amazon account settings

### Permission and Visibility Issues

**❌ Cannot See Email Settings**

- Verify you have email permission in your Booklore account
- Contact your administrator to request email access
- Check that you're logged into the correct account

**❌ Cannot See Other Users' Providers**

- This is expected behavior - private email configurations are personal to each user
- Only shared providers (marked with "S" badge) are visible to all users
- Each user must set up their own private email providers and recipients
- If you need to send using different credentials, create a new provider in your account

**❌ Cannot Edit or Delete a Shared Provider**

- Shared providers can only be modified by the admin who created them
- If you need changes to a shared provider, contact your administrator
- You can always create your own private provider as an alternative

**❌ Cannot Share Providers (No Checkbox)**

- Only administrators can share email providers
- Contact your administrator if you need a provider shared with all users
- Regular users can only create private providers

---

## 🔒 Security Best Practices

1. **Use App Passwords Only**: Never use your main Gmail password for third-party applications
2. **Limit Access**: Only enable the minimum permissions required
3. **Monitor Usage**: Regularly check your Gmail sent folder for unexpected activity
4. **Revoke When Needed**: If you stop using Booklore, revoke the app password from your Google Account

---

## 📋 Alternative Email Providers

While this guide focuses on Gmail, Booklore supports other email providers:

- **Outlook/Hotmail**: Use `smtp-mail.outlook.com` on port `587`
- **Yahoo**: Use `smtp.mail.yahoo.com` on port `587`
- **Custom SMTP**: Any SMTP server with the appropriate settings

The configuration process is similar - simply adjust the host, port, and authentication settings according to your provider's documentation.

:::tip
You can configure multiple email providers and switch between them as needed. The default provider will be used for Quick Book Send, but you can select different providers when manually sending books. All your private email configurations are personal to your account and won't be visible to other
users. Administrators can optionally share providers to make them available to everyone.
:::

:::note[Privacy Note]
In email configuration v2, your private email provider credentials, recipient lists, and sending history are private to your account. Administrators can create shared providers that are available to all users, but they can only be modified by the admin who created them. Other users with email
permission will have their own separate private configurations.
:::
