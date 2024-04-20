import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export class App extends Component {
    state = {
        advice:''
    };

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
         axios.get(`https://api.adviceslip.com/advice`)
         .then((res) =>{
            const {advice} = res.data.slip
            this.setState({
                advice: advice
            })
         })
         .catch((err)=>{
            console.log(err)
         })
    }

  render() {
    const {advice} = this.state
    return (
      <div className='app'>
        <div className='card'>
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={this.fetchAdvice}>
                <span>GIVE ME AN ADVICE!</span>
            </button>
        </div>
      </div>
    )
  }
}

export default App