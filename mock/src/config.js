module.exports = {
  SOURCE_PATH: './src',
  ROUTE_PATH: './src/routes',
  MOCK_DATA_PATH: './src/data',
  PORT: 3100,
  API_BASE_PATH: '/api/',
  HEADER: {
    'Cache-Control': 'private, no-cache, no-store, must-revalidate',
    'Expires': '-1',
    'Pragma': 'no-cache'
  },
  RESPONSE_LATENCY: 1000,
  LOGGER_FORMAT: 'myCustomFormat'
};
