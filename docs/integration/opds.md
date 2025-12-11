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

![OPDS Settings](/img/opds/opds.jpg)

1. Navigate to **Settings** > **OPDS** in Booklore
2. Under **Server Control**, toggle **OPDS Server Enabled** to activate the service

:::info[Note]
By default, all libraries you have access to will be included in the OPDS feed.
:::

---

## 🔗 Step 2: Get Your OPDS Catalog URL

Booklore provides a single OPDS endpoint for accessing your catalog:

### OPDS Catalog URL

- **URL:** `http://localhost:8080/api/v1/opds`
- **Compatibility:** Works with most OPDS-compatible reading apps
- **Authentication:** Requires OPDS user credentials (see Step 3)

You can copy this URL directly from the **OPDS Endpoint** section in your settings.

:::tip[Network Access]
Replace `localhost:8080` with your actual Booklore server address when accessing from other devices on your network.
:::

---

## 👤 Step 3: Create OPDS Users

To access your OPDS feed, you'll need to create dedicated OPDS user credentials.

1. In the **OPDS Users** section, click **Add User**
2. Fill in the user details:

| Field        | Description                                 |
|--------------|---------------------------------------------|
| **Username** | Choose a username for OPDS access           |
| **Password** | Create a strong password for this OPDS user |

3. Click **Create** to create the OPDS user

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
4. Enter the OPDS URL: `http://your-booklore-domain/api/v1/opds`
5. Enter your OPDS username and password
6. Save and browse your library

---

## 🔄 Example: Connecting KOReader

1. Open KOReader
2. In the top menu click on the magnifying glass. (Note that you must not have a book open.)
3. Select **OPDS catalog**
4. Click the hamburger menu at the top left. Select **Add catalog**.
5. Enter:
    - **Name:** Booklore Library
    - **URL:** `http://your-booklore-domain/api/v1/opds`
    - **Username:** Your OPDS username
    - **Password:** Your OPDS password
6. Tap **Save** to save the catalog
7. Browse and download books from your Booklore library

:::tip[KOReader Example]
KOReader sync only works for books downloaded from Booklore via OPDS. Sideloaded books cannot be synced.
:::

---

## 📖 OPDS Feed Types

Booklore provides several OPDS feeds to help you navigate and discover books in your library:

### Root Catalog

- **URL:** `/api/v1/opds`
- **Description:** The main entry point for your OPDS catalog. Provides navigation links to all other feeds.
- **Features:**
    - Browse all books
    - Recently added books
    - Libraries navigation
    - Shelves navigation
    - Surprise me (random books)
    - Search functionality

### All Books Catalog

- **URL:** `/api/v1/opds/catalog`
- **Description:** Browse your entire book collection with pagination support.
- **Parameters:**
    - `page` - Page number (default: 1)
    - `size` - Items per page (default: 50, max: 100)
- **Example:** `/api/v1/opds/catalog?page=1&size=50`

### Recently Added

- **URL:** `/api/v1/opds/recent`
- **Description:** View books sorted by when they were added to your library.
- **Parameters:**
    - `page` - Page number (default: 1)
    - `size` - Items per page (default: 50, max: 100)
- **Example:** `/api/v1/opds/recent?page=1&size=25`

### Libraries Navigation

- **URL:** `/api/v1/opds/libraries`
- **Description:** Browse books organized by library. Shows all libraries you have access to.
- **Usage:** Select a library to view only books from that collection.
- **Example URL:** `/api/v1/opds/catalog?libraryId=1`

### Shelves Navigation

- **URL:** `/api/v1/opds/shelves`
- **Description:** Access your personal shelves (collections you've created).
- **Usage:** Select a shelf to view books you've organized in that collection.
- **Example URL:** `/api/v1/opds/catalog?shelfId=5`
- **Note:** Only shows shelves you've created; requires V2 OPDS user authentication.

### Surprise Me

- **URL:** `/api/v1/opds/surprise`
- **Description:** Returns 25 random books from your accessible libraries.
- **Features:** Great for discovering books you might have forgotten about or trying something new.

### Search

- **URL:** `/api/v1/opds/catalog?q={searchTerms}`
- **Description:** Search across book titles, subtitles, series names, and authors.
- **Parameters:**
    - `q` - Search query
    - `libraryId` - Optional: Restrict search to specific library
    - `page` - Page number (default: 1)
    - `size` - Items per page (default: 50, max: 100)
- **Examples:**
    - `/api/v1/opds/catalog?q=tolkien`
    - `/api/v1/opds/catalog?q=foundation&libraryId=2`

### OpenSearch Description

- **URL:** `/api/v1/opds/search.opds`
- **Description:** Provides OpenSearch description document for OPDS-compatible readers.
- **Note:** This is automatically used by reading apps that support OPDS search.

:::tip[Feed Navigation]
Most OPDS readers will automatically display these feeds as navigation options when you add the root catalog URL. You typically don't need to manually enter individual feed URLs.
:::

---

## 🔍 Troubleshooting

### Common Issues and Solutions

**❌ Reading App Can't Connect**

- Verify the OPDS server is enabled in Booklore settings
- Check that you're using the correct OPDS URL: `http://your-server/api/v1/opds`
- Ensure your OPDS username and password are correct
- Verify network connectivity to your Booklore server

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
Replace `localhost:8080` with your actual Booklore server IP address when connecting from other devices on your local network.

Example: `http://192.168.1.100:8080/api/v1/opds`
:::

### Remote Access

:::info[Remote Access]
Ensure your Booklore server is accessible from the internet. Use HTTPS for secure connections when accessing remotely.

Example: `https://booklore.yourdomain.com/api/v1/opds`
:::

### Firewall Settings

:::warning[Firewall Settings]
Ensure your Booklore server port is accessible and your firewall allows OPDS connections on the appropriate port.
:::
