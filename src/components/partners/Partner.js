import React from 'react'
import "./partner.css"
import client from "../../assets/client-01.png"

function Partner() {
  return (
    <div id='partner'>
        <div class="partner-box">
           <img src={client} alt="" className='client'/>
           <img src={client} alt="" className='client'/>
           <img src={client} alt="" className='client'/>
           <img src={client} alt="" className='client'/>
           <img src={client} alt="" className='client'/>
           <img src={client} alt="" className='client'/>
        </div>
    </div>
  )
}

export default Partner