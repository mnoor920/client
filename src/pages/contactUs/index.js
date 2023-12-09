import React, { useState } from 'react'

const ContactUS = () => {


    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')


    const formData = {
        first_name: fname,
        last_name: lname,
        email: email,
        phone_number: number
    }

    const submitData = () => {
        console.log("Data in form", formData)
        localStorage.setItem("form_data", formData);
        setEmail('')
        setFname('')
        setLname('')
        setNumber('')
    }


    return (
        <div>
            <div className="contact_us">
                <div className="page_width">
                    <div >
                        <div className="form_row">
                            <input type="text" placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
                            <input type="text" placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="number" placeholder='Phone Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <br />
                        <br />
                        <button onClick={submitData} >Send</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactUS