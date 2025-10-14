# 📝 File Naming Patterns

Take control of your library organization with powerful, customizable file naming patterns. Automatically rename and organize books using metadata placeholders, ensuring consistent naming across your entire collection. Whether you're uploading new books, moving existing ones, or updating metadata,
your files stay perfectly organized.

![File Naming Patterns UI](/img/metadata/file-naming-patterns.jpg)

> 💡 **Pro Tip:** Patterns are applied automatically during uploads, file moves, and metadata updates. Set them once and let Booklore handle the rest!

---

## 🌟 What You'll Achieve

With File Naming Patterns, you can:

- **Automate file organization** using metadata-driven naming conventions
- **Create library-specific patterns** for different collections
- **Build dynamic folder structures** with nested paths
- **Handle missing metadata gracefully** with optional blocks
- **Maintain consistency** across your entire library
- **Customize naming** for series, standalone books, and more

---

## ✨ How File Naming Patterns Work

### 🔄 The Pattern System

1. **🎯 Pattern Definition**  
   Define patterns using metadata placeholders like `{title}`, `{authors}`, and `{year}`.

2. **📚 Library-Specific Overrides**  
   Each library can have its own custom pattern, or fall back to the default.

3. **🔍 Metadata Replacement**  
   When processing files, Booklore replaces placeholders with actual book metadata.

4. **📁 Automatic Organization**  
   Files are renamed and moved to the correct locations based on your patterns.

5. **🛡️ Graceful Fallbacks**  
   Optional blocks ensure patterns work even when some metadata is missing.

---

## 🚀 Getting Started

### Understanding Pattern Basics

Patterns are simple text templates with special placeholders enclosed in curly braces:

```
{authors} - {title} ({year})
```

This pattern produces filenames like:

```
J.K. Rowling - Harry Potter and the Sorcerer's Stone (1997).epub
```

---

## 📖 Pattern Configuration

### Default File Naming Pattern

The default pattern serves as the fallback for all libraries unless overridden.

**Key Features:**

- Applied to all books by default
- Used when no library-specific pattern is configured
- Must be valid before saving (no special characters except those in placeholders)

**How to Configure:**

1. Enter your pattern in the "Default Pattern" field
2. Preview updates in real-time
3. Click "Save" to apply the pattern

> ⚠️ **Validation:** Patterns are validated before saving. Invalid characters will trigger an error message.

---

### Library-Specific Overrides

Customize naming patterns for individual libraries to match different organizational needs.

**Use Cases:**

- Comic books library: `{series}/{seriesIndex} - {title}`
- Academic library: `{authors}/{year} - {title}`
- Fiction library: `{title} - {authors}`
- Audiobooks library: `{authors}/{title}/`

**How to Configure:**

1. Scroll to "Library-Specific Overrides" section
2. Enter a pattern for any library you want to customize
3. Leave empty to use the default pattern
4. Click "Clear" to remove a library-specific pattern
5. Click "Save All Library Patterns" to apply changes

> 💡 **Tip:** Leave patterns empty to inherit the default. This makes it easy to maintain consistency while allowing specific libraries to have unique organization.

---

## 🎨 Available Placeholders

### Metadata Placeholders

Use these placeholders to insert book metadata into your patterns:

| Placeholder         | Description       | Example Value          |
|---------------------|-------------------|------------------------|
| `{title}`           | Book title        | "The Hobbit"           |
| `{subtitle}`        | Book subtitle     | "There and Back Again" |
| `{authors}`         | Author name(s)    | "J.R.R. Tolkien"       |
| `{year}`            | Publication year  | "1937"                 |
| `{series}`          | Series name       | "Middle-earth"         |
| `{seriesIndex}`     | Series position   | "01"                   |
| `{language}`        | Language code     | "en"                   |
| `{publisher}`       | Publisher name    | "Allen & Unwin"        |
| `{isbn}`            | ISBN number       | "9780547928227"        |
| `{currentFilename}` | Original filename | "hobbit_original.epub" |

---

### Creating Folder Structures

Use forward slashes (`/`) to create nested folder structures:

```
{authors}/{series}/{seriesIndex} - {title}
```

Produces:

```
J.K. Rowling/Harry Potter/01 - Harry Potter and the Sorcerer's Stone.epub
```

**Special Cases:**

- **Trailing slash:** Pattern ending with `/` keeps the original filename
  ```
  {title}/
  → Harry Potter and the Sorcerer's Stone/original_file.epub
  ```

- **Leading slash:** Pattern starting with `/` creates an absolute path from library root
  ```
  /{authors}/{title}
  → /J.K. Rowling/Harry Potter and the Sorcerer's Stone.epub
  ```

