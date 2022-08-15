/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:5127/api/' // development api
      : '/api/v1/', // production api
    authUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost/SurfaceAuth/api/login' // development auth api
      : process.env.AUTH_URL, // production auth api
  }
}
