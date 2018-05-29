import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import App from  './app'



ReactDOM.render(<App/>,document.getElementById('root'));
registerServiceWorker();

//eslint-disable-next-line
{/*
I'm rendering a CardArray passing array of robots as props to it

*/}