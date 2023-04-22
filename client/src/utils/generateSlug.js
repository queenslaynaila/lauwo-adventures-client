export const generateSlug = (str) => {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/-+$/g, '')
    .replace(/[^\w-]+/g, '');
};
