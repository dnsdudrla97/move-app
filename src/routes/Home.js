import React from 'react';
import axios from 'axios';
import Movie from "../components/Movie"
import "./Home.css"

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // console.log(movies.data.data.movies);
    console.log(movies)
    this.setState({ movies, isLoading: false }); // ES6 <- {movies:movies}
    // this.setState({ movies}); // ES6 <- {movies:movies}
  }

  // render mount -> componentDidMount -> data fetching
  componentDidMount() {
    this.getMovies()
    // componentDidMount 함수가 끝날때까지 기다려야 한다.
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres} />
              ))}
            </div>
          )}
      </section>
    );

  }
}
export default Home;
