export function formatDate(date) {
  return new Date(date).toLocaleDateString('de-DE',
  {timeZone: "Europe/Berlin",
  })
} 

export function slugify(string) {
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}


  export function generateCategoryData(categories) { /* Creates category list */
    let categoryData = []; /* Creates array of categories list */
    categories.forEach((category) => { /* Looping through */
        categoryData.push({ /* Pushing object to that array */
            name: category, /* Assigning category name */
            slug: `${generateSlug(category)}`, /* Generates slug */
        });
    });
    return categoryData; /* Returns the category data */
  }