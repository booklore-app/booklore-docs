# 📧 Email Setup Guide

Booklore allows you to send books directly via email using various email providers. This guide will walk you through setting up Gmail as your email provider, enabling you to use the "Quick Book Send" feature from any book card.

:::info[What's New in v2]
Users with email permission can now set up their own personal email providers and recipients without interfering with other users' configurations. Each user manages their own email settings independently.
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

:::info[Personal Configuration]
Your email provider configuration is personal to your account. Other users won't see or be able to use your email providers, and you won't see theirs.
:::

![Email Providers Page](/img/email/email-1.jpg)

1. Navigate to **Settings** > **Email** in Booklore
2. Click **Create Provider**

---

![Gmail Configuration](/img/email/email-2.jpg)

Fill in the Gmail configuration details:

| Field            | Value                                                   |
|------------------|---------------------------------------------------------|
| **Name**         | Gmail (or any descriptive name)                         |
| **Host**         | `smtp.gmail.com`                                        |
| **Port**         | `587`                                                   |
| **Username**     | Your full Gmail address (e.g., `your-email@gmail.com`) |
| **Password**     | The 16-character app password you generated             |
| **From Address** | Your Gmail address (same as username)                   |
| **Auth**         | ✅ Enabled                                               |
| **StartTLS**     | ✅ Enabled                                               |

1. Click **Create Email Provider** to save the configuration

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

| Field                 | Value                                                       |
|-----------------------|-------------------------------------------------------------|
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
In the new email configuration system, each user can configure their own email providers and recipients. No interference between users.
:::

### How Email v2 Works

In the new email configuration system:

- **Personal Email Providers**: Each user can configure their own email providers (Gmail, Outlook, custom SMTP, etc.)
- **Personal Recipients**: Each user maintains their own list of email recipients
- **Independent Defaults**: Each user sets their own default email provider and default recipient
- **No Interference**: Users cannot see or modify other users' email configurations
- **Shared Library**: All users can send any book from the shared library using their own email settings

### Use Cases

**Scenario 1: Family Library**
- Dad uses his Gmail to send to his Kindle
- Mom uses her Outlook to send to her tablet
- Each has their own recipient lists and defaults

**Scenario 2: Organization**
- Team members can send books to their own devices
- Each person's email configuration is private
- No shared credentials or confusion

**Scenario 3: Privacy**
- Your email provider credentials are yours alone
- Your recipient list remains private
- Other users cannot see who you send books to

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

- This is expected behavior - email configurations are personal to each user
- Each user must set up their own email providers and recipients
- If you need to send using different credentials, create a new provider in your account

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
You can configure multiple email providers and switch between them as needed. The default provider will be used for Quick Book Send, but you can select different providers when manually sending books. All your email configurations are personal to your account and won't be visible to other users.
:::

:::note[Privacy Note]
In email configuration v2, your email provider credentials, recipient lists, and sending history are private to your account. Other users with email permission will have their own separate configurations.
:::
