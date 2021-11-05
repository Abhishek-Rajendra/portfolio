const withVideos = require("next-videos");
const withImages = require("next-images");

module.exports = withImages(
  withVideos({
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    reactStrictMode: true,
    images: {
      disableStaticImages: true,
    },
  })
);
