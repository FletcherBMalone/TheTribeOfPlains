// next.config.js
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    };
  },
  output: 'export',
};
