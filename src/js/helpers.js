export function formatDate(date) {
  return new Date(date).toLocaleDateString('de-DE',
  {timeZone: "Europe/Berlin",
  })
} 

export function slugify(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
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