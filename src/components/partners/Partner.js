import React from 'react'
import "./partner.css"
import client from "../../assets/client-01.png"

function Partner() {
  return (
    <div id='partner' className='p-1 w-100 d-flex align-items-center justify-content-center'>
        <div className=" d-flex align-items-center justify-content-center flex-wrap gap-2 gap-sm-4">
           <img src={client} alt="" className='client'style={{width: "140px"}}/>
           <img src={client} alt="" className='client'style={{width: "140px"}}/>
           <img src={client} alt="" className='client'style={{width: "140px"}}/>
           <img src={client} alt="" className='client'style={{width: "140px"}}/>
           <img src={client} alt="" className='client'style={{width: "140px"}}/>
           <img src={client} alt="" className='client'style={{width: "140px"}}/>
        </div>
    </div>
  )
}

export default Partner