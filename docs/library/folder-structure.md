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
- **Edition suffixes** are stripped before comparing. This includes:
  - Ordinal editions: `first edition`, `2nd edition`, `10th anniversary`
  - Production styles: `unabridged`, `abridged`, `complete`, `full cast`
  - Special editions: `deluxe`, `special`, `collector`
  - Format labels: `audiobook`, `audio book`, `ebook`, `e-book`
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

Put each book in its own folder. The folder name is used as the reference title. Pick the layout below that matches your file collection.

---

### 📖 Ebooks Only

```
Library/
├── American Gods/
│   └── American Gods.epub
├── Dune/
│   └── Dune.pdf
└── The Hobbit/
    └── The Hobbit.mobi
```

---

### 📖 Ebooks with Multiple Formats

All files in the same folder are grouped as one book with multiple format options. Filenames don't need to match exactly; fuzzy matching handles minor differences like `American_Gods.epub` or `American Gods - Neil Gaiman.epub`.

```
Library/
├── American Gods/
│   ├── American Gods.epub
│   ├── American Gods.pdf
│   └── American Gods.azw3
└── Project Hail Mary/
    ├── Project Hail Mary.epub
    └── Project Hail Mary.pdf
```

---

### 🎧 Single-File Audiobook

A single `.m4b`, `.m4a`, or `.mp3` file in a folder is treated like any other book format.

```
Library/
├── Project Hail Mary/
│   └── Project Hail Mary.m4b
└── Dune/
    └── Dune.m4b
```

---

### 🎧 Chaptered Audiobook

When a folder contains **2 or more audio files**, the entire folder is treated as **one audiobook**. The folder name becomes the book title. Individual chapter files are not listed as separate books.

```
Library/
└── Project Hail Mary/
    ├── 01 - Chapter 1.mp3
    ├── 02 - Chapter 2.mp3
    ├── 03 - Chapter 3.mp3
    └── 04 - Chapter 4.mp3
```

**Filenames don't matter.** Booklore only checks that the folder has 2 or more audio files. The folder name becomes the book title. Any naming pattern works, including Audible/CD rip conventions:

```
Library/
└── Project Hail Mary/
    ├── projecthailmary_01_of_16.mp3
    ├── projecthailmary_02_of_16.mp3
    └── projecthailmary_03_of_16.mp3
```

#### What won't work

**Only 1 audio file in a folder** is not treated as a folder-based audiobook. The file is added as an individual entry:

```
Library/
└── Dune/
    └── Dune Part 1.mp3         ← individual audiobook, not folder-based
```

**Multiple different audiobooks in one folder** are wrongly merged into a single entry:

```
Library/
└── Audiobooks/                 ← detected as one audiobook "Audiobooks"
    ├── Project Hail Mary.m4b
    └── Dune.m4b
```

Give each audiobook its own folder to avoid this.

**Chaptered audio files alongside ebook files** in the same folder creates separate books. The ebook and the folder-based audiobook end up with different grouping keys internally:

```
Library/
└── Project Hail Mary/
    ├── Project Hail Mary.epub  ← detected as one book
    ├── 01 - Chapter 1.mp3     ← detected as a separate audiobook
    ├── 02 - Chapter 2.mp3
    └── 03 - Chapter 3.mp3
```

If you have both an ebook and a chaptered audiobook for the same title, keep them in separate folders:

```
Library/
├── Project Hail Mary/
│   └── Project Hail Mary.epub
└── Project Hail Mary (Audiobook)/
    ├── 01 - Chapter 1.mp3
    ├── 02 - Chapter 2.mp3
    └── 03 - Chapter 3.mp3
```

---

### 📖🎧 Ebook + Audiobook Together

Ebook and single-file audiobook (`.m4b`) can coexist in the same folder. They are grouped as one book with multiple format options.

```
Library/
└── American Gods/
    ├── American Gods.epub
    ├── American Gods.pdf
    └── American Gods.m4b
```

:::warning[Only single-file audiobooks]
This only works with a single `.m4b`/`.m4a`/`.mp3` per folder. Chaptered audiobooks (2+ audio files) in the same folder as ebooks will be detected as separate books. See [Chaptered Audiobook > What won't work](#what-wont-work) above.
:::

---

### 🦸 Comics

Supported extensions: `.cbz`, `.cbr`, `.cb7`. Works just like ebooks.

```
Library/
├── Batman Year One/
│   └── Batman Year One.cbz
└── Watchmen/
    ├── Watchmen.cbz
    └── Watchmen.pdf
```

---

### 📚 Series

Give each book in the series its own folder:

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

### 📂 Author Folders

You can optionally nest book folders inside author folders. Booklore only looks at the **immediate parent folder** for grouping, so intermediate author directories don't interfere.

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
│   ├── Mistborn 1 - The Final Empire/
│   │   └── The Final Empire.epub
│   └── Mistborn 2 - The Well of Ascension/
│       └── The Well of Ascension.epub
└── Andy Weir/
    └── Project Hail Mary/
        ├── Project Hail Mary.epub
        └── Project Hail Mary.pdf
```

---

### 📄 Flat Files (No Folders)

All files at the library root with no subfolders. Multi-format grouping requires **exact** name matches since root-level files don't get fuzzy matching.

```
Library/
├── American Gods.epub
├── American Gods.pdf
├── Dune.epub
├── The Hobbit.epub
└── 1984.pdf
```

:::warning[No folder-based audiobooks at root level]
Audio files placed directly at the library root are always treated as individual entries, even if there are multiple. Folder-based audiobook detection only works inside subfolders.
:::

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