---

## 🎯 Optional Blocks

Optional blocks allow parts of your pattern to be excluded when metadata is missing.

### Syntax

Wrap content in angle brackets: `<...>`

```
<{seriesIndex} - >{title}
```

### How It Works

If `seriesIndex` has a value:

```
01 - Dune.epub
```

If `seriesIndex` is missing:

```
Dune.epub
```

The entire block (including the dash and space) is removed!

### Advanced Examples

**Multiple placeholders in one block:**

```
{title}<: {subtitle}>
```

- With subtitle: `Project Hail Mary: A Novel.epub`
- Without subtitle: `Project Hail Mary.epub`

**Nested structures:**

```
{authors}/<{series}/><{seriesIndex}. >{title}
```

- Full metadata: `Andy Weir/The Martian Series/02. Project Hail Mary.epub`
- No series: `Andy Weir/Project Hail Mary.epub`

**Decorative elements:**

```
<[{series}] >{title} - {authors}
```

- With series: `[Harry Potter] Harry Potter and the Chamber of Secrets - J.K. Rowling.epub`
- Without series: `Harry Potter and the Chamber of Secrets - J.K. Rowling.epub`

> 💡 **Best Practice:** Use optional blocks for any metadata that might be missing (series, subtitle, ISBN, etc.)

---

## 📚 Pattern Examples

### Examples with Complete Metadata

**Sample Book:**

- Title: `Harry Potter and the Sorcerer's Stone`
- Subtitle: `The Boy Who Lived`
- Authors: `J.K. Rowling`
- Series: `Harry Potter`
- Series Index: `01`
- Year: `1997`
- Current Filename: `harry1_original.epub`

#### Basic Pattern

**Pattern:** `{authors} - {title}`  
**Output:** `J.K. Rowling - Harry Potter and the Sorcerer's Stone.epub`

#### With Punctuation

**Pattern:** `{title}: {series}`  
**Output:** `Harry Potter and the Sorcerer's Stone: Harry Potter.epub`

#### Series Organization

**Pattern:** `{authors}/{series}/{seriesIndex} - {title}`  
**Output:** `J.K. Rowling/Harry Potter/01 - Harry Potter and the Sorcerer's Stone.epub`

#### Folder Only

**Pattern:** `{title}/`  
**Output:** `Harry Potter and the Sorcerer's Stone/harry1_original.epub`

#### Absolute Path

**Pattern:** `/{authors}/{title}`  
**Output:** `/J.K. Rowling/Harry Potter and the Sorcerer's Stone.epub`

#### Preserve Original Filename

**Pattern:** `{authors}/{series}/{currentFilename}`  
**Output:** `J.K. Rowling/Harry Potter/harry1_original.epub`

#### With Subtitle

**Pattern:** `{title}: {subtitle}`  
**Output:** `Harry Potter and the Sorcerer's Stone: The Boy Who Lived.epub`

---

### Examples with Missing Metadata

**Sample Book:**

- Title: `Project Hail Mary`
- Subtitle: *(missing)*
- Authors: `Andy Weir`
- Year: `2021`
- Series: *(missing)*
- Series Index: *(missing)*
- Current Filename: `project_hail_mary_final.epub`

#### Optional Blocks Pattern

**Pattern:** `{authors}/<{series}/><{seriesIndex}. >{title}< ({year})>`  
**Output:** `Andy Weir/Project Hail Mary (2021).epub`

**What happened:**

- Series block removed (no series)
- Series index block removed (no index)
- Year block kept (year present)

#### Fallback with Index

**Pattern:** `<{seriesIndex}. >{title}< - {authors}>`  
**Output:** `Project Hail Mary - Andy Weir.epub`

#### Brackets & Punctuation

**Pattern:** `<[{series}] >{title} - {authors}`  
**Output:** `Project Hail Mary - Andy Weir.epub`

**What happened:** The brackets and series name were removed entirely.

#### Series with Colon

**Pattern:** `<{series}: >{title} by {authors}`  
**Output:** `Project Hail Mary by Andy Weir.epub`

#### Original Filename with Year

**Pattern:** `{authors}/{year}__{currentFilename}`  
**Output:** `Andy Weir/2021__project_hail_mary_final.epub`

#### Subtitle Fallback

**Pattern:** `{title}<: {subtitle}>`  
**Output:** `Project Hail Mary.epub`

---

## 🎓 Best Practices

### ✅ Do's

