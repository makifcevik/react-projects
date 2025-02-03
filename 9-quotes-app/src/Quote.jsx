import React from 'react'

function Quote({quote}) {
    return (
        <div className='bg-slate-400 m-3 p-4 rounded-lg'>
            <h1 className='text-2xl font-bold mb-8'>{quote.author}</h1>
            <p className='text-lg'>{quote.quote}</p>
        </div>
    )
}

export default Quote
