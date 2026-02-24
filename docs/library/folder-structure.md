# 📁 Folder Structure

How you organize your book files determines how Booklore groups them. This page covers how the detection works and the best ways to lay out your library folders.

---

## 📖 Supported Formats

Booklore recognizes the following file types:

| Category | Extensions |
|----------|-----------|
| **Ebooks** | `.epub`, `.pdf`, `.mobi`, `.azw3`, `.azw`, `.fb2` |
| **Comics** | `.cbz`, `.cbr`, `.cb7` |
| **Audiobooks** | `.m4b`, `.m4a`, `.mp3` |

Files with any other extension are silently ignored during scans.

---

## 🔍 How Detection Works

Booklore supports two organization modes, configured per library:

| Mode | Behavior |
|------|----------|
| **Book Per Folder** | Every file in the same folder belongs to one book. Simple and predictable. |
| **Auto Detect** | Files are grouped by name similarity using fuzzy matching and series detection. More flexible but requires sensible naming. |

:::tip[Which Mode to Choose]
**Book Per Folder** is the safer choice if you keep each book in its own folder. **Auto Detect** is better when you have mixed structures or multiple books per folder.
:::

---

### 🏷️ Name Normalization

Before comparing filenames, Booklore normalizes them by:

1. Removing the file extension
2. Replacing underscores with spaces
3. Stripping format indicators in brackets: `[epub]`, `(pdf)`, `(audiobook)`, `[m4b]`
4. Stripping part/disc indicators: `(part 1)`, `[cd 2]`, `- disc 3`
5. Stripping trailing author names: `- J.R.R. Tolkien`
6. Repositioning trailing articles: `Hobbit, The` becomes `The Hobbit`
7. Collapsing whitespace and lowercasing

So `American_Gods (Audiobook).m4b` and `American Gods.epub` both normalize to `american gods` and will group together.

---

### 📂 Folder-Based Grouping (Auto Detect)

When files are inside a subfolder, Booklore uses the **folder name as the reference title**. Each file is compared against it:

- **Exact or substring match** groups the file with the folder
- **Edition suffixes** like `unabridged`, `abridged`, `deluxe`, `collector`, `10th anniversary` are stripped before comparing
- **Fuzzy matching** (similarity threshold of 60%) catches minor naming differences

```
Library/
└── American Gods/
    ├── American Gods.epub              ← matches folder name
    ├── American Gods.pdf               ← matches folder name
    └── American Gods (Unabridged).m4b  ← matches after stripping edition suffix
```

All three files become **one book** with three format options.

---

### 🔢 Series Detection

Files with series indicators are kept as **separate books**, even if they share a folder. Recognized patterns:

| Pattern | Examples |
|---------|---------|
| `Book N` | `Mistborn Book 1.epub`, `Mistborn Book 2.epub` |
| `Vol. N` / `Volume N` | `Vol. 1 - The Eye of the World.epub` |
| `Part N` | `Part 1 - Foundation.epub` |
| `Chapter N` / `Episode N` | `Chapter 1.epub` |
| `#N` / `No. N` | `#1 - Batman Year One.cbz` |
| Bare number prefix | `01 - The Colour of Magic.epub`, `02 - The Light Fantastic.epub` |
| Trailing number | `Mistborn 1.epub`, `Mistborn 2.epub` |

```
Library/
└── Mistborn/
    ├── Mistborn Book 1.epub  ← separate book
    ├── Mistborn Book 2.epub  ← separate book
    └── Mistborn Book 3.epub  ← separate book
```

---

### 📄 Root-Level Files

Files placed directly at the library root (not in any subfolder) are grouped by **exact normalized name match only**. No fuzzy matching, no edition stripping.

```
Library/
├── Dune.epub        ← groups with Dune.pdf (same base name)
├── Dune.pdf         ← groups with Dune.epub
├── The Hobbit.epub  ← standalone
└── 1984.pdf         ← standalone
```

