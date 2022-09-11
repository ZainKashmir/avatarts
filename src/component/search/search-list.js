
import React from 'react'

import './search.css'
export  function Searchlist(props){
<div>
   
  </div >
    return ( <div className='search'>
    <input  type={props.type} placeholder={props.placeholder} onChange={props.onChange}  />
    </div>
    );
}