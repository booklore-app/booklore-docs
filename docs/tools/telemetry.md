# 📊 Telemetry

Telemetry is how Booklore understands what's working and what needs improvement. Think of it as a friendly check-in that helps us make Booklore better for everyone.

:::info[What is Telemetry?]
Telemetry is anonymous usage data that helps developers understand how you use Booklore. It's completely anonymous and helps us prioritize features and fix bugs.
:::

Don't worry, we're not tracking your reading habits, book titles, or personal info. We just want to know things like *"Are people actually using OIDC?"* or *"Is the FOLDER_AS_BOOK feature worth maintaining?"*

---

## 🤔 Why Telemetry Matters

Building software is like cooking for a party, you never really know which dishes people love until you see what gets eaten. Telemetry helps us figure out:

- **What features people actually use**  
  Is OIDC authentication popular, or are most users sticking with local accounts? Should we invest time in improving custom icons, or is the default library good enough?

- **What's causing pain**  
  If everyone has massive libraries but only uses FILE_AS_BOOK mode, maybe FOLDER_AS_BOOK needs work. If nobody's using email-to-library features, maybe we can simplify that flow.

- **Where to focus development**  
  Should we spend time on more metadata providers, or do users prefer working on reading stats? Are Magic Shelves a hit or just taking up space?

- **Performance insights**  
  If we see libraries with 50,000+ books, we know we need to optimize for scale. If most users have small libraries, we can focus elsewhere.

---

## 🔒 What We Collect (And Don't Collect)

### ✅ What We DO Collect

- **Installation ID**: A random UUID that identifies your Booklore instance (but not you!)
- **App Version**: Which version you're running
- **Usage Statistics**: How many books, libraries, authors, shelves, etc. you have
- **Feature Flags**: Which features are enabled (OIDC, OPDS, Kobo sync, etc.)
- **Library Settings**: Scan modes, icon types, watch mode status
- **Integration Usage**: Are you using Kobo? KOReader? Email-to-library?

### ❌ What We DON'T Collect

- **Book titles, authors, or any content**
- **Your reading progress or history**
- **Personal information or user data**
- **IP addresses or location data**
- **File paths or folder structures**
- **Email addresses or usernames**

Everything is aggregated and anonymous. We literally can't tie data back to you even if we wanted to.

---

## 📦 Sample Telemetry Payload

Here's an example of what actually gets sent. Notice there's nothing personal here, just numbers and settings:

```json
{
  "installationId": "550e8400-e29b-41d4-a716-446655440000",
  "appVersion": "v1.10.0",
  "totalLibraries": 2,
  "totalBooks": 247,
  "totalAdditionalBookFiles": 18,
  "totalAuthors": 89,
  "totalBookmarks": 23,
  "totalBookNotes": 12,
  "totalShelves": 5,
  "totalMagicShelves": 3,
  "totalCategories": 15,
  "totalTags": 8,
  "totalMoods": 4,
  "totalKoreaderUsers": 1,
  "userStatistics": {
    "totalUsers": 2,
    "totalLocalUsers": 2,
    "totalOidcUsers": 0,
    "oidcEnabled": false
  },
  "metadataStatistics": {
    "enabledMetadataProviders": [
      1,
      2
    ],
    "enabledReviewMetadataProviders": [
      1
    ],
    "saveMetadataToFile": true,
    "moveFileViaPattern": false,
    "autoBookSearchEnabled": true,
    "similarBookRecommendationsEnabled": true,
    "metadataDownloadOnBookdropEnabled": true
  },
  "opdsStatistics": {
    "opdsEnabled": true,
    "totalOpdsUsers": 1
  },
  "emailStatistics": {
    "totalEmailProviders": 0,
    "totalEmailRecipients": 0
  },
  "koboStatistics": {
    "convertToKepubEnabled": false,
    "totalKoboUsers": 0,
    "totalHardcoverSyncEnabled": 0,
    "totalAutoAddToShelf": 0
  },
  "bookStatistics": {
    "totalBooks": 247,
    "bookCountByType": {
      "1": 45,
      "2": 180,
      "3": 15,
      "4": 7
    }
  },
  "libraryStatisticsList": [
    {
      "totalLibraryPaths": 1,
      "bookCount": 180,
      "watchEnabled": true,
      "iconType": 1,
      "scanMode": 1
    },
    {
      "totalLibraryPaths": 1,
      "bookCount": 67,
      "watchEnabled": false,
      "iconType": 1,
      "scanMode": 1
    }
  ]
}
```

---

## 🛠️ How It Works

Telemetry data is collected **once every 24 hours**.

You can **disable telemetry entirely** in the app settings. No hard feelings! Though we'd love it if you kept it on to help us make Booklore better.

---

## 🎯 Real-World Examples of How Telemetry Helps

**Example 1: OIDC Usage**  
If we see only 2% of users have OIDC enabled, maybe we shouldn't prioritize new OIDC features. But if 60% use it, we know it's critical to maintain and improve.

**Example 2: FOLDER_AS_BOOK Mode**  
If telemetry shows most users prefer FILE_AS_BOOK, but FOLDER_AS_BOOK has some edge cases, maybe it's time to improve it or make it simpler.

**Example 3: Custom Icons**  
If 90% of users stick with default icons, maybe custom SVG support isn't worth the maintenance burden. But if it's heavily used, we'll keep polishing it.

**Example 4: Library Sizes**  
If we see users with large libraries, we know we need to optimize performance. If most users have smaller collections, we can focus on other features.

**Example 5: Kobo & KOReader**  
If these integrations are popular, we'll invest in improving them. If not, we can focus development time elsewhere.

---

## 🙌 Help Us Help You

By keeping telemetry enabled, you're helping us make Booklore better for everyone. It's a small, anonymous way to contribute to the project's direction.

Thanks for being part of the Booklore community! 📚✨
