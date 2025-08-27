import React from 'react'
import "./testimonial.css"
import girl from "../../assets/calculator-image.png"
import cal from "../../assets/calculator-bg.jpg"

function Testimonial() {
  return (
    <div id='testimonial' className='vh-100 mt-3 mb-2 container-fluid d-flex align-items-center justify-content-center' style={{backgroundImage: `url(${cal})`, backgroundSize: "cover", backgroundRepeat:"no-repeat" , backgroundPosition:"center"}}>
        <div className="row">
        <div className="image-sec d-none d-md-block d-flex align-items-center justify-content-center col-md-6">
            <img src={girl} alt="" className='image-girl' style={{width: "99%"}}/>
        </div>
        <div className="form-sec col-md-6">
            <h3>Your Freedom</h3>
            <h2>Get A Financial Plan</h2>
            <form action="" className='form d-flex align-items-start justify-content-center flex-column'>
                <div className="sec1">
                <label >Your Name</label>
                <input type="text"/>
                <label >Your Email</label>
                <input type="email"/>
                </div>
                <label>Subject</label>
                <input type="text"/>
                <label>Your Reason</label>
                <select name="" id="">
                    <option value="">Choose an option</option>
                    <option value="">Online banking</option>
                    <option value="">Financial Control</option>
                    <option value="">Yearly Profit</option>
                    <option value="">Crypto investment</option>
                </select>
                <button type="submit" className='btn btn-danger mt-4'>Submit Now</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Testimonial