import React from 'react';
import './header.css'

export function Nameheader(props) {
    return( <div className='head'>
    <h1>{props.title}</h1>
    </div>
    );
}
