import React, { useRef} from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Homepage from "../../Pages/Homepage";
import Foto from "../../Pages/Foto";
import Document from "../../Pages/Document";
import Blog from "../../Pages/Blog";
import SSSdocument from "../SSS/SSSdocument";
import SSS from "../../Pages/sss";

function Navbas() {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header className={"container"}>
            <Link to="/" element={<Homepage/>}>
                <img className="LOGOS" src="https://ik.imagekit.io/lgf1wyqnvg/slider2-5f915e4c18e82-6039e63316b21-605c89b265adf.jpeg?updatedAt=1690876035916" alt="gfdghfd" />
            </Link>
            <nav ref={navRef} className={"rows"}>
                <Link to='/Foto' element={<Foto/>} >Ürünlerimiz</Link>
                <Link to="/Document"  element={<Document/>}>Belgelerimiz</Link>
                <Link  to="/Blog" element={<Blog/>}>Blog</Link>

                <a  href="#Contact" >İletisim</a>
                <Link to="/SSS" element={<SSS/>}>S.S.S. </Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>













);
}

export default Navbas;
