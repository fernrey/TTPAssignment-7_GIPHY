import React from 'react'

export default function Cards (props) {

    const gif = props.gif
    
    return (
        <>
        {/*<div className='Card'>
            <img src={el.images.fixed_width.url} alt={gif.title} />
            
        </div>*/}
        <div key ={props.id} className="GIFS">
            <img src ={props.src}/>
        </div>

        </>
    )
} 