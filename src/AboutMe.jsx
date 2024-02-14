import React from 'react';




export default function AboutMe ({about, setAbout}) {



    const style={
        // height: "80vh",
        width: " 80vw",
        position: "fixed",
        top: "5vh",
        left: "10vw",
        zIndex: "5",
        display: "flex",
        alignItems: "",
        padding: "6rem 2rem 1rem",
        flexDirection: "column",
        overflow: "hidden",
        display: "flex",
    
        justifyContent: "space-around",
        // transform: "scale(1)"

    }
    const deets = {
        height: "",
        margin: "0rem auto 0.5rem",
        backgroundColor: "#1a2824",
        alignItems: "center",
        padding: "20px 0",
        borderRadius: "15px",
        width: "90%",
        color: "#FFFFFF",
        textAlign: "center",
    
    }
    const divStyle =  " border-[#29302e83] mb-1 pb-1 "
    

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
        <a style={deets}  className='p-[4rem] w-[25rem]' target='_blank' href='https://twitter.com/ManyfacedG'>Twitter: @manyfacedG</a>
         <a style={deets} target='_blank' href="https://github.com/derkaiserr">Github: derkaiserr</a>
    </div>
    )
}

