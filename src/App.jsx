import React, {useEffect, useState} from "react";
import "./App.css"
import Home from "./Home";
import Calendarr from "./pagetwo";
import Newtask from "./NewTask";
import {Route, Routes} from 'react-router-dom';
import {Link} from "react-router-dom"
import OptionKey from "./optionkey";

export default function App(){


  const [complete, setComplete] = React.useState('');
  const [formDataArray, setFormDataArray] = useState([{
    id: 1,  
    name: "Take out",
    date: "01/12/2023",
      startTime: "12:00",
      endTime: "13:00",
      description: "Take out the trash",
      category: "Testing",
      completed: true
    },
    {
      id: 2,  
      name: "Go to school",
      date: "30/11/2023",
      startTime: "08:00",
      endTime: "08:30",
      description: "It's a new day, time to go to school",
      category: "Testing",
      completed:true,
    },
    {
      id: 3,  
      name: "Get it done",
      date: "02/02/2024",
      startTime: "12:00",
      endTime: "13:00",
      description: "Take out the bin",
      category: "Testing",
      completed: false
    },
    {
      id: 4,   
      name: "Pass your exams",
      date: "02/01/2015",
      startTime: "12:00",
      endTime: "13:00",
      description: "Take out the trash",
      category: "Testing",
      completed: true    }])


    let saveLocation = window.location.pathname;

  //   const saveLocation = useEffect(() =>{
  //     window.location.pathname
  //   }, [window.location.pathname])
  //   console.log(saveLocation)
  
   const clickNav = (link)  => {
      setSavedNav(link.to)
    
      
      
   }

  useEffect(() => {
    const handleLocationChange = () => {
      // Update saveLocation whenever the pathname changes
      saveLocation = window.location.pathname;
    };

    // Attach an event listener for location change
    window.addEventListener('popstate', handleLocationChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once

   const [savedNav, setSavedNav] = useState(saveLocation)


   const navLinks = [
    { to: '/', iconClass: 'fa-solid fa-house' },
    { to: '/NewTask', iconClass: 'fa-solid fa-circle-plus' },
    { to: '/pagetwo', iconClass: 'fa-regular fa-calendar' },
  ];


  const [completedEvents, setCompletedEvents] = useState([]);
  const markAsCompleted = (eventId) => {
    // Find the event in the list of all events
    const eventToUpdate = formDataArray.find((event) => event.id === eventId);

    // Update the completed status
    if (eventToUpdate) {
      eventToUpdate.completed = true;

      // Move the event to the completed events list
      setCompletedEvents((prevCompletedEvents) => [
        ...prevCompletedEvents,
        eventToUpdate,
      ]);

      // Update the state of all events
      setFormDataArray((prevAllEvents) =>
        prevAllEvents.map((event) =>
          event.id === eventId ? { ...event, completed: true } : event
        )
      );
    }}
  

    
    return(
      <>

<Routes>
        <Route path="/"   element={<Home formData={formDataArray} markAsCompleted={markAsCompleted} setComplete={setComplete} setFormData={setFormDataArray} setSavedNav={setSavedNav}/>} />
        <Route path="pagetwo" element={<Calendarr formData={formDataArray} setSavedNav={setSavedNav} setFormData={setFormDataArray} />} />
        <Route path="NewTask"    element={<Newtask setFormDataArray={setFormDataArray} complete={complete} setSavedNav={setSavedNav}/>} />
    
      </Routes>
    

    



<div className="mobileNav z-30">
  {navLinks.map((link, index) => (
    <Link
      key={index}
      
      className={`linkk`}
      to={link.to}
    >
      <i onClick={() => clickNav(link)} className={`fa-sharp  ${link.to === savedNav ? "bg-[#656e6e] rounded-[15px] p-3" : ''}  text-[#1a2824] z ${link.iconClass}`}></i>
    </Link>
  ))}
</div>
    </>
  )
} 