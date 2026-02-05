# 📁 Recommended Folder Structure

Organize your book files for optimal performance with Booklore. A well-structured folder hierarchy ensures accurate book detection, proper multi-format grouping, and seamless metadata association. This guide covers folder organization best practices for different library types.

:::tip[Pro Tip]
Choose your folder structure before adding books to Booklore. Migrating an existing disorganized library is more complex than starting with a clean structure.
:::

---

## 🌟 What You'll Achieve

With proper folder organization, you can:

- **Group multiple formats automatically** (EPUB, PDF, audiobook) as a single book
- **Improve metadata accuracy** with predictable file locations
- **Enable smart series detection** with numbered entries kept separate
- **Simplify library maintenance** with logical, browsable structures

---

## ✨ How Booklore Detects Books

Booklore uses intelligent detection to determine which files belong together as a single book.

### Folder-Based Grouping

When files are inside a subfolder, Booklore uses the **folder name as reference** and groups files that match it.

```
Library/
└── American Gods/
    ├── American Gods.epub          ← Matches folder name
    ├── American Gods.pdf           ← Matches folder name
    └── American Gods (Audiobook).m4b   ← Matches folder name
```

All three files become **one book** with three format options.

### Smart Matching

Booklore applies fuzzy matching to handle common variations:

- Format indicators in parentheses: `1984 (Audiobook).m4b`, `Dune [EPUB].epub`
- Edition descriptors: `The Hobbit - 10th Anniversary Edition.pdf`, `Dune - Unabridged.m4b`
- Underscore/space variations: `American_Gods.epub` matches `American Gods`

:::info[What Gets Stripped]
Format indicators like `(pdf)`, `[epub]`, `(audiobook)` in brackets/parentheses are removed before matching. Edition terms like `unabridged`, `abridged`, `deluxe`, `special`, `collector`, and numbered editions (`1st edition`, `10th anniversary`) are also stripped.
:::

### Series Detection

Numbered entries are kept as **separate books**, not grouped together:

```
Library/
└── Mistborn/
    ├── Mistborn Book 1.epub    ← Separate book
    ├── Mistborn Book 2.epub    ← Separate book
    └── Mistborn Book 3.epub    ← Separate book
```

Booklore recognizes patterns like `Book 1`, `Vol. 2`, `Volume 3`, `Part 4`, `Chapter 5`, `Episode 6`, `#7`, and `No. 8` as series indicators.

### Root-Level Files

Files placed directly at the library root (not in subfolders) are grouped by **exact base name match**:

```
Library/
├── American Gods.epub     ← These two group together
├── American Gods.pdf      ← (same base name)
├── The Hobbit.epub        ← Separate book
└── Dune.pdf               ← Separate book
```

:::warning[Root-Level Limitation]
Root-level grouping only works for exact name matches. The folder-based fuzzy matching (which handles variations like edition suffixes) only applies to files within subfolders. For best results, use subfolders.
:::

---

## 📚 Recommended Structures

### Structure 1: One Folder Per Book

The simplest and most reliable structure. Each book lives in its own folder.

```
Library/
├── The Name of the Wind/
│   ├── The Name of the Wind.epub
│   └── The Name of the Wind.pdf
├── The Wise Man's Fear/
│   └── The Wise Man's Fear.epub
└── The Doors of Stone/
    └── The Doors of Stone.epub
```

**Advantages:**
- Crystal-clear book boundaries
- Perfect for multi-format collections
- Best fuzzy matching support
- Easy to add new formats later

---

### Structure 2: Author Folders with Book Subfolders

Organize by author, then by book. Ideal for large collections.

```
Library/
├── Patrick Rothfuss/
│   ├── The Name of the Wind/
│   │   └── The Name of the Wind.epub
│   └── The Wise Man's Fear/
│       └── The Wise Man's Fear.epub
├── Brandon Sanderson/
│   ├── Elantris/
│   │   └── Elantris.epub
│   └── Warbreaker/
│       └── Warbreaker.epub
└── Neil Gaiman/
    └── American Gods/
        ├── American Gods.epub
        └── American Gods.m4b
```

**Advantages:**
- Easy to browse by author
- Clear separation between books
- Scales well for large libraries

---

### Structure 3: Series Organization

Group books by series, with each entry in its own folder.

