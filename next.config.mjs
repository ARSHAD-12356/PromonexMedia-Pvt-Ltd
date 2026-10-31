/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Let middleware combine slash, path alias, scheme, and host into one 301.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
