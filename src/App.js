import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log(movies.data.data.movies);
    console.log(movies)
    this.setState({ movies, isLoading: false }); // ES6 <- {movies:movies}
  }

  // render mount -> componentDidMount -> data fetching
  componentDidMount() {
    this.getMovies()
    // componentDidMount 함수가 끝날때까지 기다려야 한다.
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading.." : "ready"}</div>

  }
}
export default App;
