/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: process.env.NODE_ENV === 'development' ? [
//           {
//             key: 'Cache-Control',
//             value: 'no-store, max-age=0',
//           },
//         ] : [],
//       },
//     ];
//   },
// };

module.exports = nextConfig;



