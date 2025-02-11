const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Define your routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/terms-and-conditions', changefreq: 'yearly', priority: 0.3 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  // Add other routes as needed
];

const sitemapStream = new SitemapStream({ hostname: 'https://www.csweb.pro' });

// Generate the sitemap and save it to the public folder
streamToPromise(sitemapStream.pipe(fs.createWriteStream(path.resolve(__dirname, 'public/sitemap.xml'))))
  .then(() => {
    console.log('Sitemap generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });

// Write the links into the sitemap
links.forEach((link) => {
  sitemapStream.write(link);
});

sitemapStream.end();
