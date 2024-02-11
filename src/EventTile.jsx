import React from 'react';
import tileLogo from "./Images/tileLogo.svg"


export default function EventTile ({event, index} ) {

    return(
        <div key={index} className="tile tile-one">
        <div className="tileHead">
          <img src={tileLogo} alt="" />
          <p className="tileName">{event.name}</p>
        </div>
        <p className="tileDescribe">{event.description}</p>
        <p className="date">{event.date}</p>
      </div>
    )
}