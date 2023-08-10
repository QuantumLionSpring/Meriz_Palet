import React from "react";
import './nav-icon.css';
import {AiOutlinePhone} from 'react-icons/ai'

import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
function Navs() {
return(
<nav className=" container Nav__container ">
    <ul className={"rows"}>
        <li style={{marginLeft:"1rem"}} className={"col-md-4"} ><AiOutlinePhone/> Phone:46454651489465153</li>

        <li className={"col-md-5"}><AiOutlineMail/>Email:meriz_palet55@gmail.com</li>
        <li className={"col-md-4"}><AiOutlineInstagram/>Instagram</li>
        <li className={"col-md-2"}><AiOutlineFacebook/>Facebook</li>

    </ul>
</nav>

)

}
export default Navs