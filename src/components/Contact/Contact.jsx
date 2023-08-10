import React from "react";
import './Cont.css';
import emailjs from 'emailjs-com';
import  { useRef } from 'react';
const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3mxhskc', 'template_2if2cra', form.current, 'ZT4qrlPaMluNHyxLc')
        e.target.reset()

    };


    return (
        <section id={"Contact"} className="position-relative py-4 py-xl-5">
            <div className="container position-relative">
                <div className="row">
                    <div className="col">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23989.81794243858!2d36.31323744474742!3d41.2712743694441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4087d87f84ef2cf9%3A0xb601b63f03548d3e!2zNTUwNzAgxLBsa2FkxLFtL1NhbXN1bg!5e0!3m2!1str!2str!4v1691302932760!5m2!1str!2str"
                            width="100%" height="100%" style={{border:"0", minHeight:"400px"}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div>
                            <form className="p-3 p-xl-4" ref={form} method="post" onSubmit={sendEmail}>
                                <h4 className="font-weight-bold">Contact us</h4>
                                <p className="text-muted">Eros ligula lobortis elementum amet commodo ac nibh ornare, eu
                                    lobortis.</p>
                                <div className="mb-3"><label htmlFor="name">Name</label><input id="name"
                                                                                               className="form-control"
                                                                                               type="text" name="name"/>
                                </div>
                                <div className="mb-3"><label htmlFor="email">Email</label><input id="email"
                                                                                                 className="form-control"
                                                                                                 type="email"
                                                                                                 name="email"/></div>
                                <div className="mb-3"><label htmlFor="message">Message</label><textarea id="message"
                                                                                                        className="form-control"
                                                                                                        name="message"
                                                                                                        rows="6"></textarea>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
