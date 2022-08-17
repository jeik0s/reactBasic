import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import XXX from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const App = ({title}) => (
//   <div className='header'>{title}</div>
// );

class RandomColor extends React.Component{
  render(){
    return(
      <div style={{color: Math.random() < 0.5 ? 'green' : 'red'}}>
      Diffrent color, depends on random number
      </div>
    );
  }
}

class Card extends React.Component{

  render () {
    return(
      <div className='github-profile'>
        <img src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"alt="car"/>
        <div className='info'>
          <div className='name'>Name here...</div>
          <div className='company'>Company here...</div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return <div className='header'>{this.props.title}</div>;
  }
}

// function MyApp(){
//   return (
//     <>
//     <div>
//     <App title="The github cards app"></App>
//     <Card></Card>
//     </div>
//     </>
//   )
// }

root.render(
  <>
  <div>
  <RandomColor></RandomColor>
  <App title="The github cards app"></App>
  <Card></Card>
  </div>
  </>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
