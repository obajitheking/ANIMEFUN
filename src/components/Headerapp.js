import React from 'react'

function Headerapp({data}) {

var calc = Math.floor(Math.random() * 10);

let {
    coverImage: {small}
} = data.data.[calc].attributes

    return (
        <div className='headerapp'>
            <img src={small} className='header-img' alt='banner'/>
        </div>
    )
}

export default Headerapp;
