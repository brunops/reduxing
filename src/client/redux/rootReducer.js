const { combineReducers } = require('redux')

const counter = require('./containers/Counter/reducers')

module.exports = combineReducers({
  counter
})