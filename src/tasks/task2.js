import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//   {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

class RandomColor extends React.Component{
  render(){
    return(
      <div style={{color: Math.random() < 0.5 ? 'green' : 'red'}}>
      Diffrent color, depends on random number
      </div>
    );
  }
}

const CardList = (props) => (
  <div>
    {props.profiles.map(profile =>  <Card key={profile.id}{...profile} />  )}
  </div>
)

class Card extends React.Component{
  render () {
    const profile = this.props
    return(
      <div className='github-profile'>
        <img src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" alt="car"/>
        <div className='info'>
          <div className='name'>{profile.name}</div>
          <div className='company'>{profile.company}.</div>
        </div>
      </div>
    )
  }
}

class Form extends React.Component {
  state = {userName: ''}
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data)
    this.setState({userName: ''})
  };
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          onChange={event => this.setState({userName: event.target.value})}
          value={this.state.userName}
          placeholder='Github User' 
          required
        />
        <button>Add Card</button>
      </form>
    )
  }
}

class App extends React.Component {
  
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     profiles: testData,
  //   };
  // }
  // to samo co to na dole "state"
  state = {
    profiles: [],
  }

  addNewProfile = (profileData) => {
    // console.log('App', profileData)
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  }

  render () {
  const title = this.props.title
  return (
    <>
    <RandomColor/>
    <div className='header'>{title}</div>
    <Form onSubmit={this.addNewProfile}/>
    <CardList profiles={this.state.profiles}/>
    </>
    )
  }
}

root.render(
  <App title="The github cards app"></App>
);

reportWebVitals();
