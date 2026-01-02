# 🚀 Getting Started with Booklore

Welcome to **Booklore** - your self-hosted digital library management system. This guide will help you get up and running quickly.

---

## 🎯 What is Booklore?

Booklore is an open-source library management system that gives you complete control over your digital book collection. Your books and data stay on your own server, ensuring privacy and independence.

### Key Benefits

- **🔒 Privacy First** - Your books, your data, your server
- **💰 Free & Open Source** - No subscription fees
- **🌐 Access Anywhere** - Web, e-readers, and mobile devices
- **👥 Multi-User** - Support for family and friends
- **🤖 Smart Metadata** - Automatic book information enrichment

---

## 📋 Prerequisites

Before you start:

- **Docker & Docker Compose** (v20.10+ / v2.0+)
- **System Resources:** 2GB RAM, 10GB+ storage
- **Port 6060** available
- **Internet connection** for metadata fetching

> 📖 See the [Installation Guide](/docs/installation) for detailed setup instructions.

---

## 🏁 Quick Start

### Your 5-Step Journey

```
1. Install → 2. Create Admin → 3. Add Library → 4. Import Books → 5. Start Reading
```

---

## 📥 Step 1: Installation

Create the directory structure and start the containers:

```bash
# Create directories
mkdir -p ~/booklore/{config/mariadb,data,books,bookdrop}
cd ~/booklore

# Create and configure docker-compose.yml
# (See Installation Guide for complete configuration)

# Start containers
docker compose up -d

# Verify
docker compose ps
```

> 📖 **Full Guide:** [Installation Documentation](/docs/installation)

---

## 👤 Step 2: Create Admin Account

1. Open your browser: `http://localhost:6060`
2. Complete the setup wizard:
   - Create administrator username and password
   - Set your email address
   - Configure timezone (optional)
3. Click "Complete Setup"

> 🔐 **Security Tip:** Use a strong, unique password with a password manager.

> 📖 **Details:** [Initial Setup Guide](/docs/initial-setup)

---

## 📚 Step 3: Create Your First Library

Libraries organize your books by folder paths. You can create multiple libraries for different collections.

1. Go to **Settings** → **Libraries**
2. Click **"Add Library"**
3. Configure:
   - **Name:** "My Main Library"
   - **Path:** `/books`
   - **Enable scanning:** On
4. Click **"Save"** then **"Scan Library"**

> 💡 **Tip:** Start with one library to learn the workflow.

> 📖 **Learn More:** [Setup First Library](/docs/library/setup-first-library)

---

## 📖 Step 4: Add Books

Choose the method that works best for you:

### Method 1: Direct File Copy

**Best for:** Initial bulk import

```bash
# Copy books to the directory
cp /path/to/your/books/* ~/booklore/books/

# Trigger scan in Booklore UI
# Settings → Libraries → Scan Now
```

### Method 2: Bookdrop (Recommended)

**Best for:** Automatic, hands-free importing

1. Enable in **Settings** → **Bookdrop**
2. Drop files into the folder:
   ```bash
   cp /path/to/book.epub ~/booklore/bookdrop/
   ```
3. Booklore processes automatically

> 📖 **Full Guide:** [Bookdrop Configuration](/docs/bookdrop)

### Method 3: Web Upload

:::warning[Cloudflare Tunnels Upload Limit]
If you're using a Cloudflare Tunnel to serve your Booklore instance through a reverse proxy, note that there is a [100MB upload limit](<[url](https://developers.cloudflare.com/workers/platform/limits/#request-limits)>) on the free tier.
:::

1. Navigate to your library
2. Click **"Upload Books"**
3. Select and upload files

---

## 📱 Step 5: Start Reading

### Web Reader

1. Click any book cover
2. Click **"Read"**
3. Customize settings (font, theme, size)
4. Enjoy!

### E-Reader/Mobile App

**For Kobo devices:**
- Follow the [Kobo Integration](/docs/integration/kobo) guide

**For other OPDS clients:**
- Get your OPDS URL from **Settings** → **OPDS**
- Add to your reading app

> 📖 **More Options:** [OPDS Integration](/docs/integration/opds)

---

## 🔧 Essential Configuration

### Metadata Enrichment

Enable automatic book information fetching:

1. **Settings** → **Metadata**
2. Add Google Books API key (optional but recommended)
3. Enable auto-fetch on import

> 📖 **Setup Guide:** [Metadata Configuration](/docs/metadata/metadata-fetch-configuration)

### Organization

**Shelves:** Create custom or magic shelves for categorization  
**Tags:** Add flexible labels to your books  
**Series:** Group related books together

> 📖 **Learn More:** [Magic Shelf](/docs/magic-shelf)

---

## 🎓 Next Steps

Once you're comfortable with the basics, explore:

- **[Setup Admin User](/docs/initial-setup)** - Detailed account configuration
- **[Bookdrop](/docs/bookdrop)** - Automatic import setup
- **[Magic Shelf](/docs/magic-shelf)** - Dynamic organization
- **[Kobo Integration](/docs/integration/kobo)** - Connect your e-reader
- **[OPDS Integration](/docs/integration/opds)** - Mobile app access
- **[Task Manager](/docs/tools/task-manager)** - Monitor system operations

---

## 💡 Quick Tips

- **Start small:** Import 10-20 books first to learn the system
- **Let metadata work:** Enable auto-fetching for enriched book info
- **Use Bookdrop:** Set it up early for hassle-free importing
- **Backup regularly:** `data` and `books` directories
- **Check Task Manager:** Monitor import and scan progress

---

## ❓ Common Questions

**Q: Can I access Booklore remotely?**  
A: Yes, set up a reverse proxy with HTTPS. See [Installation Guide](/docs/installation#setting-up-https-with-reverse-proxy).

**Q: How do I backup my library?**  
A: Backup `~/booklore/data` and `~/your-books-directory/books` directories regularly.

**Q: What e-readers work with Booklore?**  
A: Any device supporting OPDS: Kobo, Kindle (with apps), Android/iOS apps, etc.

---

## 🌟 Get Help

- **[GitHub Issues](https://github.com/booklore-app/booklore)** - Report bugs
- **[Community Discord](https://discord.gg/Ee5hd458Uz)** - Chat and get support

---

Happy reading! 📚✨ If you need detailed information on any feature, check the linked guides above.
