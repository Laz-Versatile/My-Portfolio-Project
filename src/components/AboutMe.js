import React from 'react';
import Author from '../Me.jpg';

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-3">
                    <img className="profile-img" src={Author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                    Hello! I am Lazarus aka Laz-Versatile from Nigeria. I am a front-end web developer and the technology I use is React JS, and also a professional graphic designer (Adobe: Illustrator, PhotoShop, XD, and InDesign).
I offer a wide range of services not limited to responsive websites that are displayed on all devices desktops and smartphones, logo design, corporate branding, product branding, content writer, and data analysis (SPSS).
First, my client’s satisfaction is my utmost desire. Before I begin developing your website, we will discuss all the details of your niche. I will survey your competitors and make a list of their advantages and weaknesses.
All these are necessary to enable me to create an appealing graphical user interface for your customers as my over five years’ experience as a graphic designer is a plus. I am all you need to kick start your organization.
Please go ahead to contact me and always feel free to ask any question as your satisfaction is my utmost desire.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