- **Use optional blocks** for metadata that may be missing (series, subtitle, ISBN)
- **Test patterns** with the live preview before saving
- **Keep patterns readable** with meaningful separators (` - `, `: `)
- **Organize by author/series** for large collections
- **Use library-specific patterns** for different media types
- **Include year** for academic or non-fiction libraries

### ❌ Don'ts

- **Avoid special characters** like `*`, `?`, `|`, `<`, `>` (except in optional block syntax)
- **Don't create overly complex patterns** that are hard to understand
- **Avoid deeply nested folders** that make navigation difficult
- **Don't forget file extensions** (Booklore adds them automatically)
- **Avoid patterns that could create conflicts** (e.g., `{year}` only)

---

## 🔧 Advanced Use Cases

### Comic Books & Manga

```
{series}/{seriesIndex} - {title} ({year})
```

Output: `Batman/142 - The Dark Knight Returns (1986).cbz`

### Academic Papers

```
{year}/{authors} - {title}
```

Output: `2021/Smith, Johnson - Machine Learning Fundamentals.pdf`

### Audiobooks

```
{authors}/{title}/
```

Output: `Stephen King/The Shining/the_shining_unabridged.m4b`

### Series Collections

```
{authors}/<{series}/><{seriesIndex}. >{title}
```

- With series: `Brandon Sanderson/Mistborn/01. The Final Empire.epub`
- Without series: `Brandon Sanderson/Elantris.epub`

### Publisher Organization

```
{publisher}/{year} - {title}
```

Output: `Tor Books/2015 - The Fifth Season.epub`

### Multi-Language Library

```
{language}/{authors}/{title}
```

Output: `en/Haruki Murakami/Norwegian Wood.epub`

---

## ⚙️ When Patterns Are Applied

File naming patterns are automatically applied in these scenarios:

1. **📤 Upload**  
   When you upload new books to your library

2. **📦 Bookdrop Import**  
   When finalizing books from the Bookdrop queue

3. **↔️ File Move**  
   When moving books between libraries or subfolders

4. **✏️ Metadata Update**  
   When you edit and save book metadata

5. **🔄 Bulk Operations**  
   When performing bulk metadata updates or reorganization

> ⚡ **Automatic:** Once configured, patterns work behind the scenes. No manual intervention needed!

---

## 🐛 Troubleshooting

### Pattern Won't Save

**Issue:** Error message appears when clicking "Save"

**Solutions:**

- Check for invalid characters (only letters, numbers, spaces, and allowed symbols)
- Ensure placeholders are properly formatted with curly braces
- Verify optional blocks have matching angle brackets

---

### Preview Shows Unexpected Output

**Issue:** Preview doesn't match expectations

**Solutions:**

- Check if optional blocks are correctly placed
- Verify metadata placeholders are spelled correctly
- Test with the example metadata shown in the UI
- Remember trailing slashes preserve original filenames

---

### Files Not Being Renamed

**Issue:** Uploads keep original filenames

**Solutions:**

- Verify pattern is saved (check for success message)
- Ensure library has correct pattern applied
- Check if library-specific pattern overrides default
- Try re-uploading a test file

---

### Folder Structure Not Created

**Issue:** Files not organized into folders

**Solutions:**

- Verify pattern includes forward slashes for folders
- Check if leading/trailing slashes are correct
- Ensure Booklore has write permissions
- Test pattern with preview first

---

## 🎯 Quick Reference

### Common Patterns

| Use Case  | Pattern                        | Example Output                        |
|-----------|--------------------------------|---------------------------------------|
| Simple    | `{title} - {authors}`          | `Dune - Frank Herbert.epub`           |
| With Year | `{authors} - {title} ({year})` | `Frank Herbert - Dune (1965).epub`    |
| Series    | `{seriesIndex}. {title}`       | `01. Dune.epub`                       |
| Nested    | `{authors}/{series}/{title}`   | `Frank Herbert/Dune Series/Dune.epub` |
| Optional  | `<{seriesIndex} - >{title}`    | `01 - Dune.epub` or `Dune.epub`       |

### Placeholder Quick List

- `{title}` – Book title
- `{authors}` – Author(s)
- `{year}` – Year
- `{series}` – Series name
- `{seriesIndex}` – Series number
- `{currentFilename}` – Original name

### Syntax Reminders

- `/` – Creates folders
- `<...>` – Optional blocks
- `{...}` – Metadata placeholders
- Trailing `/` – Keeps original filename
- Leading `/` – Absolute path from library root

---

Remember: File naming patterns are your foundation for a perfectly organized library. Set them up once and let Booklore handle the rest! Happy organizing! 📚✨

