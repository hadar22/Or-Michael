/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env: {
    MONGODB_URL:
      "mongodb+srv://Juniors:123456Juniors@or-michael-db.l1l8kxi.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
