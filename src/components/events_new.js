import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { postEvent } from '../actions/events'

// using cancel button 
import { Link } from 'react-router-dom'

// stateを使う時はclassを使う？
class EventsNew extends Component {
  render() {
    // propsにactionの中身が入っているって考えていい！
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}
// storeからこのcomponentで必要なstateで必要なstateを取り出す
// reducerからの変更を受け取っているはずなので
const mapStateToProps = state => (
  { events: state.events }
)


// こっちでもかけるよ
// const mapDispatchToProps = ({ postEvent })

// 
export default connect(null, null)(EventsNew)
