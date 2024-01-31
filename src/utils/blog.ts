// Function to generate slug from blog title
export const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-')
}
