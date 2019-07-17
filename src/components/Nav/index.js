import React from "react";




function Nav(props) {
    return (
        <header>
            
        <nav  className="z-depth-0 ">
            <div className="nav-wrapper white lighten-3 ">

                <h4  className=" left black-text">Memory</h4>
                <h3 className="brand-logo center black-text">{props.msg ||"Incorrect"}</h3>
                <h4 className="black-text right"> Score: {props.score} | 
                {/* High Score: {props.topScore}  */}
                </h4>
            </div>
        </nav>

        </header>
    )
}
export default Nav;