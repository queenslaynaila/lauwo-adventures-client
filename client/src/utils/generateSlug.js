export const generateSlug = (str) => {
  return str
  .toLowerCase()
  .replace(/[^\w\s]/gi, '')
  .trim()
  .replace(/[\s]/g, '-');
}
