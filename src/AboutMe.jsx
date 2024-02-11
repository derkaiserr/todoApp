import React from 'react';




export default function AboutMe ({about, setAbout}) {



    const style={
        // height: "80vh",
        width: " 80vw",
        position: "fixed",
        top: "10vh",
        left: "10vw",
        zIndex: "5",
        display: "flex",
        alignItems: "",
        padding: "6rem 2rem 1rem",
        flexDirection: "column",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // transform: "scale(1)"

    }
    const deets = {
        height: "",
        margin: "0rem auto 0.5rem",
        backgroundColor: "#1a2824",
        alignItems: "center",
        padding: "5px 0",
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
        about &&
    <div style={style} className='fixed  bg-white top-[5vh] left-[10vw] py-[10rem] h-[80vh] w-[80vw] rounded'>
         <i onClick={() => {setAbout(false)}} class="fa-solid absolute  text-2xl p-2 mt-[0.4rem] top-0 right-2 ml-[8rem] fa-xmark"></i>
        <div className={divStyle}>
        <p style={deets}>Developer: Adeola Adebowale</p>
        </div>
        <div className={divStyle}>
        <p style={deets}>Twitter: @manyfacedG</p>
        </div>
        <div className={divStyle}>
        <p style={deets}>Github: <a href=""></a> github.com/derkaiserr</p>
        </div>
    </div>
    )
}


 function ListTask({listTaskDetail, setListTaskDetail}){
    


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
    
      useEffect(() => {
        // This effect will run whenever listTaskDetail changes
        // You can perform any actions here that depend on the updated state
        console.log('listTaskDetail changed:', listTaskDetail);
      }, [listTaskDetail]);

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