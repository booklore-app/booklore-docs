# 🏷️ Custom Fields

Custom Fields let you add your own metadata fields to books in a **specific library**.

They’re useful for tracking things that aren’t covered by standard metadata, like:

- Edition / Printing
- Read status notes
- Signed copy
- Source / Purchase date
- Personal rating notes
- Comic credits (for example: Editor, Artist, Inker, Letterer)

---

## 🧠 How Custom Fields Work

- **Library-scoped:** each library has its own set of custom fields.
- **Typed:** each field is one of `String`, `Number`, or `Date`.
- **Optional default:** a field can have a default value that’s used when a book doesn’t have a value yet.
- **Per-book values:** you can set values per book in the metadata editor.

:::tip
If you use custom fields in file naming patterns, keep the field name stable — changing the name will also change the placeholder key.
:::

---

## ⚙️ Create & Manage Custom Fields

1. Open **Settings** → **Library Metadata Configuration**.
2. Expand the library you want to configure.
3. Scroll to the **Custom Fields** section.
4. Use **Add Custom Field** to define:
   - **Name** (required)
   - **Type** (`String`, `Number`, `Date`)
   - **Default Value** (optional)
5. Click **Add**.

You can delete a custom field from the same list.

:::warning
Custom field names must be unique within a library. If you try to create a duplicate name, BookLore will reject it.
:::

:::danger
Deleting a custom field removes its stored values from all books in that library.
:::

---

## ✏️ Edit Custom Field Values on a Book

Custom fields appear automatically in the **Metadata Editor** for books in libraries that have fields configured.

- `String` fields use a text input
- `Number` fields use a numeric input
- `Date` fields use a date input (stored as `YYYY-MM-DD`)

Once you save the book metadata, the custom field values are saved with that book.

---

## 🗒️ Use Custom Fields in File Naming Patterns

Custom fields can be referenced in file naming patterns using:

```
{custom:<name>}
```

Example:

```
{authors}/{title} <({custom:edition})>
```

- If the book has an `edition` value, it will be included.
- If it’s empty, the optional block is removed.

:::tip
In previews, custom fields use the field’s default value (or an example value if no default is set).
:::
