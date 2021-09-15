import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDesktop, faFileCode, faFileExcel } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div>
            <div className="services">
                <h1 className="py-5">my services</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
        <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                    <h3>Web Development</h3>
                                    <p>I approach each project individually and always focus on the result.</p>
                                </div>
                            </div>
                            {/* - */}
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
        <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                    <h3>Graphic Design</h3>
                                    <p>I create an appealing and eye catching design for your product</p>
                                </div>
                            </div>
                            {/* - */}
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
        <div className="circle"><FontAwesomeIcon className="icon" icon={faBook} size="2x" /></div>
                                    <h3>Content Writer</h3>
                                    <p>I write the best content for your website</p>
                                </div>
                            </div>
                            {/* - */}
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
        <div className="circle"><FontAwesomeIcon className="icon" icon={faFileExcel} size="2x" /></div>
                                    <h3>Data Analyst</h3>
                                    <p>I do both qualitative and quantitative research analysis using SPSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Services
