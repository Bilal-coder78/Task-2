import React from 'react'
import { IoTrashBinSharp } from "react-icons/io5";
import { FaChargingStation } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { FaArchway } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";

function Service() {
  return (
    <>
      <div id='service' className='container h-auto mt-5 mb-4'>

        <div className="row p-2 gap-lg-4 d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-12 col-lg-5 shadow rounded h" style={{height:"180px",minHeight:"130px"}}>
            <div className="box-content d-flex align-items-center justify-content-center gap-2 h-100">
              <div className="logo1 text-success p-2"><IoTrashBinSharp style={{fontSize:"4rem"}}/></div>
              <div className="text-content d-flex flex-column gap-md-2">
                <h2 className='pt-3 fw-bold fs-4'>CSS Templates</h2>
                <p className='pb-3 fw-light'>TemplateMo website is the best for you to explore and download free website.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-5 shadow rounded h"  style={{height:"180px",minHeight:"130px"}}>
            <div className="box-content d-flex align-items-center justify-content-center gap-2 h-100">
              <div className="logo1 text-success p-2"><FaCloud style={{fontSize:"4rem"}}/></div>
              <div className="text-content d-flex flex-column gap-md-3">
                <h2 className='pt-5 pt-sm-3 fw-bold fs-4'>HTML5 Web Pages</h2>
                <p className='pb-2 pb-sm-3 fw-light'>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-2 gap-lg-4 d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-12 col-lg-5 shadow rounded h"  style={{height:"180px",minHeight:"130px"}}>
            <div className="box-content d-flex align-items-center justify-content-center gap-1 gap-sm-2 h-100">
              <div className="logo1 text-success p-2"><FaChargingStation style={{fontSize:"4rem"}}/></div>
              <div className="text-content d-flex flex-column gap-md-3">
                <h2 className='pt-5 fw-bold fs-4'>Responsive Designs</h2>
                <p className='pb-3 fw-light'>All of our CSS templates are 100% free to use for commercial or business websites.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-5 shadow rounded h"  style={{height:"180px",minHeight:"130px"}}>
            <div className="box-content d-flex align-items-center justify-content-center gap-1 gap-sm-2 h-100">
              <div className="logo1 text-success p-2"><FaSuitcase style={{fontSize:"4rem"}}/></div>
              <div className="text-content d-flex flex-column gap-md-3">
                <h2 className='pt-3 fw-bold fs-4'>Mobile and Tablet ready!</h2>
                <p className='fw-light'>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-2 gap-lg-4 d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-12 col-lg-5 shadow rounded h"  style={{height:"180px",minHeight:"130px"}}>
            <div className="box-content d-flex align-items-center justify-content-center gap-2 h-100">
              <div className="logo1 text-success p-2"><FaArchway style={{fontSize:"4rem"}}/></div>
              <div className="text-content d-flex flex-column gap-md-3">
                <h2 className='pt-3 fw-bold fs-4'>Fast Customer Support</h2>
                <p className='pb-2 fw-light'>Do not be hesitated to contact us if you have any question or concern about our.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-5 shadow rounded h"  style={{height:"180px",minHeight:"130px"}}>
            <div className="box-content d-flex align-items-center justify-content-center gap-2 h-100">
              <div className="logo1 text-success p-2"><FaPuzzlePiece style={{fontSize:"4rem"}}/></div>
              <div className="text-content d-flex flex-column gap-md-3">
                <h2 className='pt-5 pt-sm-3 fw-bold fs-4'>Fully Customizable</h2>
                <p className='pb-1 pb-sm-3 fw-light'>If you have any idea or suggestion about new templates, feel free to let us know.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Service
