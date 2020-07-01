import React from 'react';
//import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("hello")
  }
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
  componentDidMount() {
    console.log("componet rendered")
  }

  componentDidUpdate() {
    console.log("component updated")
  }

  componentWillUnmount() {
    console.log("good-bye")
  }

  render() {
    console.log("im rendering")
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
