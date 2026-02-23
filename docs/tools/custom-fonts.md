# 🔤 Custom Fonts for EPUB Reader

Upload custom fonts to personalize your reading experience in BookLore's EPUB reader. Fonts from [Google Fonts](https://fonts.google.com/) or [Font Squirrel](https://www.fontsquirrel.com/) work well.

---

## 📥 Uploading a Font

1. Navigate to **Settings > Reader** and scroll to the **Custom Font Library** section
2. Click the **Add New Font** button

   ![Custom Fonts Tab](/img/custom-fonts/font-00.png)

3. Click the upload area or drag and drop a font file

   ![Font Upload Dialog](/img/custom-fonts/font-01.png)

4. After selecting a file, a preview and name input appear. Enter a display name (or keep the filename).

   ![Font Selected](/img/custom-fonts/font-02.png)

5. Click **Upload Font** to save

### Supported Formats and Limits

| Format | Extension |
|--------|-----------|
| TrueType | .ttf |
| OpenType | .otf |
| Web Open Font | .woff |
| Web Open Font 2 | .woff2 |

- **Max file size:** 5 MB per font
- **Max fonts per user:** 10
- **Storage location:** `~/booklore/data/custom-fonts/`

:::warning[Quota]
If you already have 10 fonts, delete one before uploading.
:::

---

## 🎨 Managing Fonts

Your font collection is displayed in **Settings > Reader > Custom Font Library**.

![Font Collection](/img/custom-fonts/font-03.png)

To delete a font, click the trash icon on its card and confirm. If the deleted font was selected in your preferences, it reverts to the default.

---

## ⚙️ Using Custom Fonts

### Global Default

Set a custom font as the default for all EPUB books in **Settings > Reader > eBook Reader: Default Settings > Typography > Font Family**.

![Global Font Setting](/img/custom-fonts/font-04.png)

### Per-Book Setting

While reading an EPUB, open **Settings > Typography** in the reader header. Custom fonts appear at the bottom of the Font Family dropdown.

![Per-Book Font Setting](/img/custom-fonts/font-05.png)

:::info
Custom fonts only apply to the web-based EPUB reader. PDFs, comics, and device sync (Kobo/KOReader) use their own font settings.
:::

---

## 🔧 Troubleshooting

| Issue | Solution |
|---|---|
| **File size exceeds 5 MB** | Convert to WOFF2 format using [Transfonter](https://transfonter.org/) for better compression |
| **Font doesn't appear in reader** | Hard refresh the browser (Ctrl+F5 / Cmd+Shift+R), then re-select the font in preferences |
| **Font renders incorrectly** | Re-download from the original source, or try a different weight/version |

:::warning[License Compliance]
Only upload fonts you have the right to use. Free fonts from Google Fonts and Font Squirrel are typically safe. Commercial fonts may have restrictions.
:::
