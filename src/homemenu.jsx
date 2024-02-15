import React, {useState, useEffect} from "react";
import Image from "./Images/Image.webp";
import aboutSvg from "./Images/about.png"
import AboutMe from "./AboutMe";    
import useClickOutside from "../hooks/useClickOutside";


export default function Menulist ({moveBars, setMoveBars}) {
    const [isOpen, setIsOpen] = useState(false);
// const handleTouch = (e) => {


//     if(e.touches[0].clientX > window.innerWidth - 350){
//         setIsOpen(!isOpen);
//     }

// }


const turnOff = () => {
    setMoveBars(false)
}


const [about, setAbout] = useState(false)

const closeAbout = () => {


    setAbout(false);
    
    
};


const dropdownRef = useClickOutside(closeAbout);

const toggleAbout = () => {
    setMoveBars(false)
    setAbout(true)
}
    return(

      <div   className={` left-[-40vw] top-0 z-20 w-[40vw] bg-white h-[100vh] slide-in-container ${moveBars ? 'open' : ''}`} >
        <i onClick={turnOff} className="fa-solid absolute  text-2xl p-2 mt-[0.4rem] ml-[8rem] fa-xmark"></i>
        <div onClick={toggleAbout} ref={dropdownRef} className="grid bg-[#1a2824] text-white grid-cols-2 py-[1rem] my-[9.6rem] px-[2rem] items-center gap-6 ">
            <img src={aboutSvg} className="w-[1.5rem]" alt="" />
            <p>About</p>
        </div>
        <AboutMe about={about} setAbout={setAbout} />
        <div className={about ? "absolute w-[120vw] h-[102vh] z-[2] bg-[#1a2824]/75 top-0 left-[30vw]" : "none"}></div>
      </div>
    )
}