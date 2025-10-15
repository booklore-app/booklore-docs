# 🔄 KOReader Progress Sync

Booklore enables you to synchronize your reading progress between KOReader and your Booklore library. You can push your current progress from KOReader to Booklore, or pull updates from Booklore back into KOReader to keep your reading status consistent across devices.

:::warning[Note]
Progress synchronization between the Booklore inbuilt reader and KOReader is **not supported** at this time, as they use different formats for storing reading progress. Progress for KOReader and the inbuilt Booklore reader is maintained separately.
:::

:::danger[OPDS Requirement]
KOReader sync **only works for books that have been downloaded from Booklore to KOReader via Booklore's OPDS feed**. Books that are sideloaded directly to KOReader (copied manually or obtained from other sources) cannot be synced with Booklore, as the sync system relies on matching books through Booklore's internal identifiers that are only assigned when books are accessed through OPDS.
:::

---

## 🛠️ Step 1: Configure KOReader Sync in Booklore

Before you can sync your reading progress, you need to enable and configure KOReader sync in your Booklore server. This involves setting up credentials and permissions for KOReader access.

![Booklore Device Settings](/img/koreader/1.jpg)

1. Go to **Settings** > **Device** in Booklore.
2. Click the **Edit** button to enable input fields for username and password.

---

![Booklore KOReader Credentials](/img/koreader/2.jpg)

1. Enter a username for KOReader.
2. Enter a strong password for KOReader.
3. Click **Save** to store the credentials.
4. Toggle **Enable KOReader Sync** to activate syncing. You can disable it later if needed.
5. Copy the **API URL** shown, this will be required in KOReader.

---

![Booklore User Permissions](/img/koreader/3.jpg)

1. To allow users to access KOReader sync, assign them the **KOReader Sync** permission in **Settings** > **User**.
   - Only users with this permission can log in and sync their reading progress from KOReader.
   - If a user does not have the KOReader Sync role, Booklore will reject any sync attempts from KOReader for that user.
   - You can assign or remove this permission for each user individually, giving you control over who can use the sync feature.

---

## 📲 Step 2: Set Up Sync in KOReader

Once Booklore is configured, set up KOReader to connect to your Booklore server and begin syncing your reading progress.

![KOReader Settings](/img/koreader/5.jpg)

1. Open KOReader and go to **Settings** > **Progress Sync**.

---

![KOReader Custom Sync](/img/koreader/6.jpg)

1. Select **Custom Sync Server**.
2. Enter the API URL you copied from Booklore (e.g., `http://your-booklore-domain/api/koreader`).
3. Click OK to **Save**.

---

![KOReader Login](/img/koreader/7.jpg)

1. Select **Register / Login**.
2. Enter the username you set in Booklore.
3. Enter the password you set in Booklore.
4. Click **Login**.

---

![KOReader Push/Pull](/img/koreader/8.jpg)

1. To push your reading progress from KOReader to Booklore, select **Push progress from this device**.
2. To pull your reading progress from Booklore to KOReader, select **Pull progress from other devices now**.

---

![KOReader Matching](/img/koreader/9.jpg)
![KOReader Matching 2](/img/koreader/10.jpg)

1. Ensure the **Document matching method** is set to **Binary** for proper syncing.

---

## 📈 Viewing Synced Progress in Booklore

Quickly check your KOReader sync status right on the book’s detail page, see a percentage and a yellow progress bar update in real time.

![Booklore Synced Progress](/img/koreader/11.jpg)

- In Booklore, you can view synced progress on the book details page as a percentage and as a yellow progress bar under the cover.
- To reset progress, click **Reset Progress**. This only resets KOReader progress in Booklore; the device’s read status remains unchanged.

---

:::tip[Sync Troubleshooting]
If syncing fails, double-check your credentials, API URL, and network connection.
:::
