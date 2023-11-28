import React from "react";
import tileLogo from "./Images/tileLogo.svg"

import "./Home.css"

import {Link} from "react-router-dom"

export default function Home({formData}){

    const myStyle = {
        margin: "2rem 2rem 15rem"


    }
 
  // console.log({formData})


 
    return(
        <div style={myStyle}>
          <div className="first-icons">

        <i className="fa-solid  fa-bars-staggered"></i>
   <i className="fa-solid user-icon fa-user"></i>
          </div>
          <div className="welcome">

    <p>Good day, User</p>
    <p>Have a nice day</p>
          </div>
    <div className="buttonz">
      <button className="one">My Tasks</button>
      <button className="two">In-Progress</button>
      <button className="three">Completed</button>
    </div>

    <div className="tiles">
      <div className="tile tile-one"><div className="tileHead">
      <img src={tileLogo} alt="" />
      <p>Project 1</p>
      </div>
      
      <p>Front-End Development</p>
      <p className="date">May 19, 2023</p>
      </div>
      <div className="tile tile-two">
      <div className="tileHead">
      <img src={tileLogo} alt="" />
      <p>Project 1</p>
      </div>
      
      <p>Front-End Development</p>
      <p className="date">May 19, 2023</p>
      </div>
      <div className="tile tile-three">
        <div className="tileHead">
      <img src={tileLogo} alt="" />
      <p>Project 1</p>
      </div>
      
      <p>Front-End Development</p>
      <p className="date">May 19, 2023</p>
      </div>
      <div className="tile tile-four">
        <div className="tileHead">
      <img src={tileLogo} alt="" />
      <p>Project 1</p>
      </div>
      
      <p>Front-End Development</p>
      <p className="date">May 19, 2023</p>
      </div>
      <div className="tile tile-five">
        <div className="tileHead">
      <img src={tileLogo} alt="" />
      <p>Project 1</p>
      </div>
      
      <p>Front-End Development</p>
      <p className="date">May 19, 2023</p>
      </div>
      
    </div>


    <div id="tasks">Tasks</div>
    <div className="flex flex-col-reverse ">

      {formData.map((task, index) => {
        
        return (
          
          <div key={index} className="  tasks">
            {task.name  &&

            <div className="task task1">
      <i className="fa-sharp fa-regular fa-calendar-days"></i>
            <div className="task-description">
              <p className="taskName">{task.name}</p>
            </div>
      <i className="fa-solid fa-ellipsis-vertical"></i>
            
          </div>
            }
          </div>
        );
      })}

      </div>
    

    

        </div>
    )
}