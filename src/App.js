import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
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
    image : "http://www.cinecafe.kr/files/attach/images/12486/035/056/5480dc8794a244781703283a4c66800d.jpg"
  },
  {
    title : "Star wars",
    image : "https://cdn-images-1.medium.com/max/1920/1*S7LfTcdi4uLWmbuueEIycQ.jpeg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.image} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
