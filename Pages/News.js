import React from 'react'
import Carousels from './Carousels'
import Blog from './Blog'

const News = () => {
  return (
    <div id='news-section'>
      <div className='md:py-5 py-4'>
        <h1 className='font-bold md:text-3xl 2xl:text-4xl text-2xl 3xl:text-5xl 4xl:text-6xl text-center ' style={{ color: '#2C041C' }}>Our Latest Blogs</h1>
        <div className='hidden sm:block'>
          <Carousels />
        </div>
        <div>
          <Blog />
        </div>
      </div>
    </div>
  )
}

export default News;