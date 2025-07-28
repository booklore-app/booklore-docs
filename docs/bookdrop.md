# 📥 Bookdrop

Bookdrop is one of Booklore's most powerful and convenient features, designed to streamline the process of adding books to your library.

Instead of manually uploading each file through the interface, simply place your book files (`.pdf`, `.epub`, `.cbz`, etc.) into a designated Bookdrop folder. Booklore will automatically detect, analyze, and prepare them for import, saving you time and effort.

---

## How Bookdrop Works

- 📡 Real-Time Monitoring: A background file watcher continuously scans the Bookdrop folder for new files.
- 🧠 Smart Detection: When a new file is dropped, Booklore extracts basic metadata like title and author from the filename or embedded tags.
- 🌐 Optional Metadata Enrichment: If enabled, Booklore can enhance metadata by querying sources such as Google Books or Open Library.
- 📝 Review & Import: All detected files appear in the Bookdrop UI, where you can refine metadata, assign to libraries, and finalize the import.

---

## Step 1: Configure the Bookdrop Folder

If you're using Docker, mount a local directory as the Bookdrop path in your `docker-compose.yml`:

```yaml
services:
  booklore:
    ...
    volumes:
      - /your/local/path/to/booklore/data:/app/data
      - /your/local/path/to/booklore/books:/books
      - /your/local/path/to/booklore/bookdrop:/bookdrop  # Bookdrop directory
```

---

## Step 2: Add Books to Bookdrop

To import new books:

1. Locate the Bookdrop folder on your system (shown as arrow 1 in the screenshot).
2. Copy your book files into this folder (shown as arrow 2).

Booklore will automatically detect them and queue them for review.

![Library Details Form](/img/bookdrop/bookdrop-folder.jpg)

---

## Step 3: Monitor Bookdrop Processing

Once your books are added to the Bookdrop folder, Booklore automatically begins processing them. You can monitor the progress as follows:

1. Click the notification bell icon in the top-right corner of the interface to open the notification panel.
2. The panel displays the book currently being processed, along with the total number of remaining files.
3. You will also see a count of books that have been successfully processed so far.
4. Once all files are processed, a "Review" button will appear. Click it to open the Bookdrop UI and review the metadata before finalizing the import.

![Bookdrop Processing](/img/bookdrop/bookdrop-progress.jpg)

---

## Step 4: Review and Finalize in the Bookdrop UI

After Booklore has processed your dropped files, the Bookdrop UI is where you review and finalize the metadata before the books are imported into your library. The interface provides several tools and options to help you ensure everything is categorized and labeled correctly.

![Bookdrop Processing](/img/bookdrop/bookdrop-pre.jpg)

1. **Filename Pattern Preview**  
   This section displays the currently configured filename pattern, which determines how each file will be renamed and where it will be stored in your library. The pattern uses metadata fields such as title, author, and publication year. You can edit this pattern in the Metadata Settings.

2. **Default Library Selection**  
   Use this dropdown to select a default library for all listed books. This is especially useful when importing multiple books that belong to the same collection.

3. **Default Subfolder Selection**  
   You can also define a default subfolder within the selected library (e.g., "Sci-Fi" or "Non-Fiction") to keep your content organized.

4. **Apply Defaults to All**  
   This action applies the selected library and subfolder to every book in the list. If needed, you can still override these settings for individual books.

5. **Metadata Status Indicator**  
   A small colored dot appears next to each book:
   - Green indicates that metadata has been successfully fetched from an online source.
   - Yellow indicates that only internal metadata from the file (e.g., filename, embedded tags) is available.

6. **Fetched Cover Preview**  
   Displays the book cover retrieved from online metadata sources.

7. **Internal Cover Preview**  
   Shows the cover image embedded within the book file itself, if one exists. You can compare this to the fetched cover.

8. **Per-Book Library Override**  
   Allows you to assign a different library for individual books. This is useful if some files belong in separate categories (e.g., some in "Novels," others in "Comics").

9. **Per-Book Subfolder Override**  
   Similarly, you can override the default subfolder for individual books to ensure they are stored in the correct path.

10. **Metadata Comparison Panel**  
    Opens a detailed side-by-side comparison of fetched versus internal metadata. You can copy individual fields or bulk apply them to ensure accuracy.

11. **Apply All Metadata (with Cover)**  
    Copies all fetched metadata, including the cover image, to all books. This is recommended only when you are confident in the quality and accuracy of the fetched data.

12. **Apply All Metadata (without Cover)**  
    Applies all fetched metadata but retains the book’s original embedded cover image.

13. **Reset All Metadata**  
    Reverts any metadata changes made during this session, restoring the original file-based values.

14. **Delete All**  
    Clears the entire Bookdrop queue. This cancels the import session and discards all pending metadata edits, but does not delete the actual files from disk.

15. **Finalize Import**  
    Completes the import process by moving files into their assigned libraries and renaming them according to the filename pattern. You can monitor progress in the top-right notification panel.

16. **Post-Import Cleanup**  
    After the import is successful, the original files are removed from the Bookdrop folder to prevent reprocessing.

---

## Step 5: Customize Metadata for Individual Books

If you prefer to manually verify and edit metadata on a per-book basis, Booklore provides a metadata comparison panel accessible through a dropdown next to each book.

![Bookdrop Pre Final](/img/bookdrop/bookdrop-dropdown.jpg)

1. **Open Metadata Picker**  
   Click the dropdown icon to reveal the metadata comparison view. This panel shows both the internal metadata (extracted from the file) and the fetched metadata (downloaded from online sources).

2. **Auto-Fill Missing Fields**  
   Click the single-arrow button to copy only the fields that are missing in the current data. Existing values will not be overwritten.

3. **Overwrite All Fields**  
   Click the double-arrow button to replace all existing metadata fields with the fetched ones. This is useful if the downloaded metadata is more accurate or complete.

4. **Visual Feedback for Updates**  
   Any field that has been updated will be highlighted in green. This provides an easy way to track which fields have been modified.

5. **Copy Individual Fields**  
   If you only want to update a specific field (such as the title, author, or description), you can use the individual copy button next to each field to selectively apply changes.

This tool offers granular control and is ideal when accuracy is important or when automatic metadata enrichment doesn't meet your expectations.

---

## Step 6: Import Summary

Once the import has been completed, Booklore displays a summary dialog to confirm the results. This summary includes:

![Bookdrop Pre Final](/img/bookdrop/bookdrop-summary.jpg)

- ✅ A list of books that were successfully imported
- 📚 The library and subfolder where each book was placed
- ⚠️ Any books that were skipped or ignored due to issues or duplicates

Reviewing this summary ensures that everything was imported as expected. You can now visit your libraries to begin reading and managing your newly added books.
