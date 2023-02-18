import logo from './blastpass-logo.svg';
import './App.css';
import React from 'react';
import { TextField, Button } from '@mui/material';
import { spacing } from '@mui/system';

class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state = this.getDefaultState();
  }

  getDefaultState = () => {
    return { website: '', username: '', password: '' };
  }

  clear = () => {
    this.setState(this.getDefaultState())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <div className='App-body'>
        <TextField id="standard-basic"  value={this.state.website} onChange={(e)=>{this.setState({website: e.target.value})}} label="Website" variant="standard" sx={{ m: 1 }}/>
          <TextField id="standard-basic" label="User Name" value={this.state.username} onChange={(e)=>{this.setState({username: e.target.value})}} variant="standard" sx={{ m: 1 }}/>
          <TextField id="standard-basic" label="Password" value={this.state.password} onChange={(e)=>{this.setState({password: e.target.value})}} variant="standard" sx={{ m: 1 }}/>
          <Button variant="contained" color="error" onClick={this.clear} sx={{ m: 5 }}>Safely Save</Button>
          
          <a
            className="App-link"
            href="https://www.reddit.com/r/BlastPass/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit
          </a>
        </div>
      </div>
    );
  }
};

export default MyApp