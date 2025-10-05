# 📧 Email Setup Guide

Booklore allows you to send books directly via email using various email providers. This guide will walk you through setting up Gmail as your email provider, enabling you to use the "Quick Book Send" feature from any book card.

---

## 🔧 Prerequisites

Before setting up Gmail as your email provider, ensure you have:

1. **A Gmail account** with email sending privileges
2. **2-Factor Authentication enabled** on your Google account (required for app passwords)
3. **App Password generated** for Booklore (we'll guide you through this process)

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

> ⚠️ **Important:** Save this app password securely. Google will only display it once!

---

## ⚙️ Step 2: Configure Email Provider in Booklore

Now let's add Gmail as an email provider in your Booklore settings.

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

> 💡 **Tip:** You can add multiple recipients such as family members, friends, or different devices (Kindle, tablet, etc.)

> 🚀 **Quick Send Ready:** Once you have configured a default email provider and default recipient, you can send books with one click using "Quick Book Send" from any book card.

---

This is how the interface should look after setting up both the email provider and recipient:

![Recipients List](/img/email/email-4.jpg)

---

## 📚 Step 4: Sending Books via Email

Booklore offers two convenient methods to send books via email:

![Advanced Send](/img/email/email-5.jpg)

### 🚀 Quick Book Send (One-Click)

For fast, streamlined sending using your default settings:

1. Navigate to any book in your library
2. Click the **three-dot menu** on the book card
3. Select **Book Send** > **Quick Send**
4. The book is instantly sent using your **default email provider** to your **default recipient**

> ⚡ **Perfect for:** Regular sending to the same recipient (such as your Kindle)

### ⚙️ Custom/Advanced Send

For flexible sending with specific provider and recipient selection:

1. Navigate to any book in your library
2. Click the **three-dot menu** on the book card
3. Select **Book Send** > **Custom Send**
4. Choose your desired **email provider** from the dropdown
5. Select the **recipient** from the dropdown
6. Click **Send**

> 🎯 **Perfect for:** Sending to different recipients or using specific email providers for certain books

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

---

> 💡 **Tip:** You can configure multiple email providers and switch between them as needed. The default provider will be used for Quick Book Send, but you can select different providers when manually sending books.
