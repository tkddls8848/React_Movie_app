import React from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component {

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <MoviePoster poster={this.props.poster}/>
                
//             </div>
//         ) 
//     }
// }

// class MoviePoster extends Component {

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             <img src={this.props.poster} alt="movie poster"/>
//         )
//     }
// }

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genres, index) => {
                        return <MovieGenres genres={genres} key={index}/>
                        }
                    )}
                </div>
                <div className="Movie__Synopsis">
                    <MovieSynopsis synopsis={synopsis}/>
                </div>
            </div>
        </div>
    ) 
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="movie poster"/>
    )
}

function MovieGenres({genres}){
    return(
        <span className="Movie_Genre">{genres}</span>
    )
}

function MovieSynopsis({synopsis}){
    return(
        <LinesEllipsis
        text={synopsis}
        maxLine='3'
        ellipsis='......'
        trimRight
        basedOn='letters'
        /> 
    )
}

export default Movie;