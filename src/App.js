import React, { Component } from 'react';

// // app class inherted component
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => { console.log("I am clicked.") }} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Myaa</div>
}

export default App;
