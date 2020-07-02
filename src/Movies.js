import React from "react";
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({id, title, summary, poster, year, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className ="movie__title">{title}</h3>
                <h5 className ="movie__year">{year}</h5>
                <p className ="movie__summary">{summary}</p>
                <ul className ="movie_genre">
                    {
                        genres.map((genre,index) => <li key={index}> {genre} </li>)
                    }
                </ul>
            </div>
        </div>

    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie