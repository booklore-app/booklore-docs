# 📥 Bookdrop

Effortlessly add books to your library by simply dropping files into a folder. No manual uploads, no tedious clicking, just drop, review, and import. Bookdrop automates metadata extraction, enrichment, and organization, making library management a breeze.

![Bookdrop Processing](/img/bookdrop/bookdrop-1.jpg)

:::warning[Network Storage Limitation]
Bookdrop may not reliably detect new files on network-mounted storage (e.g., NFS or SMB). Many network filesystems do not propagate real-time filesystem events to the host process, so Bookdrop may not notice newly added files.

**If Bookdrop doesn't react when you add files:**
- Use a local folder instead
- Adjust mount options to enable notification support
- Restart Booklore to trigger a manual rescan
- Open the Bookdrop UI and click the manual "Refresh" button to force a reload
:::

:::tip[Pro Tip]
Drop entire folders of books at once. Bookdrop processes them sequentially and queues everything for easy review.
:::

---

## 🌟 What You'll Achieve

With Bookdrop, you can:

- **Import books automatically** without manual uploads
- **Process multiple books at once** by dropping entire folders
- **Enrich metadata automatically** from online sources like Google Books
- **Review and refine** metadata before finalizing imports
- **Organize books instantly** with smart library and subfolder assignments
- **Maintain clean libraries** with customizable filename patterns

---

## ✨ How Bookdrop Works

### 🔄 The Automated Pipeline

1. **📡 Real-Time Monitoring**  
   A background file watcher continuously scans your Bookdrop folder for new files.

2. **🧠 Smart Detection**  
   When files appear, Booklore extracts metadata from filenames and embedded tags.

3. **🌐 Automatic Enrichment**  
   If enabled, Booklore queries Google Books and Open Library to enhance metadata with covers, descriptions, and more.

4. **📋 Queue for Review**  
   All detected books appear in the Bookdrop UI for your review and approval.

5. **✅ Finalize Import**  
   After reviewing, books are renamed, organized, and moved to their designated libraries.

---

## 🚀 Getting Started

### Step 1: Configure the Bookdrop Folder

If you're using Docker, mount a local directory as your Bookdrop path in `docker-compose.yml`:

```yaml
services:
  booklore:
    # ...existing configuration...
    volumes:
      - /your/local/path/to/booklore/data:/app/data
      - /your/local/path/to/booklore/books:/books
      - /your/local/path/to/booklore/bookdrop:/bookdrop  # Bookdrop directory
```

:::warning[Permissions Required]
Ensure the Bookdrop folder has proper read/write permissions for the Booklore container.
:::

---

### Step 2: Add Books to Bookdrop

Adding books is as simple as copying files:

1. **Locate Your Bookdrop Folder**  
   Find the folder on your system (as configured in Step 1)

2. **Drop Your Books**  
   Copy any supported book files (`.pdf`, `.epub`, `.cbz`, `.mobi`, etc.) into the folder

3. **Drop Folders Too**  
   You can drop entire folders containing multiple books, Booklore processes them all

![Bookdrop Folder](/img/bookdrop/bookdrop-folder.jpg)

:::info[Supported Formats]
PDF, EPUB, CBZ, CBR, and CB7 are supported.
:::

---

### Step 3: Monitor Processing Progress

Booklore automatically detects and processes dropped files. Track progress in real-time:

![Bookdrop Progress](/img/bookdrop/bookdrop-progress.jpg)

1. **Open Notifications**  
   Click the 🔔 bell icon in the top-right corner

2. **View Current Status**
    - Currently processing book
    - Books remaining in queue
    - Books successfully processed

3. **Access Review**  
   When processing completes, click the **"Review"** button to open the Bookdrop UI

:::info[Processing Time]
Varies based on file size, number of books, and metadata enrichment settings. Most books process in seconds.
:::

---

## 📖 Understanding the Bookdrop UI

### Interface Overview

The Bookdrop UI is your control center for reviewing and finalizing imports. Let's explore each component:

![Bookdrop UI Overview](/img/bookdrop/bookdrop-pre.jpg)

---

### 🎯 Global Settings (Top Section)

#### 1. Filename Pattern Preview

Shows how books will be renamed based on your configured pattern. Patterns use metadata fields like `{title}`, `{author}`, and `{year}`.

