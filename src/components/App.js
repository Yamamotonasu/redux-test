import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import { dispatch } from 'rxjs/internal/observable/pairs';

// stateを使う時はclassを使う？
class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}
// storeからこのcomponentで必要なstateで必要なstateを取り出す
const mapStateToProps = state => (
  { value: state.count.value }
)
// あるactionが生じた時にreducerにある関数を実行させるのがdispatch関数の役割になる
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// こっちでもかけるよ
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)
