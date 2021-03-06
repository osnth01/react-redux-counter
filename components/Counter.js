import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    )
  }
}

export default Counter