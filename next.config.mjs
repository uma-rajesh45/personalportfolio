/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
        },
      ],
      },
};

export default nextConfig;
