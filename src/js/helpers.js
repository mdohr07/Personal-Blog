export function formatDate(date) {
  return new Date(date).toLocaleDateString('de-DE',
  {timeZone: "Europe/Berlin",
  })
} 

export function slugify(string) {
  if (string !== null && string !== undefined) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  } else {
    // Handhabung des Falls, wenn 'string' null oder undefined ist
    return ''; // oder eine andere geeignete Standard-Rückgabewert
  }
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