const React = require('react')
const ReactDOM = require('react-dom')
const rootReducer = require('./redux/reducers')
// const App = require('./app')
const { createStore, applyMiddleware } = require('redux')
const logger = require('redux-logger').default
const { Provider, connect } = require('react-redux')

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)


const Counter = ({
  counter,
  increment,
  decrement
}) => {

  console.log(increment)

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

const increment = () => ({
  type: 'INCREMENT'
})

const decrement = () => ({
  type: 'DECREMENT'
})

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

const App = () => {
  return (
    <div id="app">
      <CounterContainer />
    </div>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)