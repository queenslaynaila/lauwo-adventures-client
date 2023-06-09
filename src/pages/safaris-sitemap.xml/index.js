import { getServerSideSitemapLegacy } from 'next-sitemap';
import { generateSlug } from '@/utils/generateSlug';
export const getServerSideProps = async (ctx) => {
  const safaris = await fetch(
    'https://lauwo-adventures-api.onrender.com/safaris'
  ).then((res) => res.json());

  const safariSitemaps = safaris.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}our-safari-packages/${generateSlug(
      item.name
    )}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...safariSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
