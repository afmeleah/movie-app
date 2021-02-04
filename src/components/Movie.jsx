import React from 'react'

const poster = "https://image.tmdb.org/t/p/w1280"

function Movie(props) {
    return (
        <div className='movie'>
            <img src={poster + props.poster_path} alt={props.title}/>
            <div className="movie-info">
                <h3>{props.title}</h3>
            </div>

            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}



export default Movie