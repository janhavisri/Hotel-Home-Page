import React,{useState} from 'react';
import '../stylesheets/header.css';
import Model from './model';

function Header() {
    const[isMobile,setIsMobile] = useState(false);
    const [modalOpen,setModalOpen] =useState(false);
 
    return(
<section className="header" id="home">
    <nav>
        <a href="" className="logo"><span>S</span>hicasa</a>
        <div className= {isMobile?"nav-links-mobile":"nav-links"} onClick={() => setIsMobile(false)}>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                {/* <li><a href="#about">About</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>         
        </div>
       <button className="mobile-menu-icon"
       onClick={()=> setIsMobile(!isMobile)}>
           {isMobile ?(<i className="fas fa-times"></i>)
           :(<i className="fas fa-bars"></i>)}
           </button>
    </nav>
    <div className="text-box">
        <h1>Welcome To Shicasa</h1>
        <p>Your Unforgotable Getaway.
        </p>
        <button  href="" className="openModalbtn" onClick={()=>{
            setModalOpen(true);
        }}>BOOK NOW</button>
        {modalOpen && <Model setOpenModal={setModalOpen}/>}
       
    </div>
        
        
</section>

)
}

export default Header;