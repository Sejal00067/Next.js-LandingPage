const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.builder.io"],
  },
});

module.exports = nextConfig;
