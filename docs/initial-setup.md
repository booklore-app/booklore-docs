# 👤 Setup Admin User

On first launch, Booklore shows a setup screen to create the initial administrator account. This is a one-time step.

---

## 🛠️ Create Your Account

Open `http://localhost:6060` in your browser and fill in the setup form:

![Admin User Setup](/img/initial-setup/admin-user.jpg)

| Field | Notes |
|-------|-------|
| **Username** | Your login identifier |
| **Full Name** | Display name shown in the UI |
| **Email Address** | Used for account-related features |
| **Password** | Minimum 6 characters |
| **Confirm Password** | Must match the password above |

All fields are required. Click **"Create Admin Account"** when done.

:::warning[Save Your Credentials]
There is no password recovery flow yet. If you lose your password, you'll need to reset it directly in the database. Use a password manager.
:::

---

## 🔑 Login

After creating the account, you'll be redirected to the login page. Sign in with the username and password you just created.

![Login Page](/img/initial-setup/login.jpg)

---

## 🏠 Dashboard

After logging in, you'll see an empty dashboard prompting you to create your first library.

![Empty Dashboard](/img/initial-setup/empty-dashboard.jpg)

Click **"Add a Library"** to get started. See [Setup First Library](library/setup-first-library.md) for a walkthrough.
