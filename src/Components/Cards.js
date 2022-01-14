import React from 'react'

export default function Cards (props) {

    const gif = props.gif
    
    return (
        
        <div className='Card'>
            <img src={gif.images.fixed_width.url} alt={gif.title} />
            
        </div>
    )
} 