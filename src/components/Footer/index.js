/* eslint-disable jsx-a11y/alt-text */
import './style.scss'
import { Component } from 'react'


export default class Footer extends Component {

  render(){
      return (
          <div className="footer">
          <div id="contato">
             <a target="_blank" href="https://www.linkedin.com/in/leshly-ontiveros-rosales-83a62821a/" rel="noreferrer"><img src="https://bit.ly/3r8AKM6" /></a>
            <a target="_blank" href="https://github.com/leshlyontiveros" rel="noreferrer"><img src="https://bit.ly/3nOM4uT" /></a>
            <a href="mailto:less.onti@gmail.com"><img id="email-icon" src="https://bit.ly/30Xci5G" /></a>
          </div>
          </div>
      )
  }
}