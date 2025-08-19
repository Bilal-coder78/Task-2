import React from 'react'
import "./testimonial.css"
import girl from "../../assets/calculator-image.png"

function Testimonial() {
  return (
    <div id='testi'>
        <div class="image-sec">
            <img src={girl} alt="" className='image-girl'/>
        </div>
        <div class="form-sec">
            <h3>Your Freedom</h3>
            <h2>Get A Financial Plan</h2>
            <form action="" className='form'>
                <div class="sec1">
                <label >Your Name</label>
                <input type="text"/>
                <label >Your Email</label>
                <input type="email"/>
                </div>
                <label for="">Subject</label>
                <input type="text"/>
                <label for="">Your Reason</label>
                <select name="" id="">
                    <option value="">Choose an option</option>
                    <option value="">Online banking</option>
                    <option value="">Financial Control</option>
                    <option value="">Yearly Profit</option>
                    <option value="">Crypto investment</option>
                </select>
                <button type="submit" className='btn-nav submit-btn'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Testimonial