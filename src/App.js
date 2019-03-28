import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {
    greeting : 'Loading',
    time : 500
  }

  componentDidMount(){

    // setTimeout(() => {
    //   this._setGreeting()
    //   setTimeout(() => {
    //     this._setGreeting()
    //     setTimeout(() => {
    //       this._setGreeting()
    //       setTimeout(() => {
    //         this._setGreeting()
    //       }, 1000)
    //     }, 1000)
    //   }, 1000)
    // }, 1000)

    this._setTimeout()

    setTimeout(() => {
      this.setState(
        this._getMovies()
      )
    }, 5000)
  }

  _setTimeout = (time) => {
    let interval = time + 500
    setTimeout(() => {
      this._setGreeting()
    }, interval)
  }

  _setGreeting = () => {
    this._setTimeout(this.state.time)
    let str = this.state.greeting
    let greet = str + "."
    this.setState({
      greeting : greet
    })
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies 
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then((response) => response.json())
    .then((response) => response.data.movies)
    .catch((err) => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} genres={movie.genres} synopsis={movie.synopsis}/>
    })
    return movies
  }

  _renderGreeting = () => {
    const greeting = this.state.greeting
    return greeting
  }

  render() {
    const {movies} = this.state
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : this._renderGreeting()}
      </div>
    );
  }
}

export default App;
