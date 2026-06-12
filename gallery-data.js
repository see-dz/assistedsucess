/*
HOW TO ADD PHOTOS TO THE GALLERY

1. In GitHub, open the "photos" folder.
2. Click "Add file" > "Upload files".
3. Upload your image.
4. Copy the exact image file name, for example: blue-centerpiece.jpg
5. Come back to this file: gallery-data.js
6. Copy one item below and paste it under the others.
7. Change:
   image: "photos/YOUR-FILE-NAME.jpg"
   title: "Your photo title"
   category: "Wedding Decor" or "Birthday Party" or "Floral Design"

IMPORTANT:
- Keep quotation marks.
- Keep commas between items.
- The last item does not need a comma after it.
*/

const galleryItems = [
  {
    image: "photos/sample-wedding-table.jpg",
    title: "Elegant Wedding Table Setup",
    category: "Wedding Decor"
  },
  {
    image: "photos/sample-florals.jpg",
    title: "Artificial Floral Arrangement",
    category: "Floral Design"
  },
  {
    image: "photos/sample-party.jpg",
    title: "Celebration Setup",
    category: "Event Decor"
  }
];
