import React from "react";
import Navs from "../components/Nav-icon/Nav-icon";
import About from "../components/About/About";
import Slide from "../components/Slider/Slide";
import URUN from "../components/urun/urun";


import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbas from "../components/Nav/Nav";
import What from "../components/Whatsapp/what";
import Opens from "../components/Opens/Opens";
import Finishs from "../components/Finishs/Finishs";
function Homepage() {
    return (
        <div >
            <What/>
            <Navs/>
            {/* Sadece bir tane Router etiketi kullanın */}

            <Navbas/>
            <Slide/>
            <URUN/>
            <br/>
            <Opens/>
            <About/>
            <br/>
           <Finishs/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Homepage;
