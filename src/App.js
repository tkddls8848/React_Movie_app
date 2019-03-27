import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {
    greeting : ""
  }



  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting : "Loading."
      })
      setTimeout(() => {
        this.setState({
          greeting : "Loading.."
        })
        setTimeout(() => {
          this.setState({
            greeting : "Loading..."
          })
          setTimeout(() => {
            this.setState({
              greeting : "Loading...."
            })
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Matrix",
            image : "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL.jpg"
          },
          {
            title : "Full Metal Jacket",
            image : "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg"
          },
          {
            title : "Old boy",
            image : "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/6rIc/image/gCQXUtxPRSKlcl8QbUzOIUtLpxI"
          },
          {
            title : "Star wars",
            image : "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
          },
          {
            title : "new movie",
            image: "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.image} key={index}/>
    })
    return movies
  }

  _renderGreeting = () => {
    const greeting = this.state.greeting
    return greeting
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : this._renderGreeting()}
      </div>
    );
  }
}

export default App;
