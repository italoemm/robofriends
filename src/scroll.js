import React from 'react';

const Scroll = (props) => {
    return(
 
    <div style = {{"overflowY":"scroll","borderTop":"3px solid black","height":"500px","borderBottom":"3px solid black"}}>
        {props.children}
    </div>

    );
};
        
 export default Scroll;