/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wwe.com",
        port: "",
        pathname: "**", // you will get an error if you don't specifiy this for the image component
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "**", // you will get an error if you don't specifiy this for the image component
      },
    ],
  },
};

module.exports = nextConfig;
