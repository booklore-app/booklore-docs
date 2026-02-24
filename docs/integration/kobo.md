# 📲 Kobo Integration

Sync books from your Booklore library to your Kobo eReader. Books are managed through a dedicated Kobo shelf. Adding or removing books from this shelf controls what syncs to your device.

**Supported formats:** EPUB and CBX (comics). PDF is not supported for Kobo sync. EPUB files can optionally be converted to KEPUB format for better Kobo rendering.

---

## Nginx Reverse Proxy Configuration

If you use nginx as a reverse proxy, add these settings for Kobo sync to work properly:

```nginx
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Host $host;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-Port $server_port;

proxy_buffer_size 128k;
proxy_buffers 4 256k;
proxy_busy_buffers_size 256k;
large_client_header_buffers 8 32k;
```

:::info[Nginx Proxy Manager]
The proxy headers are already set automatically, but you still need to add the buffer settings manually.
:::

:::warning[Other Reverse Proxies]
If you use Caddy, Traefik, or another reverse proxy, configure equivalent headers and buffer settings. Consult your proxy's documentation.
:::

---

## Step 1: Get Your API Token

1. Go to **Settings > Devices** in Booklore
2. Find the **Kobo Sync Settings** section
3. Copy your unique API token

![Device Settings](/img/kobo/device-settings.jpg)

You can regenerate the token at any time, but you'll need to update your Kobo's configuration afterward.

:::info[Permissions]
Admin users have Kobo Sync enabled by default. Other users need the permission granted by an admin (see below).
:::

---

## Step 2: Configure Your Kobo

1. Connect your Kobo to your computer via USB
2. Enable hidden files in your file manager
3. Open `.kobo/Kobo/Kobo eReader.conf` in a text editor

![Config File Location](/img/kobo/config-file-location.jpg)

4. Find the `[OneStoreServices]` section and update the `api_endpoint` line:

**Local network:**

```text
api_endpoint=http://192.168.1.100:6060/api/kobo/your-token-here
```

**Remote server (with reverse proxy):**

```text
api_endpoint=https://booklore.example.com/api/kobo/your-token-here
```

![Before Change](/img/kobo/config-before.jpg)
![After Change](/img/kobo/config-after.jpg)

5. Save the file and safely eject your Kobo

---

## Step 3: Sync Books

1. In Booklore, click the three-dot menu on any book card and select **Assign Shelf**
2. Choose your **Kobo** shelf

![Assign Shelf](/img/kobo/assign-shelf.jpg)

3. Repeat for all books you want on your device

![Shelf With Books](/img/kobo/shelf-with-books.jpg)

4. On your Kobo, go to **My Books** and tap the sync icon, then **Sync Now**

![Sync Button](/img/kobo/sync-button.jpg)

5. Your Booklore books appear on the device

![Synced Books](/img/kobo/synced-books.jpg)

---

## Removing Books

### From the Kobo device

1. Tap the three dots on the book cover and select **Remove**

![Remove Menu](/img/kobo/remove-menu.jpg)

2. Select **Remove from My Books**

![Remove Confirm](/img/kobo/remove-confirm.jpg)

3. Tap **Sync Now** to push the change back to Booklore

![Sync After Removal](/img/kobo/sync-after-removal.jpg)

The book is removed from your Kobo shelf in Booklore but remains in your main library.

![Shelf After Removal](/img/kobo/shelf-after-removal.jpg)

### From Booklore

1. Go to your Kobo shelf
2. Click the three-dot menu on the book and select **Assign Shelf**
3. Uncheck the Kobo shelf and save
4. Sync your Kobo device to apply the change

---

## Viewing Synced Progress

Reading progress from your Kobo appears on the book's detail page in Booklore as a percentage with a red progress bar under the cover.

![Synced Progress](/img/kobo/synced-progress.jpg)

Click **Reset Progress** to clear the Kobo progress in Booklore. This does not affect the device's read status.

---

## Granting Access to Other Users

By default, only admins have Kobo Sync enabled. To grant it to other users:

1. Go to **Settings > Users**
2. Click on the user
3. Enable the **Kobo Sync** permission
4. Save

![User Permissions](/img/kobo/user-permissions.jpg)

The user can then find their own API token in **Settings > Devices** and follow the setup steps above. Each user gets their own token and Kobo shelf.
