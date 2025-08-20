import React, { useState } from 'react'
import "./testi.css"
import { FaQuoteLeft } from "react-icons/fa";
import testi from "../../assets/testimonials-01.jpg"
import { BsDot } from "react-icons/bs";

function Testi() {
  const [activetesti,setactivetesti] = useState("testi-box")
  return (
    <div id='testi'>
      <div class="testi-headings">
        <h3>Testimonials</h3>
        <h1>What They Say</h1>
      </div>
      {activetesti === "testi-box" && (<div class="testi-box">
        <div class="testi-left">
          <h4 className='svg'><FaQuoteLeft /></h4>
          <p>
            “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
          </p>
          <div class="testi-head">
            <h4>David Eigenberg</h4>
            <h5>CEO of Mexant</h5>
          </div>
        </div>
        <div class="testi-image">
          <img src={testi} alt="" />
        </div>
      </div>
      )}
      {activetesti === "testi-box2" && (<div class="testi-box">
        <div class="testi-left">
          <h4 className='svg'><FaQuoteLeft /></h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis illum et iure error cupiditate nam impedit iusto repellat, tempore commodi.
          </p>
          <div class="testi-head">
            <h4>Andreiw Garfield</h4>
            <h5>CTO of Mexant</h5>
          </div>
        </div>
        <div class="testi-image">
          <img src={testi} alt="" />
        </div>
      </div>
      )}
      {activetesti === "testi-box3" && (<div class="testi-box">
        <div class="testi-left">
          <h4 className='svg'><FaQuoteLeft /></h4>
          <p>
            “Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.”
          </p>
          <div class="testi-head">
            <h4>Georgi Lopez</h4>
            <h5>Crypto Manager</h5>
          </div>
        </div>
        <div class="testi-image">
          <img src={testi} alt="" />
        </div>
      </div>
      )}
      <div class="dot-sec">
        <BsDot onClick={()=>{
          setactivetesti("testi-box")
        }}/>
        <BsDot onClick={()=>{
          setactivetesti("testi-box2")
        }}/>
        <BsDot onClick={()=>{
          setactivetesti("testi-box3")
        }}/>
      </div>
    </div>
  )
}

export default Testi