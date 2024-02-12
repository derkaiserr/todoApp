import React, {useState} from "react";



export default function Detail ({event, toggleDetail, setToggleDetail, listDetail}) {

    const style={
        // height: "80vh",
        width: " 80vw",
        position: "fixed",
        top: "5vh",
        left: "10vw",
        zIndex: "5",
        display: "flex",
        alignItems: "",
        padding: "0 2rem 1rem",
        flexDirection: "column",
        overflow: "hidden"

    }
    const deets = {
        height: "",
        margin: "0.4rem auto 1rem",
        backgroundColor: "#1a2824",
        alignItems: "center",
        padding: "10px",
        borderRadius: "15px",
        width: "80%",
        color: "#FFFFFF",
        textAlign: "center",
    
    }
    const divStyle =  "border-b border-[#29302e83] mb-2 "
    const handlePropagation = (e) => {
        // Prevent the click event from propagating
        e.stopPropagation();
      }
    


    return(
        <>
        {(toggleDetail ) && (<div style={style} onClick={(e) => {
            setToggleDetail(true)
            // handlePropagation(e)
            }}  className=" relative bg-slate-100">
            
        <i onClick={(e) => {
            setToggleDetail(false)
            handlePropagation(e)
        }
        
        } className="fa-solid flex flex-row-reverse m-2 mt-[2rem] text-[1.5rem] fa-xmark"></i>
               <div className={divStyle}> Name <br/>
                 <p style={deets}>{(event && event.name) }</p></div>
                 <div className={divStyle}>Date <br />
                <p style={deets}>{(event && event.date) }</p>
                 </div>
                 <div className={divStyle}> Start Time <br />
                <p style={deets}>{(event && event.startTime) }</p>
                 </div>
                 <div className={divStyle}>End Time <br />
                <p style={deets} >{(event && event.endTime) }</p>
                 </div>
                 <div >

                <label htmlFor="descript">Description</label>
                <p style={deets} id="descript">{(event && event.description) }</p>
                 </div>
              </div>)}
        </>
    )
}