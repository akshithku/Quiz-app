import"./Home.css"

import React, { Component } from 'react'

export class Homecomponent extends Component {
  render() {
    return (
      <div className='home'>
        <h1>Quizz App</h1>
        <button id='btn' >Play</button>
      </div>
    )
  }
}

export default Homecomponent