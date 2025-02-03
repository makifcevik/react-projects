import React from 'react'

function About() {
    return (
        <div className="container mx-auto max-w-3xl p-10">
            <h1 className="text-4xl font-bold mb-6 dark:text-white">About This Blog</h1>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                This blog was created to share knowledge about web development, JavaScript, 
                and the latest trends in programming. Whether you're a beginner or an experienced 
                developer, you'll find useful insights and tutorials here.
            </p>

            <h2 className="text-2xl font-semibold mt-6 dark:text-white">Who Am I?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                I'm a passionate developer with experience in React, JavaScript, and backend 
                technologies. I love building projects, learning new things, and sharing 
                what I learn with the community.
            </p>

            <h2 className="text-2xl font-semibold mt-6 dark:text-white">Get in Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                Have questions or ideas? Feel free to reach out or follow me on social media!
            </p>
        </div>
    )
}

export default About
