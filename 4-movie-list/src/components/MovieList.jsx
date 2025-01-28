import React from 'react'
import Movie from './Movie'

function MovieList({movies}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>

    )
}

export default MovieList
