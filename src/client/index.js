const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./redux/App')
const store = require('./redux/store')
const { Provider } = require('react-redux')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
