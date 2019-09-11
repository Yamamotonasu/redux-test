import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions/events'
import { dispatch } from 'rxjs/internal/observable/pairs';

// stateを使う時はclassを使う？
class EventsIndex extends Component {
  componentDidMount() {
    console.log("hi!!")
    // api events fo actions
    this.props.readEvents()
  }
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
  { }
)
// あるactionが生じた時にreducerにある関数を実行させるのがdispatch関数の役割になる
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// こっちでもかけるよ
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
