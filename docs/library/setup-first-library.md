# 📚 First Library Configuration

Set up your first library to organize and manage your digital book collection. A library monitors one or more folders for automatic indexing and metadata enrichment.

---

## 📖 Understanding Libraries

A **library** is a logical grouping of book folders with its own configuration and metadata cache. Each library can monitor multiple folders, but folders can only belong to one library.

**Supported Formats:** EPUB, PDF, CBZ, CBR, and CB7

:::tip[Multiple Libraries]
Create separate libraries for different collections (e.g., Novels, Comics, Technical Books).
:::

---

## 🛠️ Configuration Steps

### Step 1: Start Library Creation

Click **"Add a Library"** from your dashboard.

![Empty Dashboard](/img/first-library/click-add-a-library.jpg)

---

### Step 2: Configure Library Details

![Library Details Form](/img/first-library/monitoring-library.jpg)

**Required:**
- **Library Name**: Descriptive identifier (e.g., "Science Fiction", "Manga Collection")
- **Library Icon**: Visual identifier from icon picker

**Optional:**
- **Monitoring**: Enable to automatically detect new/changed/deleted books
  - Recommended for active collections
  - May impact performance with large folders

Click **"Next"** to continue.

---

### Step 3: Add Book Folders

1. Click **"Add Book Folders"**
2. Navigate to your books folder
3. Click **"Select"** to confirm

![Add Book Folders](/img/first-library/add-book-folders.jpg)
![Library Folder Picker](/img/first-library/library-folder-picker.jpg)

**Managing Folders:**

![Selected Library Folders](/img/first-library/selected-library-folders.jpg)

- Multiple folders can be added to one library
- Remove folders using the ❌ button
- Ensure Docker has read permissions for selected paths

:::warning[Permissions]
Check Docker volume mounts in `docker-compose.yml` if folders aren't accessible.
:::

Click **"Save"** to begin processing.

---

### Step 4: Library Processing

Booklore automatically processes your library:

![Library Processing](/img/first-library/library-processing.jpg)

**Processing includes:**
1. Folder scanning for supported files
2. Metadata extraction from books
3. Cover thumbnail generation
4. Database indexing

:::info[Background Processing]
Processing continues in the background. Navigate freely while it completes.
:::

---

## 🎯 Post-Setup

### Verify Setup

1. Check book count in sidebar
2. Browse library to view indexed books
3. Test search functionality

### Next Steps

- Configure [metadata providers](../metadata/metadata-fetch-configuration.md)
- Adjust library settings for monitoring and caching
- Add more libraries for different collections

:::success[Setup Complete!]
Your library is ready. Start browsing, searching, and reading your collection!
:::

---

## 📋 Troubleshooting

### Books Not Appearing

**Check:**
- Docker volume mounts in `docker-compose.yml`
- File formats are supported
- Files have proper extensions (.epub, .pdf, etc.)
- Container logs for permission errors

### Slow Processing

**Solutions:**
- Increase Docker memory/CPU limits
- Process network folders in batches
- Temporarily disable monitoring during scan
- Split into smaller libraries

### Missing Metadata

**Solutions:**
- Use online metadata fetchers
- Manually add covers/data via editor
- Check file integrity

### Monitoring Not Working

**Solutions:**
- Verify monitoring enabled in settings
- Trigger manual scan: Library settings → Scan Now
- Use scheduled scans for network folders
