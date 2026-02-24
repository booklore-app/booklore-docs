# 🌍 OPDS

OPDS (Open Publication Distribution System) lets you access your Booklore library from reading apps on any device. Booklore also provides a Komga-compatible API for apps like Tachiyomi and Komelia.

---

## Step 1: Enable the OPDS Server

1. Go to **Settings > OPDS** in Booklore
2. Toggle **OPDS Server Enabled** on

![OPDS Settings](/img/opds/opds.jpg)

By default, all libraries you have access to are included in the OPDS feed.

---

## Step 2: Copy the Catalog URL

The OPDS Catalog URL is shown in the **OPDS Endpoint** section. Copy it using the button provided.

The URL format is: `http://your-server:6060/api/v1/opds`

:::tip[Network Access]
Replace `localhost` with your server's IP address or domain name when connecting from other devices.
:::

---

## Step 3: Create OPDS Users

OPDS uses its own user accounts, separate from your Booklore login.

1. In the **OPDS Users** section, click **Add User**
2. Enter a username and password
3. Click **Create**

:::warning[Passwords]
Passwords cannot be retrieved after creation. Store your OPDS credentials securely.
:::

---

## Step 4: Connect a Reading App

In your reading app, add a new OPDS catalog with:

- **URL:** Your OPDS Catalog URL
- **Username:** Your OPDS username
- **Password:** Your OPDS password

### Compatible Apps

| App | Platform |
|-----|----------|
| KOReader | Android, iOS, Linux, Windows |
| Moon+ Reader | Android |
| FBReader | Multi-platform |
| Panels | iOS, macOS |
| Yomu | iOS |
| KyBook 3 | iOS, macOS |
| Boox | Android (e-ink devices) |

### KOReader Example

1. Open KOReader (with no book open)
2. Tap the magnifying glass icon in the top menu
3. Select **OPDS catalog**
4. Tap the hamburger menu (top left) and select **Add catalog**
5. Enter a name, your OPDS URL, username, and password
6. Save and browse your library

:::tip[KOReader Progress Sync]
KOReader progress sync only works for books downloaded via OPDS. See [KOReader Sync](koreader.md) for setup.
:::

---

## Available Feeds

Most reading apps automatically discover these feeds from the root catalog URL. You typically don't need to enter them manually.

| Feed | URL | Description |
|------|-----|-------------|
| Root Catalog | `/api/v1/opds` | Main entry point with navigation links |
| All Books | `/api/v1/opds/catalog` | Full catalog with pagination |
| Recently Added | `/api/v1/opds/recent` | Books sorted by date added |
| Libraries | `/api/v1/opds/libraries` | Browse by library |
| Shelves | `/api/v1/opds/shelves` | Browse by shelf |
| Magic Shelves | `/api/v1/opds/magic-shelves` | Browse magic shelves |
| Authors | `/api/v1/opds/authors` | Browse by author |
| Series | `/api/v1/opds/series` | Browse by series |
| Surprise Me | `/api/v1/opds/surprise` | 25 random books |
| Search | `/api/v1/opds/catalog?q={terms}` | Search titles, series, and authors |

Pagination parameters: `page` (default 1) and `size` (default 50, max 100).

---

## Komga-Compatible API

Booklore also exposes a Komga-compatible API at `/komga/api/` for apps that support the Komga protocol, such as Tachiyomi and Komelia. This can be enabled separately in the OPDS settings.

---

## Troubleshooting

**App can't connect:** Verify the OPDS server is enabled, the URL is correct, and your OPDS credentials are right. Check network connectivity to your Booklore server.

**Books not appearing:** Confirm you have access to the libraries containing the books. Try refreshing or restarting your reading app.

**Authentication errors:** Double-check your OPDS username and password. OPDS users are separate from Booklore accounts.
