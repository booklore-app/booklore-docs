# 📚 Setting Up Your First Library

In Booklore, a **library** is a folder on your system that contains books you want to manage. Each library is scanned and indexed so you can browse, search, and read your collection within the app.

This guide will help you **set up your first library**.

---

### Step 1: Start Library Creation

Begin by clicking the **"Add a Library"** button on the dashboard, as shown in the screenshot below.

![Empty Dashboard](/img/first-library/click-add-a-library.jpg)


### Step 2: Enter Library Details

On the next screen, fill in the following details to set up your library:

1. **Library Name**: Choose a name that reflects the type of books the library will contain (e.g., *Novels*, *Comics*, *Technical Books*).
2. **Library Icon**: Select an icon that visually represents your library. This is optional but helpful for quickly identifying libraries.
3. **Monitoring**: Toggle this option on if you want Booklore to automatically detect new or removed books from the folder. If disabled, you’ll need to manually refresh the library to update its contents.

Click **Next** to proceed.

![Library Details Form](/img/first-library/monitoring-library.jpg)


### Step 3: Choose Book Folders

Click the **"Add Book Folders"** button to open the folder picker. You can add one or more folders to your library ,  these should contain your actual book files (e.g., EPUB, PDF, CBZ, etc.).

Booklore will scan and index the files in these folders so they appear in your library.

To add a folder:
1. Navigate to the desired folder.
2. Select the desired path.
3. Click **"Select"** to confirm.

After you’ve selected the folders, they will appear in the list as shown in the third screenshot below:
- Arrow 1 shows the added folders.
- Arrow 2 lets you remove a folder by clicking the ❌ icon.
- Arrow 3 indicates the **"Save"** button, which finalizes the setup and begins library processing.

![Add Book Folders](/img/first-library/add-book-folders.jpg)
![Library Folder Picker](/img/first-library/library-folder-picker.jpg)
![Selected Library Folders](/img/first-library/selected-library-folders.jpg)

### Step 4: Finalize and Process Library

Once you click **"Save"**, Booklore will begin processing your library. It will:
- Scan all added folders.
- Extract embedded metadata from book files.
- Generate and cache cover thumbnails for fast browsing.

You’ll see real-time progress updates in the top notification widget. Additionally, the book count will update automatically in the left sidebar next to your library’s name.

:::note
All thumbnail and cache data are stored in the `data` folder within your Docker volume.
:::

![Library Processing](/img/first-library/library-processing.jpg)

:::success 🎉 Setup Complete!
Your first library is now set up and ready to use.
:::
