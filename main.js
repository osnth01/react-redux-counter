import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
  render() {
    return (
      <h1>Hi</h1>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
)
