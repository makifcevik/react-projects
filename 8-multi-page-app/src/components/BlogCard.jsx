import React from 'react'
import {Link} from 'react-router-dom'

function BlogCard({blogItem}) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2">{blogItem.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{blogItem.abstract}</p>
            <Link
                to={`/blog/${blogItem.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Read More
            </Link>
        </div>
    )
}

export default BlogCard
