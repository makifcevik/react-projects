import React, { useState } from 'react'
import BlogCard from './BlogCard';

function Blog({blogs}) {

  return (
        <div className='dark:text-white'>
            {blogs.map(blog => (
              <BlogCard key={blog.id} blogItem={blog}/>
            ))}
        </div>
  )
}

export default Blog
