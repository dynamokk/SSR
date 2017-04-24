import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
      </p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state
  }
}


export default connect(mapStateToProps)(Counter)
