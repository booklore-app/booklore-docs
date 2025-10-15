# ✨ Magic Shelves

Magic Shelves are dynamic, rule-based collections based on **book metadata fields** that automatically organize your books based on filters you define, like *"Unread Sci-Fi Books from the 1980s"* or *"Books Rated 4+ Stars and Finished Last Month."*

:::info[What are Magic Shelves?]
Magic Shelves are like dynamic smart playlists for your books, they automatically update based on rules you define.
:::

They eliminate the need for manual categorization and keep your collections up to date as your library grows and changes.

Whenever you add a new book, edit existing metadata, or change your reading status, Magic Shelves automatically update to reflect these changes, ensuring your collections are always current.

---

## 🛠️ How Magic Shelves Work

- 🧮 **Rule-Based Filtering**: Define filters using metadata fields like title, author, categories, read status, ratings, and more.
- 🔄 **Real-Time Updates**: As books are added, edited, or metadata changes, Magic Shelves update automatically.
- 🧠 **Nested Logic**: Combine multiple conditions using AND/OR groups for flexible, complex filtering.
- 📚 **Always Fresh**: No need to manually move books in or out; Magic Shelves stay current based on your rules.

---

## 🚀 Step 1: Open the Magic Shelf Interface

![Magic Shelf Open](/img/magic-shelf/magic-shelf-1.jpg)

Navigate to the **Shelves** section of the sidebar and click **New Magic Shelf**. This will open the Magic Shelf creation interface.

---

## ✍️ Step 2: Create Your Magic Shelf

![Magic Shelf Create](/img/magic-shelf/magic-shelf-2.jpg)

Follow these steps to create your own Magic Shelf:

1. **Name Your Shelf**  
   Give your shelf a descriptive name (e.g., *"Rom-Zom-Com"* for Romantic Zombie Comedy).

2. **Select an Icon**  
   Choose an icon to visually represent your shelf.

3. **Define Rules or Groups**  
   - Click **Add a new rule** to start defining filtering conditions.  
   - Click **Add a new group** to combine multiple rules with AND/OR logic for more complex filtering.

4. **Delete Rules or Groups**  
   Remove any rule or group by clicking the trash icon next to it.

5. **Save Your Shelf**  
   Click **Save Shelf** to finalize and create your Magic Shelf.

---

:::tip[Metadata Matters]
Magic Shelves work entirely based on your book's metadata. The more complete your data, the smarter your shelves!
:::

## 📝 Detailed Instructions for Creating Rules

---

### 🧩 Rule Anatomy

Each rule consists of three main components:

- **Field**  
  The book metadata field to evaluate.  
  _Example:_ "Title", "Author", "Rating", "Library", etc.  
  _E.g.:_ Field = **Title**

- **Operator**  
  How the metadata field is evaluated.  
  _Example operators:_ "equals", "greater than", "contains", etc.  
  _E.g.:_ Operator = **contains**

- **Value(s)**  
  The value(s) to compare against.  
  _Example:_ a word, a number, or a list of categories.  
  _E.g.:_ Value = **"dragon"**

**Sample Rule:**  
_Title_ **contains** _"dragon"_

You can combine multiple rules into a **group**, joined by either `AND` (all must match) or `OR` (any can match). Groups can also be nested to form complex logic trees.

---

### 🛠️ Available Fields

Here are some of the metadata fields you can filter on:

| Field             | Description                                |
|-------------------|--------------------------------------------|
| Library           | The library the book belongs to            |
| Title             | The book’s title                           |
| Subtitle          | The book’s subtitle                        |
| Authors           | Author(s) of the book                      |
| Publisher         | Publisher of the book                      |
| Categories        | Genre or tags                              |
| Read Status       | Whether the book is unread, reading, etc.  |
| Published Date    | Date the book was published                |
| Series Info       | Name, number, and total books in series    |
| Page Count        | Total pages in the book                    |
| Language          | Book’s language                            |
| Ratings           | Ratings from Amazon, Goodreads, etc.       |
| Reviews           | Reviews from Amazon, Goodreads, etc.       |
| File Type         | EPUB, PDF, etc.                            |
| File Size         | File size in KB                            |
| Personal Rating   | Your own rating for the book               |
| Metadata Score    | Booklore’s match score during import       |
| Last Read         | When you last opened/read the book         |

---

### ⚙️ Operator Types

Below is a table describing what each operator does:

| **Operator**              | **Description**                                                         |
|--------------------------|-------------------------------------------------------------------------|
| `equals`                 | Matches books where the metadata field **exactly equals** the specified value. |
| `not_equals`             | Matches books where the metadata field **does not equal** the specified value. |
| `contains`               | Matches books where the metadata field **contains** the given substring. |
| `does_not_contain`       | Matches books where the metadata field **does not contain** the given substring. |
| `starts_with`            | Matches books where the metadata field **starts with** the specified value. |
| `ends_with`              | Matches books where the metadata field **ends with** the specified value. |
| `is_empty`               | Matches books where the metadata field is **empty, null, or not set**. |
| `is_not_empty`           | Matches books where the metadata field is **not empty**. |
| `includes_any`           | Matches if **at least one** of the values is present in the book's metadata field. |
| `includes_all`           | Matches **only if all** the specified values are present in the book's metadata field. |
| `excludes_all`           | Matches if **none** of the specified values are present in the book's metadata field. |
| `greater_than`           | Matches if the metadata field is **greater than** the specified value. |
| `greater_than_equal_to`  | Matches if the metadata field is **greater than or equal to** the specified value. |
| `less_than`              | Matches if the metadata field is **less than** the specified value. |
| `less_than_equal_to`     | Matches if the metadata field is **less than or equal to** the specified value. |
| `in_between`             | Matches if the metadata field is **between two values** (inclusive or exclusive based on UI). |

**Examples**:
- "Read Status **equals** Reading"
- "Title **contains** dragon"
- "Amazon Rating **greater than** 4"
- "Categories **includes_all** ['Fantasy', 'Adventure']"

---

### 🎨 Example Magic Shelves

- **Romantic Horror**  
  *(Blends romance and horror genres to surface spooky love stories.)*  
  Dive into tales where love meets terror, perfect for fans of chilling romances and supernatural thrills.

  ![Image](/img/magic-shelf/magic-shelf-ex1.jpg)

- **Missing Metadata**  
  *(Shows books with incomplete or missing metadata for easy cleanup.)*  
  Quickly find books lacking key info like title, author, or categories so you can tidy up your library’s data.

  ![Image](/img/magic-shelf/magic-shelf-ex2.jpg)

- **Gods & Legends**  
  *(Surfaces mythology, folklore, and legendary tales.)*  
  Explore epic stories of gods, heroes, and ancient myths from cultures around the world.

  ![Image](/img/magic-shelf/magic-shelf-ex3.jpg)

- **Fast & Furious**  
  *(Short, fast-paced books with high ratings.)*  
  Find thrilling, page-turning reads that are highly rated and perfect for when you want an adrenaline rush in a hurry.

  ![Image](/img/magic-shelf/magic-shelf-ex4.jpg)

- **Couldn't Finish**  
  *(Books you started but didn’t finish.)*  
  Keep track of books you abandoned mid-read, a reminder of what’s still on your reading list or what to reconsider.

  ![Image](/img/magic-shelf/magic-shelf-ex5.jpg)