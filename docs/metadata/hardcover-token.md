# 🔑 Hardcover API Token Setup

Hardcover is a comprehensive book tracking and discovery platform that provides rich metadata for books. By configuring a Hardcover API token in Booklore, you can access detailed book information, ratings, and reviews to enhance your book metadata collection.

The Hardcover API provides access to an extensive database of book information, including covers, descriptions, ratings, and community reviews. Using an API token ensures reliable access to this metadata source.

:::info[What You'll Get]
Hardcover provides rich metadata including covers, descriptions, ratings, review counts, moods, and tags - perfect for enhancing your book collection.
:::

---

## 🛠️ Step 1: Create a Hardcover Account

1. **Visit Hardcover** by navigating to https://hardcover.app
2. **Sign up for an account** or log in if you already have one
3. **Complete your profile setup** to ensure full access to API features

---

## 🔧 Step 2: Access API Settings

1. **Navigate to your account settings** by going to https://hardcover.app/account/api
2. **Log in to your account** if prompted
3. **Locate the API section** in your account settings

:::tip[Token Format]
Your token should start with "eyJ" and be a long alphanumeric string. Do NOT include the "Bearer " prefix when pasting into Booklore.
:::

---

## 📡 Step 3: Generate Your API Token

![Accessing Hardcover API token in account settings](/img/metadata/hardcover-api/hardcover-1.jpg)

1. **Find the API Token section** on the API settings page
2. **Generate a new token** if you don't already have one
3. **Copy the complete token except the 'Bearer'** - it will look like:
   ```
   eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXJkY292ZXIiLCJ2ZXJzaW9uIjoiOCIsImp0aSI6IjIwMDI1ZDkxLWRhM2YtNDk5MS05ZmI1LWJkMTJkZmE0ZDg2ZiIsImFwcGxpY2F0aW9uSWQiOjIsInN1YiI6IjM2MDQ1IiwiYXVkIjoiMSIsImlkIjoiMzYwNDUiLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNzU5Njg5MjM4LCJleHAiOjE3OTEyMjUyMzgsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIlgtaGFzdXJhLXVzZXItaWQiOiIzNjA0NSJ9LCJ1c2VyIjp7ImlkIjozNjA0NX19.sKkra-37Wdw1jAsYhc-1LXRnopL9_whvilmitRs1FYw
   ```

:::warning[Important]
Copy only the token portion - everything AFTER "Bearer ". Do not include the word "Bearer" or the space after it.
:::

---

## ⚙️ Step 4: Configure Booklore

![Configuring Hardcover token in Booklore settings](/img/metadata/hardcover-api/hardcover-2.jpg)

1. **Open Booklore settings**
2. **Navigate to the 'Metadata 1' section**
3. **Find the "Hardcover API Token" field**
5. **Paste only the token portion** (everything after "Bearer "):
   ```
   eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXJkY292ZXIiLCJ2ZXJzaW9uIjoiOCIsImp0aSI6IjIwMDI1ZDkxLWRhM2YtNDk5MS05ZmI1LWJkMTJkZmE0ZDg2ZiIsImFwcGxpY2F0aW9uSWQiOjIsInN1YiI6IjM2MDQ1IiwiYXVkIjoiMSIsImlkIjoiMzYwNDUiLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNzU5Njg5MjM4LCJleHAiOjE3OTEyMjUyMzgsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIlgtaGFzdXJhLXVzZXItaWQiOiIzNjA0NSJ9LCJ1c2VyIjp7ImlkIjozNjA0NX19.sKkra-37Wdw1jAsYhc-1LXRnopL9_whvilmitRs1FYw
   ```
6. **Save your settings**

:::success[Configuration Complete]
Your Hardcover integration is now active! Booklore can now fetch rich metadata from Hardcover.
:::

---

## 🔧 Troubleshooting

If you're experiencing issues with the Hardcover integration:

- ✅ Ensure you removed the "Bearer " prefix from the token
- 🔑 Verify your Hardcover account is active and in good standing
- 📋 Check that you copied the complete token without any extra spaces
- 🔄 Try regenerating the token from your Hardcover account settings

:::tip[Pro Tips]
API tokens typically have long expiration periods but can be revoked or regenerated at any time. If you encounter authentication errors, regenerate your token from the Hardcover API settings page.
:::

:::note[Token Lifespan]
Hardcover API tokens remain valid for extended periods. If you see authentication errors, check your account status or regenerate the token.
:::
