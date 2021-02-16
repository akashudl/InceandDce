import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import User from './User/User';
import Counter from './Incrnum/Counter';
class App extends Component
{  
 
  render()
  {     
    return (
          <div>
            <h1 style={{textAlign:'Center'}}>Welcome To React</h1>
          <User
          username="Akash"/>
          <Counter/>
         
                      </div>
    );
  }
}

export default App;
