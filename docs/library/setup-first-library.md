# 📚 First Library Configuration

Set up your first library to organize and manage your book collection. A library monitors one or more folders for automatic indexing and metadata enrichment.

---

## 📖 Understanding Libraries

A **library** is a logical grouping of book folders with its own configuration and metadata cache. Each library can monitor multiple folders, but folders can only belong to one library.

**Supported Formats:** EPUB, PDF, CBX (CBZ/CBR/CB7), MOBI, AZW3, FB2, and Audiobook

:::tip[Multiple Libraries]
Create separate libraries for different collections (e.g., Novels, Comics, Technical Books).
:::

---

## 🛠️ Creating a Library

Click **"Add a Library"** from your dashboard, or use the **+** button next to **Libraries** in the sidebar.

![Empty Dashboard](/img/first-library/click-add-a-library.jpg)

This opens the **New Library** dialog where you can configure everything in one place.

![New Library Dialog](/img/first-library/new-library-dialog.jpg)

---

### 📝 Library Details

| Field | Required | Description |
|-------|----------|-------------|
| **Name** | Yes | A descriptive name for your library (e.g., "Science Fiction", "Manga Collection") |
| **Icon** | No | A visual identifier from the icon picker. Click **"Choose icon"** to browse available icons. |

---

### 📁 Book Folders

Click **"Add folder"** to open the directory picker and select folders containing your book files. You can add multiple folders to a single library.

- Navigate the folder tree and select the folders you want
- Remove folders by clicking the **✕** button next to them
- The badge next to **Book Folders** shows how many folders are selected

:::warning[Permissions]
Make sure Docker has read permissions for the selected paths. Check your volume mounts in `docker-compose.yml` if folders aren't accessible.
:::

---

### ⚙️ Options

#### 👁️ Watch Folders

Toggle this on to automatically detect new, changed, or deleted books in your library folders. Recommended for active collections.

#### 📋 Metadata Source

Controls where Booklore reads metadata from when scanning books.

| Option | Description |
|--------|-------------|
| **Embedded Only** | Reads metadata only from inside the book file (default) |
| **Sidecar Only** | Reads metadata only from sidecar files (e.g., OPF files next to the book) |
| **Prefer Sidecar** | Uses sidecar metadata if available, falls back to embedded |
| **Prefer Embedded** | Uses embedded metadata if available, falls back to sidecar |
| **None** | Skips metadata extraction during scan |

#### 🔢 Format Priority

When a book exists in multiple file formats, Booklore uses this priority order to decide which format to prefer. Drag and drop the format chips to reorder them.

#### ✅ Allowed Formats

Choose which file formats this library should recognize during scans. By default, all formats are allowed. Uncheck **"Allow all"** to select specific formats.

---

## ▶️ After Creation

Click **"Create"** to save your library. Booklore will begin processing automatically:

1. Scans selected folders for supported files
2. Extracts metadata from books
3. Generates cover thumbnails
4. Indexes everything into the database

:::info[Background Processing]
Processing continues in the background. You can navigate freely while it completes.
:::

---

## 🎯 Next Steps

- Configure [metadata providers](../metadata/metadata-fetch-configuration.md) for richer book data
- Learn about [library management](edit-library.md) for re-scanning, metadata refresh, and more
- Add more libraries for different collections

:::success[Setup Complete!]
Your library is ready. Start browsing, searching, and reading your collection!
:::

---

## 📋 Troubleshooting

### Books Not Appearing

**Check:**
- Docker volume mounts in `docker-compose.yml`
- File formats are supported and allowed in library settings
- Files have proper extensions (.epub, .pdf, etc.)
- Container logs for permission errors

### Slow Processing

**Solutions:**
- Increase Docker memory/CPU limits
- Process network folders in batches
- Temporarily disable watch folders during initial scan
- Split into smaller libraries

### Missing Metadata

**Solutions:**
- Use online metadata fetchers
- Manually add covers/data via the metadata editor
- Check file integrity
- Try a different metadata source setting

### Watch Folders Not Working

**Solutions:**
- Verify watch folders is enabled in library settings
- Trigger manual scan: Library menu → Re-scan Library
- Use scheduled scans for network folders
