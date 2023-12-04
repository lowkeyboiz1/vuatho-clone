const withNextIntl = require('next-intl/plugin')()

module.exports = withNextIntl({
  images: {
    domains: [
      'flagcdn.com',
      'vuatho.com',
      'cdn.vuatho.com',
      'api.vuatho.com',
      'localhost',
    ],
  },
})
