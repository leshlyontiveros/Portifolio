/* eslint-disable jsx-a11y/alt-text */
import './style.scss'
import { Component } from 'react'


export default class Sobre extends Component {

  render(){
      return (
          <>
          <h2 id="sobre">Sobre mim:</h2>
          <p></p>
          <div className="perfil">
            <img className="perfil--img" src="https://cdn.discordapp.com/attachments/911054312053014578/913251212344840252/IMG_4838.png"/>
            <p></p>

            <div className="stack">
            <img title="HTML" src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            <img title="CSS" src="https://cdn-icons-png.flaticon.com/512/919/919826.png" />
            <img title="JavaScript" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <img title="MySQL" src="https://cdn-icons-png.flaticon.com/512/919/919836.png" />
            <img title="Java" src="https://cdn-icons-png.flaticon.com/512/919/919854.png" />
            <img title="React" src="https://cdn-icons-png.flaticon.com/512/919/919851.png" />
            <img title="Python" src="https://bit.ly/3DUqxXs" />
            <img title="Sass" src="https://bit.ly/3cNnNiA" />
            </div>
            </div>
          </>
      )
  }
}