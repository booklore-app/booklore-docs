# 📚 LubimyCzytac Metadata Provider

LubimyCzytac (lubimyczytac.pl) is Poland's largest book rating and review platform, often called the "Polish Goodreads". By enabling this provider in Booklore, you can access rich metadata from the Polish book community, including ratings, reviews, and detailed book information - especially valuable for Polish literature and books with Polish translations.

The LubimyCzytac integration provides access to an extensive database of book information popular in Poland, including covers, descriptions, community ratings, series information, and publication details.

:::info[What You'll Get]
LubimyCzytac provides metadata including book IDs, community ratings (on a 5-point scale), titles, authors, descriptions, publishers, publication dates, page counts, ISBN numbers, languages, categories, tags, series information, and cover images.
:::

---

## 🌍 About LubimyCzytac

LubimyCzytac is particularly valuable for:

- **Polish Literature**: Comprehensive coverage of Polish authors and books
- **Polish Translations**: Books translated into Polish that may not be well-represented on English-language platforms
- **Community Ratings**: Access to ratings from Polish readers, providing a different perspective than English-language platforms
- **Series Information**: Excellent handling of book series with proper numbering

:::tip[Best For Polish Books]
While LubimyCzytac has information for books in many languages, it excels at providing metadata for Polish books and Polish translations. Consider prioritizing this provider for Polish literature in your metadata fetch configuration.
:::

---

## ⚙️ Enabling LubimyCzytac

Unlike providers like Hardcover or Amazon, LubimyCzytac doesn't require any API tokens or authentication. Simply enable it in your settings.

### Step 1: Access Metadata Settings

1. **Open Booklore settings**
2. **Navigate to the 'Metadata 2' section**
3. **Find the metadata provider toggles**

### Step 2: Enable the Provider

1. **Locate "Lubimyczytac" in the provider list**
2. **Toggle the switch to enable** the provider
3. **Save your settings**

:::success[No Setup Required]
That's it! LubimyCzytac is now active and can be used for metadata fetching. No API tokens, cookies, or additional configuration needed.
:::

---

## 📊 Available Metadata Fields

When you fetch metadata from LubimyCzytac, the following information may be available:

### Core Book Information
- **Title**: Book title as listed on LubimyCzytac
- **Authors**: One or more authors
- **Description**: Book synopsis and description
- **Cover Image**: High-quality cover artwork

### Publication Details
- **Publisher**: Publishing house name
- **Published Date**: Publication date
- **Page Count**: Number of pages
- **Language**: Book language (with ISO 639-1 codes)

### Identifiers & Ratings
- **LubimyCzytac ID**: Unique identifier for the book on lubimyczytac.pl
- **LubimyCzytac Rating**: Community rating (converted from 10-point to 5-point scale)
- **ISBN-13**: International Standard Book Number (13-digit)
- **ISBN-10**: International Standard Book Number (10-digit)

### Categorization
- **Categories**: Book genre/category
- **Tags**: User-generated tags and keywords
- **Series Name**: Book series title
- **Series Number**: Position in the series (e.g., "Book 3")

:::note[Rating Scale Conversion]
LubimyCzytac uses a 10-point rating scale, which Booklore automatically converts to a 5-point scale for consistency with other providers. For example, an 8.0 rating on LubimyCzytac becomes 4.0 in Booklore.
:::

---

## 🔍 Using LubimyCzytac in Metadata Fetch

Once enabled, LubimyCzytac can be used in Advanced Metadata Fetch Configuration.

### Setting Provider Priority

1. **Open a book's metadata options**
2. **Click "Advanced" in the metadata fetch dialog**
3. **Set LubimyCzytac as Priority 1, 2, 3, or 4** for any field
4. **Configure different priorities per field** if desired

### Recommended Configuration

For **Polish books or Polish translations**:
- Set LubimyCzytac as **Priority 1** for most fields
- Use Google Books or Goodreads as fallback priorities

For **English books**:
- Set LubimyCzytac as **Priority 3 or 4** (fallback)
- Prioritize Amazon, Google, or Goodreads first

:::tip[Smart Fallback]
If LubimyCzytac doesn't have data for a specific field, Booklore automatically tries your next priority provider. This ensures comprehensive metadata coverage.
:::

---

## 🌐 Language Support

LubimyCzytac automatically maps language names to ISO 639-1 codes:

| Polish Name | ISO Code | Language |
|-------------|----------|----------|
| polski | `pl` | Polish |
| angielski | `en` | English |
| niemiecki | `de` | German |
| francuski | `fr` | French |
| hiszpański | `es` | Spanish |
| włoski | `it` | Italian |

---

## 📖 Viewing LubimyCzytac Metadata

After fetching metadata, you can view LubimyCzytac-specific information in several places:

### Metadata Viewer

The metadata viewer displays:
- **LubimyCzytac rating** with the site's favicon
- **Clickable link** to the book page on lubimyczytac.pl

### Metadata Picker

The metadata picker shows:
- **LC ID**: The LubimyCzytac book identifier
- **LC Rating**: The community rating (5-point scale)

Both fields can be individually locked to prevent them from being overwritten during future metadata refreshes.

---

## 🔧 Troubleshooting

If you're experiencing issues with LubimyCzytac metadata:

- ✅ Ensure the provider is enabled in Settings → Metadata 2
- 📚 Verify the book exists on lubimyczytac.pl (search manually)
- 📝 Use **title + author name** for best search results
- 🌐 Confirm your Booklore instance can access lubimyczytac.pl (check firewall/network)

:::tip[Search Strategies]
LubimyCzytac search works best with:
1. **Title + Author name** (most accurate)
2. **Polish title + author** (for Polish books - highest accuracy)
3. **Original title + author** (for translated works)

Note that searching by ISBN may not always return results, so Booklore prioritizes title and author searches for better reliability.
:::

---

## 🔗 External Links

- **LubimyCzytac Website**: https://lubimyczytac.pl
- **About LubimyCzytac**: Poland's premier book community and rating platform

:::note[Web Scraping]
LubimyCzytac doesn't provide a public API, so Booklore uses web scraping to fetch metadata. This method is reliable but may occasionally be affected by changes to the LubimyCzytac website structure.
:::
