import React from "react";




function CharacterCard( props ) {
    return (
        <div className="card" onClick={()=> {props.clicked(props.id); props.adding(props.id)}}>
            <img className="card-img responsive-img" src={props.url}  alt="thor" />
           

      
        </div>
    )
    }

export default CharacterCard