# 📚 Setup First Library

A library is a collection of book folders that Booklore monitors and indexes. Each library has its own settings for metadata handling, format priority, and file watching.

---

## 🛠️ Creating a Library

Click **"Add a Library"** from the dashboard, or click the **+** button next to **Libraries** in the sidebar.

![Empty Dashboard](/img/first-library/click-add-a-library.jpg)

This opens the library creation dialog.

![New Library Dialog](/img/first-library/new-library-dialog.jpg)

---

### 📝 Library Details

| Field | Required | Description |
|-------|----------|-------------|
| **Name** | Yes | A descriptive name (e.g., "Novels", "Comics", "Audiobooks") |
| **Icon** | No | Pick from the icon set or upload a custom SVG |

---

### 📁 Book Folders

Click **"Add folder"** to open the directory picker and select folders containing your book files. You can add multiple folders to a single library, but a folder can only belong to one library.

![Folder Picker](/img/first-library/library-folder-picker.jpg)

Remove a folder by clicking the **✕** button next to it.

:::warning[Permissions]
Make sure Docker has read access to the selected paths. If folders aren't showing up, check your volume mounts in `docker-compose.yml`.
:::

---

### ⚙️ Options

**Watch Folders** toggles automatic detection of new, changed, or deleted books. Recommended for active collections.

**Metadata Source** controls where Booklore reads metadata during scans:

| Option | Behavior |
|--------|----------|
| Embedded Only | Reads metadata from inside the book file (default) |
| Sidecar Only | Reads from sidecar files (e.g., OPF files next to the book) |
| Prefer Sidecar | Uses sidecar if available, falls back to embedded |
| Prefer Embedded | Uses embedded if available, falls back to sidecar |
| None | Skips metadata extraction during scan |

**Format Priority** sets which file format is treated as primary when a book exists in multiple formats. Drag the chips to reorder.

**Allowed Formats** restricts which file types this library scans. All formats are allowed by default: EPUB, PDF, CBX (CBZ/CBR/CB7), MOBI, AZW3, FB2, and Audiobook (M4B/M4A/MP3).

---

## ▶️ After Creation

Click **"Create"** to save. Booklore immediately scans the selected folders, extracts metadata, generates cover thumbnails, and indexes everything. Processing runs in the background, so you can navigate freely.

![Library Processing](/img/first-library/library-processing.jpg)

:::tip[Multiple Libraries]
Create separate libraries for different collections (e.g., Novels, Comics, Technical Books). Each can have its own metadata source and format settings.
:::

---

## 🔗 Next Steps

- Set up [metadata providers](../metadata/metadata-fetch-configuration.md) for richer book information
- Learn about [library management](edit-library.md) for rescanning, metadata refresh, and deletion
- Read about [folder structure](folder-structure.md) for optimal file organization
