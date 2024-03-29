import React, {useState, useEffect} from 'react';



export default function ListTask({listTaskDetail, setListTaskDetail}){
    


    const style={
        // height: "80vh",
        width: " 80vw",
        position: "fixed",
        top: "10vh",
        left: "10vw",
        zIndex: "5",
        display: "flex",
        alignItems: "",
        padding: "0 2rem 1rem",
        flexDirection: "column",
        overflow: "hidden",
        // transform: "scale(1)"

    }
    const deets = {
        height: "",
        margin: "0rem auto 0.5rem",
        backgroundColor: "#1a2824",
        alignItems: "center",
        padding: "0px",
        borderRadius: "15px",
        width: "80%",
        color: "#FFFFFF",
        textAlign: "center",
    
    }
    const divStyle =  "border-b border-[#29302e83] mb-1 pb-1 "
    

    const closeDetail = (e) => {
        setListTaskDetail(null);
    };
    
    const handlePropagation = (e) => {
        // Prevent the click event from propagating
        e.stopPropagation();
      }
    
      

    return(
        <>
        {listTaskDetail && (<div style={style} onClick={handlePropagation}  className=" z-20 relative bg-slate-100">
            
        <i onClick={closeDetail}   className=" cursor-pointer fa-solid flex flex-row-reverse m-2 mt-[2rem] text-[1.5rem] fa-xmark"></i>
               <div className={divStyle}> Name <br/>
                 <p style={deets}>{listTaskDetail.name}</p></div>
                 <div className={divStyle}>Date <br />
                <p style={deets}>{listTaskDetail.date}</p>
                 </div>
                 <div className={divStyle}> Start Time <br />
                <p style={deets}>{(listTaskDetail.startTime)}</p>
                 </div>
                 <div className={divStyle}>End Time <br />
                <p style={deets} >{(listTaskDetail.endTime)}</p>
                 </div>
                 <div >

                <label htmlFor="descript">Description</label>
                <p style={deets} id="descript">{listTaskDetail.description}</p>
                 </div>
              </div>)}
        </>
    )
}