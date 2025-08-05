// netlify.config.js
module.exports = {
  // Netlify build komutları
  build: {
    command: 'npm run build',
    publish: 'dist',
    environment: {
      NODE_VERSION: '18',
    },
  },
  // Yönlendirme kuralları
  redirects: [
    {
      from: '/*',
      to: '/index.html',
      status: 200,
    },
  ],
  // Başlık kuralları
  headers: [
    {
      for: '/*',
      values: {
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'no-referrer-when-downgrade',
      },
    },
    {
      for: '/assets/*',
      values: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  ],
};