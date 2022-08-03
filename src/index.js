import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function ShowInput(props){
  return (
    React.createElement(
      'pre',
      null,
      "{props.newTime}"
    )
  )
}

function ShowTime(){
  return(
    React.createElement(
      'input',
      null
    )
  )
}


function MyApp(){
  var currentTime = 'adsads'
  return (
    <>
    <ShowInput />
    <ShowTime newTime={currentTime}/>
    </>
  )
}

root.render(
  <MyApp />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
