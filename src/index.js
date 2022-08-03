import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function IncrementValue(props){
  return(
    <button onClick={props.OnClick}>
      +1
    </button>
  )
}

function DisplayValue(props){
  return (
    <div>
      {props.message}
    </div>
  )
}

function MyApp(){
  const [counter, setCounter] = useState(0)
  const incrementCounter = () => setCounter(counter+1)
  return(
    <>
    <IncrementValue OnClick={incrementCounter}/>
    <DisplayValue message={counter}/>
    </>
  )
}

root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
