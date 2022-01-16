import React from 'react'

export default function Cards (props) {

    const gif = props.gif
    console.log(props.src)
    return (
        <>
        {/*<div className='Card'>
            <img src={el.images.fixed_width.url} alt={gif.title} />
            
        </div>*/}
        <div className="GIFS">
            <img src ={props.src}/>
        </div>

        </>
    )
} 