:::tip[Customize Filename Patterns]
Edit patterns in **Settings → Metadata Settings** to control how books are renamed.
:::

#### 2. Default Library Selection

Choose which library all books should be imported into. This applies to all books unless overridden individually.

#### 3. Default Subfolder Selection

Optionally specify a subfolder within the library (e.g., "Sci-Fi", "Non-Fiction") for better organization.

#### 4. Apply Defaults to All

Click this button to apply the selected library and subfolder to every book in the list. Individual overrides remain respected.

---

### 📚 Per-Book Controls (Middle Section)

Each book in the list has individual controls:

#### 5. Metadata Status Indicator

A colored dot shows metadata quality:

- 🟢 **Green:** Metadata successfully fetched from online sources
- 🟡 **Yellow:** Only internal metadata available (from filename/embedded tags)

#### 6. Fetched Cover Preview

The book cover retrieved from online sources (Google Books, Open Library)

#### 7. Internal Cover Preview

The cover image embedded within the book file itself

:::tip[Cover Quality Comparison]
Compare both covers to choose the best quality one for your library.
:::

#### 8. Per-Book Library Override

Assign individual books to different libraries (overrides the default)

#### 9. Per-Book Subfolder Override

Assign individual books to different subfolders (overrides the default)

#### 10. Metadata Comparison Panel

Opens a detailed side-by-side view of fetched vs. internal metadata for precise control

---

### 🛠️ Bulk Action Buttons (Bottom Section)

#### 11. Apply All Metadata (with Cover)

Copies all fetched metadata **including covers** to all books. Use when confident in online data quality.

#### 12. Apply All Metadata (without Cover)

Applies fetched metadata but **keeps original embedded covers**. Best for books with high-quality embedded covers.

#### 13. Reset All Metadata

Reverts all changes made during this session, restoring original file-based values.

#### 14. Delete All

Clears the entire Bookdrop queue and discards all pending metadata. Original files remain on disk.

:::danger[Queue Reset Warning]
This clears your review queue but doesn't delete the actual files from disk.
:::

#### 15. Finalize Import

Begins the import process: moves files to libraries, applies metadata, and renames files. Progress shows in notifications.

#### 16. Post-Import Cleanup

After successful import, original files are automatically removed from Bookdrop to prevent reprocessing.

---

## 🎨 Advanced Metadata Management

### Per-Book Metadata Comparison

For granular control over individual books, use the metadata comparison dropdown:

![Metadata Picker](/img/bookdrop/bookdrop-dropdown.jpg)

#### 1. Open Metadata Picker

Click the dropdown icon next to any book to reveal the comparison panel.

#### 2. Auto-Fill Missing Fields (Single Arrow)

Copies **only missing fields** from fetched metadata. Existing values remain unchanged.

**Example:**

```
Current: Title="Book", Author=""
Fetched: Title="The Book", Author="John Doe"
Result: Title="Book", Author="John Doe" ← Only author copied
```

#### 3. Overwrite All Fields (Double Arrow)

Replaces **all fields** with fetched metadata. Use when fetched data is more accurate.

**Example:**

```
Current: Title="Book", Author="Unknown"
Fetched: Title="The Book", Author="John Doe"
Result: Title="The Book", Author="John Doe" ← Everything replaced
```

#### 4. Visual Feedback

Fields that have been updated are **highlighted in green** for easy tracking.

#### 5. Copy Individual Fields

Use the copy button next to specific fields to selectively update only what you want.

:::tip[Best Practice - Metadata Review]
Review the comparison for important books or when automatic enrichment seems uncertain.
:::

---

## ✅ Finalizing the Import

### Step 4: Review Import Summary

After clicking "Finalize Import", Booklore processes all books and displays a comprehensive summary:

![Import Summary](/img/bookdrop/bookdrop-summary.jpg)

The summary includes:

- ✅ **Successfully Imported Books**  
  Books that were processed and added to your libraries

- 📚 **Library & Subfolder Placement**  
  Where each book was stored in your collection

- ⚠️ **Skipped or Ignored Books**  
  Files that couldn't be processed or were duplicates

- 📊 **Processing Statistics**  
  Total counts and success rates

:::success[Import Complete]
Your books are now in your library and ready to read.
:::

---

Remember: Bookdrop is designed to make book management effortless. Drop files, review metadata, and build your perfect library with minimal effort. Happy reading! 📚✨
