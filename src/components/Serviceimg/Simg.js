import React from 'react'
// import "./Simg.css"
import img from "../../assets/cta-bg.jpg"

function Simg() {
  return (
    <div id='image-sec' className='w-100 d-flex align-items-center justify-content-evenly flex-column flex-md-row gap-2 my-5 p-4' style={{backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundRepeat:"no-repeat" , backgroundPosition:"center", height:"45vh"}}>
       <div className="w-50">
        <h2 className='text-center w-100 fs-2 fw-bolder text-white'>Business
          <em className='text-success'> Solution </em>
          and
          <em className='text-success'> Crypto </em>
          investment
        </h2>
       </div>
       <div className="d-flex align-items-center justify-content-center gap-3 w-30">
        <div className="btn btn-success px-4 py-2 fw-medium">Discover More</div>
            <div className="btn btn-danger px-4 py-2 fw-medium">Contact Us</div>
       </div>
    </div>
  )
}

export default Simg