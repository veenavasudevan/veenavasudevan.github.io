/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Forces output to /consulting/index.html
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
};

export default nextConfig;
