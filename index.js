if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/react-animated-text-content.production.js');
} else {
  module.exports = require('./dist/react-animated-text-content.development.js');
}
