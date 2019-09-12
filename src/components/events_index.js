import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions/events'
import _ from 'lodash'
import { Link } from 'react-router-dom'

// stateを使う時はclassを使う？
class EventsIndex extends Component {
  componentDidMount() {
    console.log("hi!!")
    // componentが呼ばれた瞬間に発動する！did mount
    // 呼ばれた瞬間にactionのreadEvents関数を読み込んであげる！
    this.props.readEvents()
  }

  renderEvents() {
    // each文みたいなもん？？
    console.log("called render events")
    return _.map(this.props.events, event => (
      // ユニークなkeyを与える必要がある。
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    // propsにactionの中身が入っているって考えていい！
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
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
const mapDispatchToProps = ({ readEvents })

// 第一引数にreducerから受け取るようの関数、第二引数にactionへdispatchする関数、最後に受け取るcomponent
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
