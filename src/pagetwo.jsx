import React, {useState, useEffect} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Optioncom from "./optionkey";
import Detail from "./detail";
import DropDetail from "./dropdowndetail";
import Tasks from "./tasks";
import { useNavigate } from 'react-router-dom';
import Newtask from "./NewTask";
import ListTask from "./listtaskdetail";


export default function Calendarr({formData, setFormData, setSavedNav}){
  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  

function formatDate(date) {
  if (date != null) {

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }
}
const formattedDate = formatDate(selectedDate);

const eventsForSelectedDate = formData.filter((event) =>
    event.date === formattedDate
  );

  const navigate = useNavigate()
  const back = () => {   
    navigate("/");
    setSavedNav("/")

  }

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);
  const[search, setSearch] = useState(false);
  const [listTaskDetail, setListTaskDetail] = useState(null)
  

  

  
  const handleSearch = () => {
    // Filter the formDataArray based on the searchQuery
    const filteredResults = formData.filter((event) => {
      const { name, date, startTime, endTime, description } = event;
      const lowerCaseQuery = searchQuery.toLowerCase();
      return (
        name.toLowerCase().includes(lowerCaseQuery) ||
        date.includes(lowerCaseQuery) ||
        startTime.includes(lowerCaseQuery) ||
        endTime.includes(lowerCaseQuery) ||
        description.toLowerCase().includes(lowerCaseQuery)
        );
      });
      setIsSearchInitiated(true)
        
      setSearchResults(filteredResults);
      setSearch(true)
    };

  const handleListOption = (result) => {
    setIsSearchInitiated(false)
    setListTaskDetail(result)
    // handleChange()
  }
  

  function handleChange (e){
    setSearchQuery(e.target.value)
    handleSearch()
  }

  const closeDetail = () => {
    setListTaskDetail(null);
  };

  useEffect(() => {
    // This effect will run after listTaskDetail has been updated
    console.log(listTaskDetail);
  }, [listTaskDetail]);


    return (
        <div onClick={() => {}} className="w-full   bg-[#c0c5c46e]  p-10 pb-[10rem]">

          <div className="calendarNav ">
        <i onClick={back} className="fa-regular fa-arrow-left"></i>
        <div className={`flex flex-row-reverse absolute right-10 -mt-2  transitSearch  gap-[1rem] ${!search ? " " : ""} items-center` }>

        <i onClick={handleSearch} className="fa-regular p-2 relative fa-magnifying-glass"></i>
        <input type="text" name="search" id="search" value={searchQuery}
        onChange={handleChange} className={`transitSearch outline-none border border-[#1a2824]/[0.3] ${search ? "w-[15.8rem] visible":" w-0"}   `} />
        </div>
        </div>
      <div onClick={() => {setSearch(search ? !search : search)}}>

      {(isSearchInitiated && searchQuery != '') &&  <ul className="absolute top-[3.7653rem] py-3 leading-[2.6rem] ml-10 w-[15rem] bg-white rounded-b-md">
        {searchResults.map((result, index) => (
          <li onClick={() =>        
            handleListOption(result)} className="pl-2 border-t-2" key={index}>{result.name}
         {(listTaskDetail === result) && <div className="absolute">
      <ListTask listTaskDetail={listTaskDetail} closeDetail={closeDetail}  setListTaskDetail={setListTaskDetail} />
      <div className={listTaskDetail ? "absolute w-[100vw] h-[102vh] z-[2] bg-[#1a2824]/75 top-0 left-0 -ml-10" : "none"}></div>
      </div>}
          </li> 
          
        ))}
      </ul>}
      

      
      <p onClick={closeDetail} className="cursor-pointer" > console</p>


          <button onClick={() => {navigate("../NewTask")
        setSavedNav("/NewTask")}} className=" mx-auto mt-12 flex items-center text-white rounded-full px-4 p-3 gap-3 bg-[#1a2824]"><i className="fa-regular text-white fa-plus"></i>Add Task</button>

        <div className="days flex flex-row mt-10 gap-3 items-center justify-center">

{/*        
     
       {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          className={ `selected  flex flex-col justify-center justify-items-center p-3 rounded-3xl gap-2 items-center ${selectedButton === button.id ? 'bg-[#1a2824] text-white':'bg-white text-[#1a2824]'}` }
        >
          <span>{button.label}</span>
          <span>{button.content}</span>
        </button>
      ))} */}
    
    <Calendar className={'mb-[2rem]'}
      value={selectedDate}
      onChange={handleDateChange}
      />
   
        </div>

        <p className="mt-6 mb-3">Daily Tasks</p>

        {eventsForSelectedDate.length === 0 ? (
          <p className="p-4 text-[#263a35] text-[1.4rem] ">No Available Tasks!</p>
      ) : (
        <div className="tasks">
          {eventsForSelectedDate.map((event, index) => (
            <div  key={index}>
             <Tasks event={event}  formData={formData} setFormData={setFormData} index={index}/>
              
              </div>
          ))}
          </div>
      )}
         
      </div>
        </div>
      );
    }
    
    
