export const GET = ({ url }) => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap.xml', url).href}
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};