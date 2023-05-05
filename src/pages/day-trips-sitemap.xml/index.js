import { getServerSideSitemapLegacy } from 'next-sitemap';
import { generateSlug } from '@/utils/generateSlug';
export const getServerSideProps = async (ctx) => {
  const dayTrips = await fetch('http://localhost:3000/day_trips').then((res) =>
    res.json()
  );

  const dayTripsSitemaps = dayTrips.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}day-trips/${generateSlug(
      item.name
    )}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...dayTripsSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
