# 📚 OPDS Integration Guide

OPDS (Open Publication Distribution System) allows you to access your Booklore library from various reading apps and devices. This guide will walk you through setting up OPDS feeds and connecting your favorite reading apps to your Booklore collection.

---

## 🔧 What is OPDS?

OPDS is an open standard that enables reading applications to discover and access digital publications. With OPDS enabled in Booklore, you can:

- Browse your library from any OPDS-compatible reading app
- Download books directly to your reading device
- Access your collection from multiple devices seamlessly
- Use apps like KOReader, Aldiko, FBReader, and many others

---

## ⚙️ Step 1: Configure OPDS Server

First, let's enable and configure the OPDS server in your Booklore settings.

![OPDS Settings](/img/opds/opds-1.jpg)

1. Navigate to **Settings** > **OPDS** in Booklore
2. Under **Server Control**, toggle **OPDS Server Enabled** to activate the service

:::info[Note]
By default, all libraries you have access to will be included in the OPDS feed.
:::

---

## 🔗 Step 2: Understanding OPDS Endpoints

Booklore provides two OPDS endpoints for maximum compatibility:

### OPDS v1 Catalog (Recommended)

- **URL:** `http://localhost:8080/api/v2/opds/catalog`
- **Compatibility:** Works with most reading apps and OPDS clients
- **Best for:** General use and maximum compatibility

### OPDS v2 Catalog

- **URL:** `http://localhost:8080/api/v2/opds`
- **Compatibility:** Limited client support
- **Best for:** Apps that specifically support OPDS v2 features

:::warning[Recommendation]
Use OPDS v1 for better compatibility unless your reading app specifically requires v2.
:::

---

## 👤 Step 3: Create OPDS Users

To access your OPDS feed, you'll need to create dedicated OPDS user credentials.

1. In the **OPDS Users** section, click **Create User**
2. Fill in the user details:

| Field        | Description                                 |
|--------------|---------------------------------------------|
| **Username** | Choose a username for OPDS access           |
| **Password** | Create a strong password for this OPDS user |

3. Click **Save** to create the OPDS user

:::danger[Security Note]
OPDS users are separate from your main Booklore account and are specifically for reading app access.
:::

:::warning[Important]
Passwords are created once and cannot be retrieved later. Make sure to store your OPDS credentials securely before saving.
:::

---

## 📱 Step 4: Connect Reading Apps

Now that your OPDS server is configured, you can connect various reading apps to access your Booklore library.

### Popular OPDS-Compatible Apps:

- **KOReader** (Android, iOS, Linux, Windows)
- **FBReader** (Multiple platforms)
- **Moon+ Reader** (Android)
- **Yomu** (iOS)
- **KyBook 3** (iOS, macOS)
- **Panels** (iOS, macOS) - Comic reader with OPDS support
- **Boox** (Android) - E-ink device native reader

### General Connection Steps:

1. Open your reading app
2. Look for **OPDS**, **Catalog**, or **Online Library** settings
3. Add a new OPDS catalog/server
4. Enter the OPDS v1 URL: `http://your-booklore-domain/api/v2/opds/catalog`
5. Enter your OPDS username and password
6. Save and browse your library

---

## 🔄 Example: Connecting KOReader

1. Open KOReader
2. Go to **File manager** > **Cloud storage**
3. Select **Add OPDS catalog**
4. Enter:
    - **Name:** Booklore Library
    - **URL:** `http://your-booklore-domain/api/v2/opds/catalog`
    - **Username:** Your OPDS username
    - **Password:** Your OPDS password
5. Tap **Add** to save the catalog
6. Browse and download books from your Booklore library

:::tip[KOReader Example]
KOReader sync only works for books downloaded from Booklore via OPDS. Sideloaded books cannot be synced.
:::

---

## 🔍 Troubleshooting

### Common Issues and Solutions

**❌ Reading App Can't Connect**

- Verify the OPDS server is enabled in Booklore settings
- Check that you're using the correct OPDS URL
- Ensure your OPDS username and password are correct
- Try using OPDS v1 URL for better compatibility

**❌ Books Not Appearing**

- Confirm you have access to the libraries containing the books
- Check that the books are properly indexed in Booklore
- Refresh or restart your reading app

**❌ Download Fails**

- Verify your network connection
- Check that the book file exists and is accessible
- Ensure your reading app has sufficient storage space

**❌ Authentication Errors**

- Double-check your OPDS username and password
- Verify the OPDS user exists in Booklore settings
- Try creating a new OPDS user if issues persist

---

## 🌐 Network Considerations

### Local Network Access

:::info[Local Network Access]
Replace `localhost:8080` with your actual Booklore server IP address.
:::

### Remote Access

:::info[Remote Access]
Ensure your Booklore server is accessible from the internet. Use HTTPS for secure connections.
:::

### Firewall Settings

:::warning[Firewall Settings]
Ensure your Booklore server port is accessible and your firewall allows OPDS connections.
:::
