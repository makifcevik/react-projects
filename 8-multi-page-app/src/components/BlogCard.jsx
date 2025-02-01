import React from 'react'
import {Link} from 'react-router-dom'

function BlogCard({blogItem}) {
    return (
        <div>
            <h1>{blogItem.title}</h1>
            <p>{blogItem.abstract}</p>
            <Link
                to={`/blog/${blogItem.id}`}
            >
                Read More
            </Link>
        </div>
    )
}

export default BlogCard
