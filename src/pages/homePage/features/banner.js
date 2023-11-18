import React from 'react'
import BannerImg from '../../../assets/images/home/banner/banner.svg'

const Banner = () => {
    return (
        <section className="banner_section">
            <div className="page_width">
                <div className="banner_inner">
                    <div className="left_side">
                        <span className="badge">Best in Dubai</span>
                        <br />
                        <p className="welcome">Welcome To</p>
                        <h2>Home <span>Comfort</span></h2>
                        <p>
                            Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with
                            home comfort professional experts.
                        </p>
                        <div className="bottom_btn">
                            <button className="btn btn_1">Contact Us</button>
                            <button className="btn btn_2">Learn More</button>
                        </div>
                    </div>
                    <div className="right_side">
                        <div className="right_img">
                            <img src={BannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner