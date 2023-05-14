import { getServerSideSitemapLegacy } from 'next-sitemap';
import { generateSlug } from '@/utils/generateSlug';

export const getServerSideProps = async (ctx) => {
  const mountains = await fetch('http://localhost:3000/mountains').then((res) =>
    res.json()
  );

  const routeSitemaps = mountains
    .flatMap((mountain) =>
      mountain.routes.map((route) =>
        route.durations.map((duration) => ({
          loc: `${
            process.env.NEXT_PUBLIC_DOMAIN_URL
          }mountain-trekking/${generateSlug(
            mountain.mountain_name
          )}/${generateSlug(route.route_name)}-${duration}-days`,
          lastmod: new Date().toISOString(),
        }))
      )
    )
    .flat();

  const fields = [...routeSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
