import React from 'react'
import '../App.css'

function Box(props) {
        return (          
             <div className="box" onClick={props.onClick} id={"box" + props.number}></div>
        );

}

export default Box
