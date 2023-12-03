import React from 'react'
import ServiceCard from '../../../global/components/serviceCard'
import { serviceData } from '../../../global/utils/data'
import { IoIosCellular } from "react-icons/io"
import Slider from "react-slick";

const OurServices = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <section className="services_section">
            <div className="page_width">
                <h2>
                    Explore our <span>Services </span>
                </h2>
                <div className="services_card">
                    <Slider {...settings} >
                        {serviceData.map((item, index) => {
                            return (
                                <div style={{ padding: '10px' }} key={index} >
                                    <ServiceCard
                                        img={item.img}
                                        title={item.title}
                                    />
                                </div>

                            )
                        })}
                    </Slider>
                </div>
            </div>
            <div className="">
                <IoIosCellular color='red' size={70} className='icons_wifi' />
            </div>

        </section>
    )
}

export default OurServices