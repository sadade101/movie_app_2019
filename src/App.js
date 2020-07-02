import React from 'react';
import axios from 'axios';
//import PropTypes from 'prop-types'

class App extends React.Component {

  state = {
    isLoading: true
  };

  getMovies = () => {
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json")
    //const data = await Response.json();
    return movies
  };

  componentDidMount() {
    this.getMovies().then(result => {
      console.log(result);
      this.setState({isLoading:false, movies:this.movies}) 
    }); 
    console.log("complete")
  }

  render() {
    const { isLoading } = this.state ;    
    return <div>{isLoading ? "Loading......" : "We are ready"}</div>;
  }
}

export default App;
