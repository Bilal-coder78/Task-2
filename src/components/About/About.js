import React, { useState } from 'react'
import "./About.css"
import { Link } from 'react-scroll'

function About() {
    const [activeClass,setactiveClass] = useState("Web-content")
    return (
        <div id='about' className='container mb-5 w-100 h-auto'>
            <div className="heading-content d-flex align-items-center justify-content-center flex-column">
                <h3>ABOUT US</h3>
                <h2>Know Us Better</h2>
            </div>
            <div className="overall-about row justify-content-center align-items-center">
            <div className="p-2 all-sections col-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div className="btn-sections mt-2 d-flex align-items-center justify-content-center gap-2">
                <Link ><button onClick={()=>{
                    setactiveClass("Web-content")
                }}>
                    Web Design
                </button></Link>
                <button onClick={()=>{
                    setactiveClass("Graphic-content")
                }}>
                    Graphics
                </button>
                <button onClick={()=>{
                    setactiveClass("Web-coding")
                }}>
                    Web Coding
                </button>
                </div>
                {activeClass==="Web-content" && (<div className="Web-content mt-4" id='web-con'>
                    <div >
                    <table>
                        <thead>
                            <tr>
                                <th>Project Title</th>
                                <th>Budget</th>
                                <th>Deadline</th>
                                <th className='d-none d-sm-block'>Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='edit'>Website Redisgn</td>
                                <td>$1500 to $2200</td>
                                <td>2025 Aug 10</td>
                                <td className='d-none d-sm-block'>Web Biz</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Website Renovation</td>
                                <td>$2500 to $3600</td>
                                <td>2025 Aug 8</td>
                                <td className='d-none d-sm-block'>Online Adds</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Marketing Plan</td>
                                <td>$2500 to $4200</td>
                                <td>2025 Aug 9</td>
                                <td className='d-none d-sm-block'>Web Biz</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>All New Website</td>
                                <td>$3000 to $6600</td>
                                <td>2025 Aug 5</td>
                                <td className='d-none d-sm-block'>Web Presence</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
    )}
                {activeClass ==="Graphic-content" && ( <div className="Web-content mt-4">
                    <div >
                    <table>
                        <thead>
                            <tr>
                                <th>Project Title</th>
                                <th>Budget</th>
                                <th>Deadline</th>
                                <th className='d-none d-sm-block'>Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='edit'>Graphic Redisgn</td>
                                <td>$500 to $800</td>
                                <td>2025 sep 10</td>
                                <td className='d-none d-sm-block'>One Media</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Digital Graphics</td>
                                <td>$1500 to $300</td>
                                <td>2025 sep 8</td>
                                <td className='d-none d-sm-block'>Second Media</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>New Artworks</td>
                                <td>$2200 to $4400</td>
                                <td>2025 sep 9</td>
                                <td className='d-none d-sm-block'>ArtWork Push</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Complex Arts</td>
                                <td>$1100 to $2400</td>
                                <td>2025 Aug 5</td>
                                <td className='d-none d-sm-block'>Media One</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            
        )}
                {activeClass ==="Web-coding" && ( <div className="Web-content mt-4">
                    <div >
                    <table>
                        <thead>
                            <tr>
                                <th>Project Title</th>
                                <th>Budget</th>
                                <th>Estimated</th>
                                <th className='d-none d-sm-block'>Technology</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='edit'>Backend Coding</td>
                                <td>$2000 to $5000</td>
                                <td>2025 Nov 10</td>
                                <td className='d-none d-sm-block'>PHP MySQL</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>New Web App</td>
                                <td>$1,500 to $3,000</td>
                                <td>2025 Nov 8</td>
                                <td className='d-none d-sm-block'>Python Programming</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Frontend Interactions</td>
                                <td>$3,000 to $6,000</td>
                                <td>2025 Nov 9</td>
                                <td className='d-none d-sm-block'>JavaScripts</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Video Creations</td>
                                <td>$1,800 to $4,400</td>
                                <td>2025 Nov 5</td>
                                <td className='d-none d-sm-block'>Multimedia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            
        )}
            </div>
            <div className="about-content col-12 col-lg-6 mt-2">
                <h3>Please tell us about your idea and how you want it to be</h3>
                <p>You are allowed to use this template for your websites. You are <strong>NOT allowed</strong>  to redistribute the template ZIP file on any other template websites.</p>
                <p>Thank you for downloading and using our templates. Please tell your friends about our website.</p>
                <div className="btn btn-success px-4 py-2 fw-medium">Discover More</div>
            </div>
            </div>
        </div>
    )
}

export default About