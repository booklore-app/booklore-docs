# 🍪 Amazon Cookie Setup

When fetching book metadata from Amazon, you might encounter 503 service errors due to Amazon's automated traffic detection systems. This guide will help you configure browser cookies to resolve these issues and ensure reliable metadata fetching.

Amazon uses sophisticated anti-bot measures to protect their services. By using cookies from an authenticated browser session, Booklore can appear as a legitimate user request, significantly improving the success rate of metadata retrieval.

> ⚠️ **Security Note:**  
> Use a secondary Amazon account when possible to protect your main account from any potential restrictions. Cookies contain session information - keep them private and regenerate them periodically for security.

---

## 🛠️ Step 1: Prepare Your Browser Session

1. **Open your web browser** and navigate to your regional Amazon website:
   - US: https://www.amazon.com
   - UK: https://www.amazon.co.uk
   - Other regions: Use your local Amazon domain

2. **Sign in to Amazon** using a secondary account if available. This helps protect your main account from any potential restrictions.

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

> 💡 **Pro Tips:**  
> Cookies typically remain valid for several weeks. If you encounter issues again, simply repeat this process. Different Amazon regions may require separate cookies.

---