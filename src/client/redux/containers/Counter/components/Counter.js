const React = require('react')

const Counter = ({
  counter,
  increment,
  decrement
}) => (
  <div className="Counter">
    <h1>Counter: {counter}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

module.exports = Counter