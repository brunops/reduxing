const counterActions = require('./actions')
const { connect } = require('react-redux')

const Counter = require('./components/Counter')

const mapStateToProps = ({ counter }) => ({
  counter
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement())
})

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

module.exports = CounterContainer
