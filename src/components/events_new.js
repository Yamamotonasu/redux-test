import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { postEvent } from '../actions/events'
import { Field, reduxForm } from 'redux-form'

// using cancel button 
import { Link } from 'react-router-dom'

// stateを使う時はclassを使う？
class EventsNew extends Component {

  // フィールドの値が渡ってくる
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return(<div></div>)
  }

  render() {
    return (
      <form>    
        <div><Field label="Title" name="title"  type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

// バリデーションを定義する
const validate = values => {
  const error = {}

  return error
}

export default connect(null, null)(
  // redux formにconformする必要があるよお
  // 
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
