/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/fetures",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
  images: {
    domains: ["localhost", "api.afracrm.pro"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
