/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async function () {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