```
Library/
├── Discworld/
│   ├── 01 - The Colour of Magic/
│   │   └── The Colour of Magic.epub
│   ├── 02 - The Light Fantastic/
│   │   └── The Light Fantastic.epub
│   └── 03 - Equal Rites/
│       └── Equal Rites.epub
├── Harry Potter/
│   ├── 01 - Harry Potter and the Philosopher's Stone/
│   │   └── Harry Potter and the Philosopher's Stone.epub
│   └── 02 - Harry Potter and the Chamber of Secrets/
│       └── Harry Potter and the Chamber of Secrets.epub
└── Standalone/
    └── The Alchemist/
        └── The Alchemist.epub
```

**Advantages:**
- Series order is visually clear
- Numbered prefixes ensure correct sorting
- Standalone books have a dedicated home

---

### Structure 4: Flat File Structure

All books at root level without subfolders. Simple but limited.

```
Library/
├── American Gods.epub
├── The Hobbit.epub
├── 1984.pdf
└── Dune.epub
```

**Limitations:**
- Only exact name matches group together
- No fuzzy matching for variations
- No author/series organization
- Harder to manage large collections

:::info[When to Use Flat Structure]
Flat structure works for simple, single-format libraries. If you have multiple formats, ensure filenames match exactly (e.g., `Book.epub` and `Book.pdf`).
:::

---

## 🎯 Multi-Format Grouping

When you have multiple formats of the same book (EPUB, PDF, audiobook), Booklore can group them as a single book entry with multiple files.

### Requirements for Grouping

**For files in subfolders:**
1. Files must be in the **same subfolder**
2. Filenames should **match or be similar** to the folder name
3. Files should **not have different series numbers**

**For files at root level:**
1. Filenames must have the **exact same base name** (before extension)
2. Files should **not have different series numbers**

### Example: Proper Multi-Format Setup

```
Library/
└── Project Hail Mary/
    ├── Project Hail Mary.epub
    ├── Project Hail Mary.pdf
    └── Project Hail Mary (Unabridged).m4b
```

All three files become **one book** with three format options.

### Example: Files That Stay Separate

```
Library/
└── Mistborn/
    ├── Mistborn Book 1.epub
    ├── Mistborn Book 2.epub
    └── Mistborn Book 3.epub
```

These remain **three separate books** because they have different series numbers.

---

## 🔧 Naming Conventions

### File Naming Best Practices

| Do | Don't |
|-----|--------|
| `The Hobbit.epub` | `hobbit_final_v2.epub` |
| `American Gods.pdf` | `AG_scan.pdf` |
| `1984 (Audiobook).m4b` | `audiobook.m4b` |

### Folder Naming Best Practices

| Do | Don't |
|-----|--------|
| `The Name of the Wind/` | `book1/` |
| `01 - The Colour of Magic/` | `discworld1/` |
| `Brandon Sanderson/` | `author_bs/` |

:::tip[Match Names to Folders]
Name your files similarly to the parent folder for best automatic grouping results.
:::

---

## 🐛 Troubleshooting

### Books Not Grouping Correctly

**Issue:** Multiple formats appear as separate books

**Solutions:**
- Ensure files are in the same subfolder
- Verify filenames are similar to the folder name
- Check that files don't have different series numbers
- Rescan the library after reorganizing files

---

### Series Books Merged Together

**Issue:** Different series entries merged into one book

**Solutions:**
- Use separate folders for each series entry
- Include series indicators in filenames (`Book 1`, `Vol. 2`)
- Ensure each series entry has a unique folder

---

### Root-Level Files Not Grouping

**Issue:** Files at library root with similar names not grouping

**Explanation:** Root-level files only group on exact base name match. Move files into a subfolder for fuzzy matching support.

```
# Before (won't group - different keys at root level)
Library/
├── The Hobbit.epub
└── The Hobbit - 10th Anniversary.pdf

# After (will group via substring matching)
Library/
└── The Hobbit/
    ├── The Hobbit.epub
    └── The Hobbit - 10th Anniversary.pdf
```

---

### Inconsistent Detection Results

**Issue:** Some books detected correctly, others not

**Solutions:**
- Standardize your folder structure
- Use consistent naming conventions
- Check for hidden characters in filenames
- Ensure folder names match the book titles

---

## 🎓 Best Practices Summary

### Do's

- Use one folder per book for multi-format collections
- Name files similarly to their parent folder
- Include series numbers in folder or file names
- Organize by author or series for large collections
- Use descriptive, readable folder names

### Don'ts

- Don't mix different books in the same folder
- Don't use cryptic folder names like `book1/` or `new/`
- Don't rely on filename alone for series differentiation
- Don't change folder structure without rescanning the library

---

:::success[Organized Library]
A well-organized folder structure is the foundation of a great Booklore experience. Take time to plan your structure, and Booklore will reward you with accurate detection and seamless multi-format support!
:::
