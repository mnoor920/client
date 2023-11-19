import React from 'react'
import ProductImg from '../../assets/images/home/product_img.jpg'

const ServiceCard = ({ img, title }) => {
    return (
        <div className="product_card">
            <div className="product_img">
                <img src={img ? img : ProductImg} alt="" />
            </div>
            <div className="over_lay">
                <div className="text_section">
                    <h2>
                        {title ? title : "Ac Cleaning"}

                    </h2>
                    <button>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard