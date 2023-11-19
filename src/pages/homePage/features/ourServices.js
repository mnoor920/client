import React from 'react'
import ServiceCard from '../../../global/components/serviceCard'
import { serviceData } from '../../../global/utils/data'
import { IoIosCellular } from "react-icons/io"

const OurServices = () => {

    console.log("Service Card", serviceData)

    return (
        <section className="services_section">
            <div className="page_width">
                <h2>
                    Explore our <span>Services </span>
                </h2>
                <div className="services_card">
                    {serviceData.map((item, index) => {
                        return (
                            <ServiceCard
                                img={item.img}
                                title={item.title}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="">
                <IoIosCellular color='red' size={70} className='icons_wifi' />
            </div>

        </section>
    )
}

export default OurServices