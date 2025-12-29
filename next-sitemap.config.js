/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://astika.is-a.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
