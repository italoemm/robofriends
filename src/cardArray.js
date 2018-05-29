import React from 'react';
import Card from './card';

const CardArray = ({robots}) => {      
    return (      
                
        robots.map((eachrobots, i) => {
        return  ( <Card        
        key= {i} 
        id={eachrobots.id}
        name={eachrobots.name} 
        email={eachrobots.email}/>
                )})
          );

}


export default CardArray;

   //eslint-disable-next-line       
     {/*
     --------------------------SINTAX JSX--------------------------------
    I'm importing card
    A function that's going used to be displayed into index.html.
    within funtion I have a loop that's going getting a card  and sending the values of robots as props into it.
    and exporting the function
    
    so pretting much, I have a funtion that get the array robots as props...loop trough it assigning into a variable a card sending a value of each robots, return this variable and export the function
     */
    }