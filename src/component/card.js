import React from 'react';
 function Card (props) {

    return (
        <div>
            <img  alt='Monster' src={`https://robohash.org/ ${props.monster.id}`}/> 
            
            <li>{props.monster.name}</li>
            <h6>{props.monster.email}</h6>
              

        </div>
    )


}
export default Card;

// //  <li>{props.monsterName}</li> 
// //     <h6>{props.monsterEmail}</h6>
// //     <img  alt='Monster' src={props.image} />   





// monster={x} monsterName={x.name} monsterEmail={x.Email}   