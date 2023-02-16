import React from "react";


const Card = (props) => {



    return ( 
        <div id={props.id} className={props.className} onDragStart={dragStart} onDragOver={dragOver}>
            { props.children }
        </div>
     );
}
 
export default Card;