:::warning[Root-Level Limitation]
Fuzzy matching and edition stripping only apply inside subfolders. At root level, filenames must match exactly (after normalization) to group together. Use subfolders for reliable multi-format grouping.
:::

---

### 🎧 Audiobook Folder Detection

When a folder contains **2 or more audio files** and **no ebook/comic files**, Booklore checks whether the folder represents a single audiobook or a series of separate audiobooks:

- **Single audiobook:** If all audio files share essentially the same base title (after stripping track numbers, part/disc indicators, and generic terms like `chapter`, `track`, `intro`), the entire folder is treated as **one audiobook**. The folder name becomes the book title.
- **Series folder:** If audio files have distinctly different base titles, each file becomes its own book.

```
Library/
└── Project Hail Mary/
    ├── 01 - Chapter 1.mp3     ← same base title
    ├── 02 - Chapter 2.mp3     ← same base title
    └── 03 - Chapter 3.mp3     ← same base title
```

This entire folder becomes **one audiobook** called "Project Hail Mary".

---

## 📚 Recommended Structures

### ⭐ Structure 1: One Folder Per Book (Recommended)

The simplest and most reliable layout. Each book gets its own folder. Works perfectly with both organization modes.

```
Library/
├── American Gods/
│   ├── American Gods.epub
│   ├── American Gods.pdf
│   └── American Gods.m4b
├── Project Hail Mary/
│   ├── Project Hail Mary.epub
│   └── Project Hail Mary (Unabridged).m4b
├── The Hobbit/
│   └── The Hobbit.epub
└── Dune/
    └── Dune.epub
```

This is the best option for most users:

- Multi-format grouping works automatically
- Fuzzy matching handles minor naming differences
- Clear boundaries between books
- Easy to add new formats later (just drop a file in the folder)

For series, give each entry its own folder:

```
Library/
├── Mistborn 1 - The Final Empire/
│   ├── The Final Empire.epub
│   └── The Final Empire.m4b
├── Mistborn 2 - The Well of Ascension/
│   └── The Well of Ascension.epub
└── Mistborn 3 - The Hero of Ages/
    └── The Hero of Ages.epub
```

---

### 📂 Structure 2: Author Folders

Group books by author, then by book. Good for large collections where you want your filesystem to be browsable outside of Booklore too.

```
Library/
├── Neil Gaiman/
│   ├── American Gods/
│   │   ├── American Gods.epub
│   │   └── American Gods.m4b
│   └── Coraline/
│       └── Coraline.epub
├── Brandon Sanderson/
│   ├── Elantris/
│   │   └── Elantris.epub
│   └── Mistborn 1 - The Final Empire/
│   │   └── The Final Empire.epub
│   └── Mistborn 2 - The Well of Ascension/
│       └── The Well of Ascension.epub
└── Andy Weir/
    └── Project Hail Mary/
        ├── Project Hail Mary.epub
        └── Project Hail Mary.pdf
```

Booklore only looks at the **immediate parent folder** for grouping, so intermediate author folders don't interfere. The rules are the same as Structure 1, just nested one level deeper.

---

### 📄 Structure 3: Flat Files

All files dumped at the library root with no subfolders. Minimal effort, but limited.

```
Library/
├── American Gods.epub
├── American Gods.pdf
├── Dune.epub
├── The Hobbit.epub
└── 1984.pdf
```

This works fine for single-format collections. Multi-format grouping requires **exact** name matches since root-level files don't get fuzzy matching. Fine for a small personal library, but doesn't scale well.

---

## 🚫 Ignored Paths

Booklore automatically skips these during scans:

- Hidden files and directories (anything starting with `.`)
- Synology system directories: `#recycle`, `@eaDir`
- Calibre trash: `.caltrash`

---

## ⚡ Tips

- **Name files to match the folder** for the most reliable grouping
- **Use subfolders** if you have multiple formats of the same book
- **Don't mix different books** in the same folder when using Book Per Folder mode
- **Rescan your library** after reorganizing files on disk
- **Watch Folders** can be enabled to auto-detect new, changed, or deleted files without manual rescans
