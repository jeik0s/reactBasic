import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function IncrementValue(props){
  const hendleClick = () => props.OnClick(props.incrementBy);
  return(
    <button onClick={hendleClick}>
      +{props.incrementBy}
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
  const incrementCounter = (n) => setCounter(counter+n)
  return(
    <>
    <IncrementValue OnClick={incrementCounter} incrementBy={1}/>
    <IncrementValue OnClick={incrementCounter} incrementBy={5}/>
    <IncrementValue OnClick={incrementCounter} incrementBy={10}/>
    <IncrementValue OnClick={incrementCounter} incrementBy={100}/>
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
