import React from 'react'
import { Link } from 'react-router-dom'
import "./ImagePage.css"

function ImagePage() {
  return (
    <div className='image_page'>
      <img src={require("./../Images/migrate-to-libyanSpider 1.png")} alt="" className='img-fluid mt-5 ' />
    </div>
  )
}

export default ImagePage
