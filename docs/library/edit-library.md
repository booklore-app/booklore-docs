# 🏛️ Library Management

Modify library settings, trigger re-scans, refresh metadata, or remove libraries from your Booklore instance.

---

## 🛠️ Accessing Library Options

Open the library menu from either location:

**Option 1: Sidebar**
- Click the ellipsis (⋯) icon next to the library name

**Option 2: Library Header**
- Navigate to the library view
- Click the ellipsis (⋯) icon in the header

![Edit Library 1](/img/edit-library/edit-library-1.jpg)
![Edit Library 2](/img/edit-library/edit-library-2.jpg)

---

## 📋 Available Actions

### Edit Library

Modify library configuration including name, icon, monitoring settings, and folder associations.

**Editable Settings:**
- Library name and icon
- Monitoring enable/disable
- Remove folders from library

![Edit Library 3](/img/edit-library/edit-library-3.jpg)

---

### Re-scan Library

Manually trigger a folder scan to detect changes:

**Use Cases:**
- Monitoring is disabled
- New books not automatically detected
- Books removed but still appear in library
- File system monitoring failed

**Process:**
- Scans all library folders
- Imports newly added books
- Removes deleted books from index
- Updates modified files

:::info[Monitoring vs. Manual Scan]
Re-scanning is unnecessary if monitoring is enabled and working correctly.
:::

---

### Refresh Book Metadata

Download and update metadata for all books in the library using configured providers.

**Configuration Options:**
- Select metadata providers
- Choose which fields to update
- Set override behavior for existing data

:::warning[Large Libraries]
Metadata fetching is time-consuming for libraries with many books. Consider running during off-hours.
:::

See [Metadata Configuration](../metadata/metadata-fetch-configuration.md) for detailed provider setup.

---

### Delete Library

Permanently remove the library from Booklore.

**What Gets Deleted:**
- Library configuration
- Book metadata from database
- Generated thumbnails and cache

**What Remains:**
- Original book files (untouched)
- Files remain in their folders

:::danger[Permanent Action]
Library deletion cannot be undone. All metadata and customizations will be lost.
:::

---

## 🎯 Common Workflows

### Adding New Books

**With Monitoring Enabled:**
- Books detected automatically
- No action required

**With Monitoring Disabled:**
1. Add books to library folder
2. Open library menu
3. Select "Re-scan Library"

### Fixing Missing Metadata

1. Open library menu
2. Select "Refresh Book Metadata"
3. Configure providers and options
4. Confirm to start batch update

### Reorganizing Libraries

1. Create new library with desired structure
2. Re-scan to populate
3. Delete old library if no longer needed
