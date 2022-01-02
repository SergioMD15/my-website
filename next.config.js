/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    CF_SPACE_ID: process.env.CF_SPACE_ID,
    CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN
  }
}
