import React, {useState, useEffect} from "react";
import tileLogo from "./Images/tileLogo.svg"
import Menulist from "./homemenu";
import OptionKey from "./optionkey";
import EventTile from "./EventTile";
import useClickOutside from "../hooks/useClickOutside";

import "./Home.css"

import {Link} from "react-router-dom"

export default function Home({formData, setFormData, markAsCompleted, setComplete}){

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
      ((event.date === formattedDate) && (event.completed === false))
    
    );

    const completedTasks = formData.filter((event) =>
    new Date(event.date) < new Date()
    )

    const homeTasks = formData.filter((event) =>
    new Date(event.date) > new Date()
    )



    const [inputDate, setInputDate] = useState('');
    const [result, setResult] = useState('');
  
    const handleDateChange = (event) => {
      setInputDate(event.target.value);
    };
  
    const compareDates = () => {
      const inputDateTime = new Date(inputDate).setHours(0, 0, 0, 0);
      const todayDateTime = new Date().setHours(0, 0, 0, 0);
  

      if (inputDateTime < todayDateTime) {
        setResult('The input date is before today.');
      } else if (inputDateTime > todayDateTime) {
        setResult('The input date is after today.');
      } else {
        setResult('The input date is today.');
      }
      // console.log(todayDateTime)
    };

    const inProgress = formData.filter((event) => { 
      // Assuming event.date is in the format "DD/MM/YYYY"
      // const [day, month, year] = event.date.split('/').map(Number);
      // const inputDateTime = new Date(year, month - 1, day); // Month is 0-based in JavaScript
      // const todayDateTime = new Date();
    
      // // Set the time to the beginning of the day for accurate date comparison
      // inputDateTime.setHours(0, 0, 0, 0);
      // todayDateTime.setHours(0, 0, 0, 0);
      // return inputDateTime >= todayDateTime


       return event.completed === false
    })

    const completedTask = formData.filter((event) => event.completed === true
    );
    
console.log(completedTask)
console.log(inProgress)
console.log(formData)

// console.log(formData.map((event) => event.progress))
const closeMenu = () => {
  setMoveBars(false);
}
const dropdownReff = useClickOutside(closeMenu);

function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

// Example usage
const greeting = getGreeting();

 
    return(
        <div  className={moveBars ? "overflow-hidden" : "overflow"} style={myStyle}>
          <div className="first-icons">

        <i ref={dropdownReff} onClick={() => setMoveBars(true)} className={` ${moveBars ? "menu-bar" : "" } fa-solid p-[0.2rem] fa-bars-staggered`}></i>
   {/* <i className="fa-solid user-icon fa-user"></i> */}
          </div>
         {<Menulist moveBars={moveBars} setMoveBars={setMoveBars}/>}
          <div className="welcome">



    <p className="">{greeting}, User</p>
    <p>Have a nice day</p>
    
          </div>
    <div className="buttonz">
      {buttonDem.map((button, index) => {return(
        <button onClick={() => handleButtons(button)} className={`   ${button.class === holdButton ? "bg-[#1a2824] text-white" : "bg-white text-[#1a2824]"}`} key={index}>{button.ht}</button>
     ) })}
    
    </div>

    <div className="tiles">
  {(holdButton === "one") &&(
    eventsForSelectedDate != 0 ? (
    eventsForSelectedDate.map((event, index) => (
      <EventTile event={event} key={index} />
    ))) :   <p className="p-4 text-[#263a35] text-[1.4rem] ">No Available Tasks!</p>)
  }

  {(holdButton === "three") &&(
    completedTask !== 0 ? (
         completedTask.map((event, index) => (
     <EventTile event={event} key={index} />
    ))) :   <p className="p-4 text-[#263a35] text-[1.4rem] ">No Available Tasks!</p>)
  }
  {(holdButton === "two") && (
    inProgress.length !== 0 ? (
    inProgress.map((event, index) => (
      <EventTile event={event} key={index} />
    ))) :  (<p className="p-4 text-[#263a35] text-[1.4rem] ">No Available Tasks!</p>))
  }


</div>



    <div id="tasks">All Tasks</div>
    <div className="flex flex-col-reverse ">

      {
      //  homeTasks.length === 0 ? (
      //     <p className="p-4 text-[#263a35] text-[1.4rem] ">No Available Tasks!</p>
      //     ) :    

      formData.length > 0 ? (
            formData.map((task, index) => {
        
        return (
          
          <div key={index} className="  tasks">
            {task.name  &&

            <div className="task relative task1">
             {task.completed === true && <div className="absolute bg-[#1a2824]  right-[0] rounded-se-[15px] text-white text-[11px] shadow-xl px-2 py-[4px] rounded-es top-0 ">Completed</div>}
      <i className="fa-sharp fa-regular fa-calendar-days"></i>
            <div className="task-description">
              <p className="taskName">{task.name}</p>
            </div>
      <OptionKey setToggleDetails={setToggleDetails} markAsCompleted={markAsCompleted} setComplete={setComplete} toggleDetails={toggleDetails} setFormData={setFormData} formData={formData} event={task} />
            
          </div>
            }
          </div>
        );
      })) :   <p className="p-4 text-[#263a35] text-[1.4rem] ">No Available Tasks!</p>}

      </div>
    

    

        </div>
    )
}
