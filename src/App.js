import React from 'react';
//import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    count: 0
  }
  add = () => {
    console.log("add")
    
    this.setState(current => ({count:current.count+1}))
  }
  minus = () => {
    console.log("minus")
    this.setState(current => ({count:current.count-1}))
  }
  render() {
    return (
      <div>
        <h1>the number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
