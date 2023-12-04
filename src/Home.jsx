import React, {useState, useEffect} from "react";
import tileLogo from "./Images/tileLogo.svg"
import Menulist from "./homemenu";
import Optioncom from "./optionkey";

import "./Home.css"

import {Link} from "react-router-dom"

export default function Home({formData, setFormData}){

    const myStyle = {
        margin: "2rem 2rem 15rem"


    }
 
  // console.log({formData})

  const[moveBars, setMoveBars] = useState(false)
    

    const [toggleDetails, setToggleDetails] = useState(false)
    const [holdButton, setHoldButton] = useState("one")

    const buttonDem = [
      {class: 'one', ht: "Today's Tasks" },
      {class: 'two', ht: "In Progress" },
      {class: 'three', ht: "Completed" }
    ]

    const handleButtons = (button) => {
      setHoldButton(button.class)
      
    }
    

    let todaysDate = new Date ()
    console.log(todaysDate)



    const [selectedDate, setSelectedDate] = useState(new Date());
  

    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };
    
  
  function formatDate(date) {
    if (date != null) {
  
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return date.toLocaleDateString('en-GB', options);
    }
  }
  const formattedDate = formatDate(todaysDate);
  
  const eventsForSelectedDate = formData.filter((event) =>
      event.date === formattedDate
    );

    const completedTasks = formData.filter((event) =>
    new Date(event.date) < new Date()
    )

    const homeTasks = formData.filter((event) =>
    new Date(event.date) > new Date()
    )
   
 
    return(
        <div style={myStyle}>
          <div className="first-icons">

        <i onClick={() => setMoveBars(true)} className={` ${moveBars ? "menu-bar" : "" } fa-solid fa-bars-staggered`}></i>
   <i className="fa-solid user-icon fa-user"></i>
          </div>
          {/* <Menulist /> */}
          <div className="welcome">

    <p className="">Good day, User</p>
    <p>Have a nice day</p>
          </div>
    <div className="buttonz">
      {buttonDem.map((button, index) => {return(
        <button onClick={() => handleButtons(button)} className={`   ${button.class === holdButton ? "bg-[#1a2824] text-white" : "bg-white text-[#1a2824]"}`} key={index}>{button.ht}</button>
     ) })}
    
    </div>

    <div className="tiles">
  {(holdButton === "one") &&
    eventsForSelectedDate.map((event, index) => (
      <div key={index} className="tile tile-one">
        <div className="tileHead">
          <img src={tileLogo} alt="" />
          <p>{event.name}</p>
        </div>
        <p>{event.description}</p>
        <p className="date">{event.date}</p>
      </div>
    ))
  }

  {(holdButton === "three") &&
    formData.map((event, index) => (
      <div key={index} className="tile tile-one">
        <div className="tileHead">
          <img src={tileLogo} alt="" />
          <p>{event.name}</p>
        </div>
        <p>{event.description}</p>
        <p className="date">{event.date}</p>
      </div>
    ))
  }
</div>



    <div id="tasks">All Tasks</div>
    <div className="flex flex-col-reverse ">

      {
       homeTasks.length === 0 ? (
          <p className="p-4 text-[#263a35] text-[1.4rem] ">No Available Tasks!</p>
          ) :      homeTasks.map((task, index) => {
        
        return (
          
          <div key={index} className="  tasks">
            {task.name  &&

            <div className="task task1">
      <i className="fa-sharp fa-regular fa-calendar-days"></i>
            <div className="task-description">
              <p className="taskName">{task.name}</p>
            </div>
      <Optioncom setToggleDetails={setToggleDetails} toggleDetails={toggleDetails} setFormData={setFormData} formData={formData} event={task} />
            
          </div>
            }
          </div>
        );
      })}

      </div>
    

    

        </div>
    )
}
