import React, {useState, useEffect, useRef} from 'react';
import DropDetail from './dropdowndetail';
import Optioncom from "./optionkey";


export default function Tasks ({event, formData, setFormData, index}){

  
    const [toggleDetails, setToggleDetails] = useState(false)


      // Ref to hold a reference to the element to scroll from
      const taskRef = useRef(null);
    
    function handleToggle (){

      setToggleDetails(prev => !prev)


        // if(!toggleDetails){

        //   window.scrollTo({top: elementPosition + 9 * window.innerHeight / 16, behavior: 'smooth' });
        // }
      

     
          
    }
    useEffect(() => {
      if (taskRef.current) {
        taskRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, [taskRef]);
  

  
      // useEffect(() => {

      //     // Get the position of the element to scroll from
      //     const elementPosition = scrollFromRef.current.offsetTop;
    
      //     // Scroll down by 5rem from the element's position
      //     if(toggleDetails){

      //       window.scrollTo({ top: elementPosition + 9 * window.innerHeight / 16, behavior: 'smooth' });
      //     }
      // // console.log(toggleDetails)
      // },[!toggleDetails] )
    

    return(
        <>
         <div ref={taskRef} id='expand' onClick={handleToggle} className={`task-item ${toggleDetails ? "expanded" : ""} mb-4 task2`}>
            <div className={`taskk  ${toggleDetails ? "my-[1rem]" : ""}`}>

              <i className="fa-sharp fa-regular fa-calendar-days"></i>
              <div className="task-description">
              <p className={`taskName ${toggleDetails && " bg-[#1a2824] items-center text-center p-[10px] rounded-[15px] text-white"}`}>{event.name}</p>
            </div>

              <Optioncom formData={formData} setToggleDetails={setToggleDetails} setFormData={setFormData} event={event} index={index} />
              </div>
              <DropDetail  toggleDetails={toggleDetails} setToggleDetails={setToggleDetails}  event={event} />
              </div >

        </>
    )
}