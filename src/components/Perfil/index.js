/* eslint-disable jsx-a11y/alt-text */
import './style.scss'
import { Component } from 'react'

const listaDeProjetos = [
  
  {
    imagem: "https://bit.ly/3cOW9lh",        
    titulo: "Universo",
    repositorio: "https://github.com/leshlyontiveros/universo.git",
    site: "https://leshlyontiveros.github.io/universo/"
},

  {
    imagem: "https://bit.ly/3DTvsb7",        
    titulo: "New York",
    repositorio: "https://github.com/leshlyontiveros/projeto-new-york",
    site: "https://leshlyontiveros.github.io/projeto-new-york/"
},

{
    imagem: "https://bit.ly/3D5eRQt",        
    titulo: "Rosales Studios",
    repositorio: "https://github.com/leshlyontiveros/checkpoint-formulario.git",
    site: "https://leshlyontiveros.github.io/checkpoint-formulario/"
},

{
  imagem: "https://bit.ly/3cQWIec",        
  titulo: "Design de UI",
  repositorio: "https://github.com/leshlyontiveros/paginagrupal.git",
  site: "https://leshlyontiveros.github.io/paginagrupal/"
},


]

export default class Portifolio extends Component {

  render(){

    return (

      <>
       <h2 id="portifolio">Portifólio</h2>
       <div className="container">
       
        {listaDeProjetos.map(projeto => 
        
          <div id="portifolio" className="container--portifolio">
          <div className="container--img">
          <img src={projeto.imagem}/>
          </div>
          <h3>{projeto.titulo}</h3>
          <div className="url">
          <a title="Github" target="_blank" href={projeto.repositorio} rel="noreferrer"><img className="github-icon" src="https://bit.ly/3nR2hj6"/></a>
          <a title="Acessar site" target="_blank" href={projeto.site} rel="noreferrer"> <img src="https://cdn4.iconfinder.com/data/icons/top-search-7/128/_web_Internet_network_www_communication_global_worldwide-512.png"/></a>
          </div>
          </div>
        
        )}

      </div>
      </>
     )
}

}