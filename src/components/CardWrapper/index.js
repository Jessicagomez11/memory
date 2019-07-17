import React from "react";





function CardWrapper({ children }) {
    return (

        <main className="container">
            <div className="card-columns">
                {children}
            </div>
         
        </main>

    )
}

export default CardWrapper;