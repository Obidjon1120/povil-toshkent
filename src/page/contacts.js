import React from 'react';
import {IoMdCall} from 'react-icons/io'
import {GoMail} from 'react-icons/go'
import {MdLocationOn} from 'react-icons/md'
import {FaFacebook, FaInstagramSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AvForm, AvField} from 'availity-reactstrap-validation'

const Contacts = () => {
    return (
        <div className="contacts w-75 m-auto position-relative">
            <h1 className="contacts-rotate">Contacts</h1>
            <div>
                <h1>Contact us</h1>
                <p>let's get to the nex level together</p>
            </div>
            <div className="d-flex justify-content-between">
                <div className="font-size">
                    <AvForm className="w-100">
                        <AvField type="text" label="Full name" name="name" placeholder="Enter first name" className="input"/>
                        <AvField type="text" label="Email" name="email" placeholder="Enter your email" className="input"/>
                        <AvField type="text" label="how can we help?" name="help" placeholder="Your message" className="input height"/>
                        <button className="btn btn-danger">Send</button>
                    </AvForm>
                </div>
                <div >
                    <a href="tel: +1(647)-563-9114" className="d-flex p-2 text-decoration-none text-light">
                        <IoMdCall className="m-1"/>
                        <p className="m-0">+1(647)-563-9114</p>
                    </a>
                    <a href="mailto:lead@gmail.com" className="d-flex p-2 text-light text-decoration-none">
                        <GoMail className="m-1"/>
                        <p className="m-0">lead@gmail.com</p>
                    </a>
                    <a href="https://maps.google.com/maps?q=41.281506,69.170389&ll=41.281506,69.170389&z=16" className="d-flex p-2 text-light text-decoration-none">
                        <MdLocationOn className="m-1"/>
                        <p className="m-0">Margaretenstraße 70/3, 1050 Vienna, Austria</p>
                    </a>
                    <div className="d-flex p-2">
                        <div className="border hover-card p-4 m-2">
                            <h3>Become a client</h3>
                            <p>business@LEAD.com</p>
                            <div className="chiziq"></div>
                        </div>
                        <div className="p-4 m-2">
                            <h3 className="font-family">FOLLOW US</h3>
                            <div className="d-flex">
                                <AiFillLinkedin className="fs-1 m-2"/>
                                <FaFacebook className="fs-1 m-2"/>
                                <FaInstagramSquare className="fs-1 m-2"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex p-2">
                        <div className="border hover-card p-4 m-2">
                            <h3>Become a client</h3>
                            <p>business@LEAD.com</p>
                            <div className="chiziq"></div>
                        </div>
                        <div className="border hover-card p-4 m-2">
                            <h3>JOIN LEAD TEAM</h3>
                            <p>business@LEAD.com</p>
                            <div className="chiziq"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contacts;