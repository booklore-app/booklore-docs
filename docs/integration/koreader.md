# 📚 KOReader Sync

Synchronize reading progress between KOReader and Booklore. Push your current progress from KOReader to Booklore, or pull updates from Booklore back into KOReader.

:::warning[Important Limitations]
- Sync **only works for books downloaded from Booklore via OPDS**. Sideloaded books (copied manually or from other sources) cannot be synced, since the system relies on Booklore's internal identifiers assigned during OPDS download.
- Progress from the built-in Booklore reader and KOReader is tracked **separately**. They use different formats and do not sync with each other.
:::

---

## Step 1: Configure KOReader Sync in Booklore

1. Go to **Settings > Devices** in Booklore
2. Click **Edit** to enable the input fields

![Device Settings](/img/koreader/device-settings.jpg)

3. Enter a username and password for KOReader
4. Click **Save**
5. Toggle **Enable KOReader Sync** on
6. Copy the **API URL** shown (you'll need it in KOReader)

![Credentials Setup](/img/koreader/credentials-setup.jpg)

### User Permissions

Only users with the **KOReader Sync** permission can use this feature. Assign it in **Settings > Users**.

![User Permissions](/img/koreader/user-permissions.jpg)

---

## Step 2: Set Up Sync in KOReader

1. Open KOReader and go to **Settings > Progress Sync**

![Settings Menu](/img/koreader/settings-menu.jpg)

2. Select **Custom Sync Server** and enter the API URL you copied from Booklore

![Custom Sync Server](/img/koreader/custom-sync-server.jpg)

3. Select **Register / Login** and enter the username and password you set in Booklore

![Login Credentials](/img/koreader/login-credentials.jpg)

4. Use **Push progress from this device** to send progress to Booklore, or **Pull progress from other devices now** to get progress from Booklore

![Push Pull Options](/img/koreader/push-pull-options.jpg)

5. Make sure the **Document matching method** is set to **Binary**

![Matching Method](/img/koreader/matching-method.jpg)
![Binary Matching](/img/koreader/binary-matching.jpg)

---

## Viewing Synced Progress in Booklore

KOReader progress appears on the book's detail page as a percentage with a yellow progress bar under the cover.

![Synced Progress](/img/koreader/synced-progress.jpg)

Click **Reset Progress** to clear KOReader progress in Booklore. This does not affect the device's read status.
