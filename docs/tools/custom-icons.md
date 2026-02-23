# 🎨 Custom SVG Icons

Upload custom SVG icons to use with Libraries, Shelves, and Magic Shelves. Icons from [Lucide](https://lucide.dev/), [Iconoir](https://iconoir.com/), [Heroicons](https://heroicons.com/), or [Feather Icons](https://feathericons.com/) work well.

---

## 🚀 Opening the Icon Picker

The icon picker appears when assigning icons to a Library, Shelf, or Magic Shelf.

![Prime Icons Tab](/img/icons/0-icons--library-creator.jpg)

1. **Navigate to Library/Shelf/Magic Shelf Settings**

2. **Click the Choose Icon Button**

3. **Choose Your Tab**: Select from Prime Icons, SVG Icons, or Add SVG Icon

---

## 📖 Icon Picker Tabs

### Tab 1: Prime Icons (Built-in)

Browse the default PrimeNG icon library:

![Prime Icons Tab](/img/icons/1-icons--prime.jpg)

Browse and search the built-in PrimeNG icon library. Click any icon to select it.

---

### Tab 2: SVG Icons (Your Collection)

Browse and manage your custom SVG icons:

![SVG Icons Tab](/img/icons/2-icons--custom.jpg)

#### 1. Search Your Icons

Use the search bar to filter icons by name:

```
Search: "book" → Shows: book-open, book-closed, bookmark
```

#### 2. Icon Grid Display

Each icon displays as a clickable tile with:

- Visual preview of the SVG
- Icon name on hover

#### 3. Trash Bin (Delete Icons)

Located in the bottom-right corner for easy access.

**How to Delete:**

1. **Drag the Icon**  
   Click and hold on any SVG icon

2. **Drag to Trash**  
   Move your cursor to the trash bin area

3. **Drop to Delete**  
   Release to permanently delete the icon

4. **Visual Feedback**  
   The trash bin highlights when you hover over it

:::danger[Permanent Deletion]
Deleted icons cannot be recovered. You'll need to re-add them if needed later.
:::

---

### Tab 3: Add SVG Icon (Create New)

Add new custom icons by pasting SVG code:

![Add SVG Tab](/img/icons/3-icons--add-custom.jpg)

#### Step-by-Step Guide

##### 1. Name Your Icon

Enter a descriptive name in the input field:

```
Icon Name: "rocket-ship"
```

**Naming Rules:**

- Only letters, numbers, and underscores
- Maximum 255 characters
- No spaces or special characters

:::warning[Naming Convention]
Use lowercase with hyphens for consistency: `my-custom-icon` instead of `MyCustomIcon`
:::

##### 2. Paste SVG Code

Copy SVG code from your source and paste into the textarea:

```xml

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chess-king-icon lucide-chess-king">
    <path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/>
    <path d="m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1"/>
    <path d="M10 4h4"/>
    <path d="M12 2v6.818"/>
</svg>
```

**Valid SVG Sources:**

- Icon libraries (Lucide, Iconoir, Heroicons, etc.)
- Custom designs from Figma, Sketch, or Illustrator

:::info[SVG Requirements]

- Must include `<svg>` tag
- Maximum file size: 1MB
- Should include `viewBox` for proper scaling
- **Recommended**: Use `fill="none"` and `stroke="white"` for best visual alignment
  :::

##### 3. Preview Your Icon

As you paste, the preview updates automatically.

The preview shows exactly how your icon will appear in Booklore.

##### 4. Save the Icon

Click the **"Save SVG"** button to finalize:

**What Happens Next:**

1. ✅ Icon is saved to ~/booklore/data/icons/svg/
2. 🔄 You're automatically switched to the SVG Icons tab
3. 🎯 Your new icon is pre-selected and ready to use

---

## 🔧 Troubleshooting

| Issue | Solution |
|---|---|
| **Invalid SVG content** | Ensure you copied the full code from `<svg>` to `</svg>`. Validate at [svgviewer.dev](https://www.svgviewer.dev/). |
| **Icon too large/small** | Add a `viewBox` attribute (e.g., `viewBox="0 0 24 24"`) and remove hardcoded `width`/`height`. |
| **Colors don't match theme** | Use `fill="none"` and `stroke="white"` instead of hardcoded colors. |