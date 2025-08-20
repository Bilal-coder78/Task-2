import React, { useState } from 'react'
import "./About.css"
import { Link } from 'react-scroll'

function About() {
    const [activeClass,setactiveClass] = useState("Web-content")
    return (
        <div id='about'>
            <div className="heading-content">
                <h3>ABOUT US</h3>
                <h2>Know Us Better</h2>
            </div>
            <div className="overall-about">
            <div className="all-sections">
            <div className="btn-sections">
                <Link activeClass="active" to='web-con' spy={true} smooth={true} duration={500}><button onClick={()=>{
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
                {activeClass==="Web-content" && (<div className="Web-content" id='web-con'>
                    <table>
                        <thead>
                            <tr>
                                <th>Project Title</th>
                                <th>Budget</th>
                                <th>Deadline</th>
                                <th>Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='edit'>Website Redisgn</td>
                                <td>$1500 to $2200</td>
                                <td>2025 Aug 10</td>
                                <td>Web Biz</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Website Renovation</td>
                                <td>$2500 to $3600</td>
                                <td>2025 Aug 8</td>
                                <td>Online Adds</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Marketing Plan</td>
                                <td>$2500 to $4200</td>
                                <td>2025 Aug 9</td>
                                <td>Web Biz</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>All New Website</td>
                                <td>$3000 to $6600</td>
                                <td>2025 Aug 5</td>
                                <td>Web Presence</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    )}
                {activeClass ==="Graphic-content" && ( <div className="Web-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Project Title</th>
                                <th>Budget</th>
                                <th>Deadline</th>
                                <th>Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='edit'>Graphic Redisgn</td>
                                <td>$500 to $800</td>
                                <td>2025 sep 10</td>
                                <td>One Media</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Digital Graphics</td>
                                <td>$1500 to $300</td>
                                <td>2025 sep 8</td>
                                <td>Second Media</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>New Artworks</td>
                                <td>$2200 to $4400</td>
                                <td>2025 sep 9</td>
                                <td>ArtWork Push</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Complex Arts</td>
                                <td>$1100 to $2400</td>
                                <td>2025 Aug 5</td>
                                <td>Media One</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
        )}
                {activeClass ==="Web-coding" && ( <div className="Web-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Project Title</th>
                                <th>Budget</th>
                                <th>Estimated</th>
                                <th>Technology</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='edit'>Backend Coding</td>
                                <td>$2000 to $5000</td>
                                <td>2025 Nov 10</td>
                                <td>PHP MySQL</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>New Web App</td>
                                <td>$1,500 to $3,000</td>
                                <td>2025 Nov 8</td>
                                <td>Python Programming</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Frontend Interactions</td>
                                <td>$3,000 to $6,000</td>
                                <td>2025 Nov 9</td>
                                <td>JavaScripts</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className='edit'>Video Creations</td>
                                <td>$1,800 to $4,400</td>
                                <td>2025 Nov 5</td>
                                <td>Multimedia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
        )}
            </div>
            <div className="about-content">
                <h3>Please tell us about your idea and how you want it to be</h3>
                <p>You are allowed to use this template for your websites. You are <strong>NOT allowed</strong>  to redistribute the template ZIP file on any other template websites.</p>
                <p>Thank you for downloading and using our templates. Please tell your friends about our website.</p>
                <div className="about-btn">Discover More</div>
            </div>
            </div>
        </div>
    )
}

export default About