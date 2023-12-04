import React, {useState, useEffect} from "react";
import Image from "./Images/Image.webp";
export default function Menulist () {
    
    const [isOpen, setIsOpen] = useState(false);
const handleTouch = (e) => {


    if(e.touches[0].clientX > window.innerWidth - 350){
        setIsOpen(!isOpen);
    }
}
    return(

      <div   className={`slide-in-container z-20 w-[70vw] bg-white h-[100vh] ${isOpen ? 'open' : ''}`} onTouchStart={handleTouch}>
        <div>
            <img src={Image} alt="" />
            <p>About</p>
        </div>
      </div>
    )
}