import React from 'react'
import '../index.css';
export default function Cards (props) {

    const gif = props.gif
    console.log(props.src)
    return (
        
        <div className="GIFS">
            <img className="imgs"src ={props.src}/>
        </div>

        
    )
} 