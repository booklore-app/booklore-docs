# 📚 RanobeDB Metadata Provider

RanobeDB (ranobedb.org) is a community driven light novel database that offers extensive metadata for light novels, including titles, authors, illustrators, genres, synopses, and cover images. Integrating RanobeDB as a metadata provider in Booklore allows users to enrich their light novel collections with accurate and detailed information.

:::info[What You'll Get]
RanobeDB provides metadata including book IDs, community ratings, titles, authors, descriptions, publishers, publication dates, languages, genres, series information, and cover images.
:::

---

## 🌍 About RanobeDB

RanobeDB is specifically useful for light novels only, it does not include manga or other book types. It is particularly valuable for:

* **Japanese Light Novels**: Comprehensive coverage of Japanese light novels and authors, with metadata in English.
* **Series Information**: Excellent handling of light novel series with proper numbering

---

## ⚙️ Enabling RanobeDB

RanobeDB does not require any API tokens or authentication. Simply enable it in your settings.

### Step 1: Access Metadata Settings

1. **Open Booklore settings**
2. **Navigate to the 'Metadata 2' section**
3. **Find the metadata provider toggles**

### Step 2: Enable the Provider

1. **Locate "Ranobedb" in the provider list**
2. **Toggle the switch to enable** the provider
3. **Save your settings**

:::success[No Setup Required]
That's it! RanobeDB is now active and can be used for metadata fetching. No API tokens, cookies, or additional configuration needed.
:::

---

## 📊 Available Metadata Fields

When you fetch metadata from RanobeDB, the following information may be available:

### Core Book Information

* **Title**: Book title in English (if available) as listed on RanobeDB
* **Authors**: One or more authors (only authors are provided, illustrators are not included)
* **Description**: Book synopsis and description in English if available
* **Cover Image**: Cover artwork, cover artwork is usually the original Japanese cover

### Publication Details

* **Publisher**: Publishing house name
* **Published Date**: Publication date
* **Language**: Book language (with ISO 639-1 codes)

### Identifiers & Ratings

* **RanobeDB ID**: Unique identifier for the book on ranobedb.org
* **RanobeDB Rating**: Community rating (converted from 10-point to 5-point scale)

### Categorization

* **Categories**: Book genre/category
* **Series Name**: Book series title
* **Series Number**: Position in the series (e.g., "Book 3")

:::note[Rating Scale Conversion]
RanobeDB uses a 10-point rating scale, which Booklore automatically converts to a 5-point scale for consistency with other providers. For example, an 8.0 rating on RanobeDB becomes 4.0 in Booklore.
:::

---

## 🔍 Using RanobeDB in Metadata Fetch

Once enabled, RanobeDB can be used in Advanced Metadata Fetch Configuration.

### Setting Provider Priority

1. **Open a book's metadata options**
2. **Click "Advanced" in the metadata fetch dialog**
3. **Set Ranobedb as Priority 1, 2, 3, or 4** for any field
4. **Configure different priorities per field** if desired

### Recommended Configuration

For **Light Novels**:
* Set RanobeDB as **Priority 1** for most fields
* Don't use any fallbacks since titles frequently don't match, or use Google Books or Goodreads as fallback priorities

:::tip[Smart Fallback]
If RanobeDB doesn't have data for a specific field, Booklore automatically tries your next priority provider. This ensures comprehensive metadata coverage.
:::

---

## 📖 Viewing RanobeDB Metadata

After fetching metadata, you can view RanobeDB-specific information in several places:

### Metadata Viewer

The metadata viewer displays:
* **RanobeDB rating** with the site's favicon
* **Clickable link** to the book page on ranobedb.org

### Metadata Picker

The metadata picker shows:
* **RanobeDB ID**: The RanobeDB book identifier
* **RanobeDB Rating**: The community rating (5-point scale)

Both fields can be individually locked to prevent them from being overwritten during future metadata refreshes.

---

## 🔧 Troubleshooting

If you're experiencing issues with RanobeDB metadata:

* ✅ Ensure the provider is enabled in Settings → Metadata 2
* 📚 Verify the book exists on ranobedb.org (search manually)
* 📝 Use **title + author name** for best search results
* 🌐 Confirm your Booklore instance can access ranobedb.org (check firewall/network)

:::note[Rate Limiting]
RanobeDB is community driven and to avoid overloading their servers, Booklore implements rate limiting when fetching metadata. If you encounter delays, please be patient and try again later.
:::

---

## 🔗 External Links

* [RanobeDB Website](https://https://ranobedb.org)

:::note[API Information]
RanobeDB API is still under development, and the Booklore integration uses available endpoints to fetch metadata. Future updates may enhance functionality as the API matures.
:::
