import React, { Component } from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 12 }
  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
    </div>
  )
}

const User = (props) => {
  return <div>Hi! I am {props.name} and {props.age} years old.</div>
}

// define check prop types
User.propTypes = {
  // check string
  name: PropTypes.string,
  // check number and age is requireded
  age: PropTypes.number.isRequired
}

export default App;
