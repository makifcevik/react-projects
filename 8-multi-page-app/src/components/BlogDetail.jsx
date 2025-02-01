import React from 'react'
import { Link, useParams } from 'react-router-dom'

function BlogDetail({blogs}) {

    const { id } = useParams();

    const blog = blogs.find(b => b.id === parseInt(id));

    return blog ? (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.details}</p>
            <Link to={"/blog"}>Back</Link>
        </div>
    ) : (
        <h1>BLOG NOT FOUND!</h1>
    )
}

export default BlogDetail
