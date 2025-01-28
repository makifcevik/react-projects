import React from 'react'

function Movie({movie}) {
    return (
        <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
            <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
        </div>

    )
}

export default Movie
