import React from 'react'
import { Link, useParams } from 'react-router-dom'

function BlogDetail({ blogs }) {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));
  
    return blog ? (
      <div className="container mx-auto p-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {blog.title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {blog.details}
        </p>
        <Link
          to="/blog"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          ← Back to Blogs
        </Link>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold text-red-500">BLOG NOT FOUND!</h1>
        <Link
          to="/blog"
          className="mt-4 inline-block bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Back to Blogs
        </Link>
      </div>
    );
}

export default BlogDetail
