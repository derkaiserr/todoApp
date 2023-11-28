import React, {useState, useEffect} from "react";
import useClickOutside from "../hooks/useClickOutside";
import Detail from "./detail";




export default function optionKey ({setToggleDetails, formData, setFormData,  event, index }){
    
  const [optionsKey, setOptionsKey] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)
  const [toggleDetail, setToggleDetail] = useState(false)
  const closeMenu = () => {


        setOptionsKey(false);
        
        
  };
  function handleOptionKey() {
     setOptionsKey(!optionsKey);

     setToggleDetails(true);
    }
    
    const closeDetail = () => {
      setToggleDetail(false)
      
    } 
    const dropdownRef = useClickOutside(closeMenu);
    
    const dropdownReff = useClickOutside(closeDetail);
    
    const handleDetail = () => {
      setToggleDetail((prev) => {
        
        return !prev
      });
    }
    if(toggleDetail == true){
      document.body.style.overflow = 'hidden';
      // window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  if(toggleDetail == false){
    document.body.style.overflow = 'visible';
  }

  useEffect(() => {
    if (toggleDetail) {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [!toggleDetail]);
  
  const handleDelete = () => {
    //  setFormData((tasks) => {tasks.filter((item) => item !== event)})
    setToggleDetails(true);
  
   setFormData( formData.filter(item => item !== event));
  }


  
  

  

   

    return (
        <div >
        <i onClick={handleOptionKey} ref={dropdownRef}   className="relative cursor-pointer text-center fa-solid px-[0.8rem] py-2 fa-ellipsis-vertical"></i>
        
              <div   className= {`absolute mt-4 ${ optionsKey ? "scale-100 " : "scale-0 "} ease-linear transition duration-100   leading-10 border-solid border border-[#1a2824] rounded right-[5rem] w-[9rem] text-center bg-white` }>
                <p onClick={handleDetail} ref={dropdownReff} className="cursor-pointer hover:bg-slate-200 hover:rounded-t transition-all duration-150 ease-in">Details</p>
                <p onClick={handleDelete} className=" cursor-pointer hover:bg-slate-200 transition-all duration-150 ease-in-out hover:rounded-b text-red-700">Delete</p>
              </div>
              
              <Detail  event={event} toggleDetail={toggleDetail} setToggleDetail={setToggleDetail} index={index}  />
            
              <div className={toggleDetail ? "absolute w-[100vw] h-[102vh] z-[2] bg-[#1a2824]/75 top-0 left-0" : "none"}></div>
        </div>

    )
}