const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  env: {
    NOTION_KEY: process.env.NOTION_KEY,
    NOTION_TIL_DATABASE_ID: process.env.NOTION_TIL_DATABASE_ID,
    NOTION_ABOUT_ME_DATABASE_ID: process.env.NOTION_ABOUT_ME_DATABASE_ID,
  },
})
