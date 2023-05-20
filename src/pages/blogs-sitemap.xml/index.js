import { getServerSideSitemapLegacy } from 'next-sitemap';
import { generateSlug } from '@/utils/generateSlug';
export const getServerSideProps = async (ctx) => {
  const blogs = await fetch(
    'https://lauwo-adventures-api.onrender.com/blogs'
  ).then((res) => res.json());

  const blogsSitemaps = blogs.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}blogs/${generateSlug(
      item.name
    )}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...blogsSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
