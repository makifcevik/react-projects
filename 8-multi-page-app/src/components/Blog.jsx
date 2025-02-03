import React, { useState } from 'react'
import BlogCard from './BlogCard';

function Blog({blogs}) {

  return (
      <div className="container mx-auto p-6 dark:text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blogItem={blog} />
          ))}
        </div>
      </div>
  )
}

export default Blog
