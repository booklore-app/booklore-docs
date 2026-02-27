# 🍪 Amazon Cookie Setup

If you encounter 503 errors when fetching metadata from Amazon, you can configure browser cookies to bypass Amazon's automated traffic detection.

:::warning[Security Note]
Use a secondary Amazon account when possible to protect your main account from potential restrictions.
:::

---

## 🛠️ Step 1: Prepare Your Browser Session

1. **Open your web browser** and navigate to your regional Amazon website:
   - US: https://www.amazon.com
   - UK: https://www.amazon.co.uk
   - Other regions: Use your local Amazon domain

2. **Sign in to Amazon** using a secondary account if available

---

## 🔧 Step 2: Access Developer Tools

1. **Open Developer Tools** using one of these methods:
   - Press `F12` on your keyboard
   - Right-click anywhere on the page and select "Inspect" or "Inspect Element"
   - Use the keyboard shortcut `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)

2. **Navigate to the Network tab** in the developer tools panel

---

## 📡 Step 3: Capture Network Requests and Extract Cookie Information

![Accessing Amazon cookies in browser developer tools](/img/metadata/amazon-cookie/amazon-cookie-1.jpg)

1. **Refresh the page** by pressing `F5` or clicking the refresh button
2. **Wait for all requests to load** - you'll see a list of network requests appear
3. **Locate the main request** - Look for the first request in the list, typically showing the Amazon homepage URL
4. **Click on this request** to view its detailed information
5. **Find the Headers section** in the request details panel
6. **Scroll to Request Headers** and locate the `cookie` field
7. **Copy the entire cookie value** - This will be a long string of text

:::info[Cookie Location]
Look for the first request in the Network tab - it typically shows the Amazon homepage URL. Click it to view detailed headers.
:::

---

## ⚙️ Step 4: Configure Booklore

![Copying the cookie header value](/img/metadata/amazon-cookie/amazon-cookie-2.jpg)

1. **Open Booklore settings**
2. **Navigate to the metadata section**
3. **Find the "Amazon Cookies" field**
4. **Paste the copied cookie value** into this field
5. **Save your settings**

---

## 🔧 Troubleshooting

If you're still experiencing issues after setting up cookies:

- ✅ Ensure you copied the complete cookie string
- 🌐 Try using a different browser
- 🔐 Verify your Amazon account is properly logged in
- 🗑️ Consider clearing your browser cache and repeating the process

:::tip[Pro Tips]
Cookies typically remain valid for several weeks. If you encounter issues again, simply repeat this process. Different Amazon regions may require separate cookies.
:::

:::note[Regional Considerations]
If you're fetching metadata for books from different Amazon regions (US, UK, etc.), you may need to configure separate cookies for each region.
:::
