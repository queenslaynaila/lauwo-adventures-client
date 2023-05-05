const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
module.exports = {
  siteUrl,
  exclude: ['/404,/admin'],
  generateRobotsTxt: true,
  sourceDir: './build',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404,/admin'],
      },
    ],
    additionalSitemaps: [
      `${siteUrl}sitemap.xml`,
      `${siteUrl}mountains-sitemap.xml`,
      `${siteUrl}mountain-routes-sitemap.xml`,
      `${siteUrl}safaris-sitemap.xml`,
      `${siteUrl}day-trips-sitemap.xml`,
    ],
  },
};
