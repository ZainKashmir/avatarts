import React from 'react';
import Card from './card';
export function Cardlist(props) {
    return(
        props.monsters.map(x=>{
            return(
                <div className='itemss' key={x.id} >
              <Card monster={x}  />
              </div>
            );

        })
   
    );
}