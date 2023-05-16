export const generateSlug2 = (title) => {
  const formattedTitle = title.toLowerCase().replace(/\d+-day-/, ''); // Remove the day information in the format 'X-day'

  const words = formattedTitle.split(' ');
  const route = words.slice(1, words.length - 1).join('-'); // Extract the route name

  const days = words[0].replace(/[^0-9]+/g, ''); // Extract the number of days

  const slug = `${route}-route-${days}-days`;
  return slug;
};
