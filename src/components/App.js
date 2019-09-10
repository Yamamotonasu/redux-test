import React, { Component } from 'react';

// functional component
const App = () => {
  return <Counter></Counter>
}

// stateを使う時はclassを使う？
class Counter extends Component {
  // define initializer
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  // define plus button for increment state count +1
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  

  render() {
    console.log(this.state.count)
    console.log("render called")
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
