import React from 'react';

const Card = ({name, email, id}) => {
  
    return (
        <div className='tc bg-light-green dib ma2 pa3 br3 grow'>
            <img src = {`https://robohash.org/${id}?size=200x200`} alt='robots img'/>
        <div>
            <h2> {name} </h2>
            <p> {email} </p> 
        </div> 
        </div>
    );
}

export default Card;
            
   