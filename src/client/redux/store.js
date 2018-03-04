const { createStore, applyMiddleware } = require('redux')
const logger = require('redux-logger').default
const rootReducer = require('./rootReducer')

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

module.exports = store
