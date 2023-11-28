import React, {useState} from 'react';



export default function DropDetail({event}){
   
    const style={
        // height: "80vh",
        // width: " 80vw",
       
        display: "flex",
        padding: "0 2rem 1rem",
        flexDirection: "column",
        backgroundColor: "transparent",
        marginTop: ""

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
    


    return(
        <>
        
        { (<div style={style}   className=" relative">
            
                  
                     <div className={divStyle}>Date <br />
                    <p style={deets}>{event.date}</p>
                     </div>
                     <div className={divStyle}> Start Time <br />
                    <p style={deets}>{event.startTime}</p>
                     </div>
                     <div className={divStyle}>End Time <br />
                    <p style={deets} >{event.endTime}</p>
                     </div>
                     <div >
    
                    <label htmlFor="descript">Description</label>
                    <p style={deets} id="descript">{event.description}</p>
                     </div>
                  </div>)}
        </>
    )
}