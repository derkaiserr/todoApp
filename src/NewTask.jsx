import React from "react";
import { useNavigate } from 'react-router-dom';
import tileLogo from "./Images/tileLogo.svg"
import "./NewTask.css"



export default function Newtask({setFormDataArray, setSavedNav, complete}){

    const navigate = useNavigate()

    const myStyle = {
        // padding: "2rem 2rem 15rem"
    }
 

    
        const [selectedOption, setSelectedOption] = React.useState(null);
      
        const options = ['Design', 'Meeting', 'Coding', 'BDE', 'Testing', 'Quick Call'];
      
        const handleOptionSelect = (option) => {
          if (selectedOption === option) {
            // Deselect the option if it's already selected
            setSelectedOption(null);
          } else {
            // Select the option if it's not selected
            setSelectedOption(option);
          }
        }

        const [nameInput, setNameInput] = React.useState('');
        const [startTime, setStartTime] = React.useState('');
        const [endTime, setEndTime] = React.useState('');
        const [date, setDate] = React.useState('');
        const [description, setDescription] = React.useState('');
        const [submittedValue, setSubmittedValue] = React.useState('');
       
        const handleInputChange = (event) => {
            // Update the state with the value of the input field
            setNameInput(event.target.value);
          
          };
          const handleDateChange  = (event) => {
            setDate(event.target.value);

          }
          const handlefirstTimeChange  = (event) => {
            setStartTime(event.target.value);

          }
          const handleSecTimeChange  = (event) => {
            setEndTime(event.target.value);

          }
          const handleDescriptionChange  = (event) => {
            setDescription(event.target.value);

          }

        function handleSubmit(event){
          event.preventDefault();
          
          if(date && nameInput){
            navigate("/") 
          setSavedNav("/");

            setFormDataArray((prev) => [...prev, {name: nameInput, startTime: startTime, endTime: endTime, date:formattedDate, description:description, category: selectedOption, completed: false}])
          }
        }

        
        
        const back = () => {   
          navigate("/");
          setSavedNav("/");

        }
        function formatDate(inputDate) {
          // Parse the original date string into a Date object
          const dateParts = inputDate.split('-');
          if (dateParts.length !== 3) {
            // If the date format is invalid, return the input as is
            return inputDate;
          }
        
          // Extract day, month, and year
          const year = dateParts[0];
          const month = dateParts[1];
          const day = dateParts[2];
        
          // Create the formatted date string
          const formattedDate = `${day}/${month}/${year}`;
        
          return formattedDate;
        }
        
        // Example usage:
        const formattedDate = formatDate(date);
        
        

    return(

    <div style = {myStyle}>
          
          
          
       

        <div className="first-part ">

        <div className="back-search w-[55%]">
        <i onClick={back} className="fa-solid fa-house"></i>
        <p>Create a Task</p>
        </div>

        <form id="myForm" onSubmit={handleSubmit} action="">
            <div className="identity">

            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" id="name" value={nameInput}  onChange={handleInputChange}/>
            <br />
            <label htmlFor="date">Date</label><br />
            <input type="date" name="date" onChange={handleDateChange} value={date} id="date" />
            </div>
        </form>
        </div>

        <div className="second-part">
            <div className="times">
                <div className="start-time timee">
                    <label htmlFor="time1">Start Time</label>
                    <input type="time" onChange={handlefirstTimeChange} value={startTime} name="time1" id="time1" />
                </div>
                <div className="end-time timee">
                    <label htmlFor="time2">End Time</label>
                    <input type="time" name="time2" onChange={handleSecTimeChange} value={endTime} id="time2" />

                </div>


            </div>

            <div className="description">
                <label className="describe" htmlFor="descript">Description</label>
                <textarea name="descript" id="descript" onChange={handleDescriptionChange} value={description} cols="30" rows="10"></textarea>
            </div>

                
               
            <div className="cat">
                <p className="category describe">Category</p>
                <div className="catboxes">
      {options.map((option) => (
          <button
          key={option}
          className={selectedOption === option ? 'selected bg-[#1a2824] buttons text-white' : ' buttons'}
          
          onClick={() => handleOptionSelect(option)}
        >
          {option}
        </button>))}
      
    
          </div>
            <button form="myForm" onSubmit={handleSubmit} className="submit bg-[#1a2824] text-white buttons" type="submit">Create Task</button>
            </div>

            

        </div>
        </div>
    )}
