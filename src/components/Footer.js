import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    RedditShareButton,
    RedditIcon
} from 'react-share';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Shop 22E Tonimas Plaza, High-Level, Makurdi, Benue State</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:08061500982">(+234)8061500982</a>
                        </div>
                        <div className="d-flex">
                            <p>lazversatile@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">AboutMe</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Testimonials</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://laz-versatile.github.io/My-Portfolio-Project/"}
                            quote={"FrontEnd Web Developer and Graphic Designer"}
                            hashtag="#javascript-react/ai/ps"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <WhatsappShareButton
                            url={"https://laz-versatile.github.io/My-Portfolio-Project/"}
                            quote={"FrontEnd Web Developer and Graphic Designer"}
                            hashtag="#javascript-react/ai/ps"
                            >
                                <WhatsappIcon className="mx-3" size={36}/>
                            </WhatsappShareButton>
                            <TwitterShareButton
                            url={"https://laz-versatile.github.io/My-Portfolio-Project/"}
                            quote={"FrontEnd Web Developer and Graphic Designer"}
                            hashtag="#javascript-react/ai/ps"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <LinkedinShareButton
                            url={"https://laz-versatile.github.io/My-Portfolio-Project/"}
                            quote={"FrontEnd Web Developer and Graphic Designer"}
                            hashtag="#javascript-react/ai/ps"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                            <RedditShareButton
                            url={"https://laz-versatile.github.io/My-Portfolio-Project/"}
                            quote={"FrontEnd Web Developer and Graphic Designer"}
                            hashtag="#javascript-react/ai/ps"
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyrights&copy;
                            {new Date().getFullYear()}&nbsp;Laz-Versatile | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
