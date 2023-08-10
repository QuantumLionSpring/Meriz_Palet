import React from "react";
import Navs from "../components/Nav-icon/Nav-icon";
import Navbas from "../components/Nav/Nav";
import What from "../components/Whatsapp/what";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Opens from "../components/Opens/Opens";
import Finishs from "../components/Finishs/Finishs";


function Document() {
    return (
        <div>

            <What/>
            <Navs/>
            <Navbas/>
 <Opens/>

         <Finishs/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Document;
