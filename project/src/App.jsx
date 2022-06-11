import { Component } from 'react';
import './App.css';
import Botao from './components/Botao';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '#vai da certo',
    }

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = ['A solidão é a sorte de todos os espíritos excepcionais',
      'Não ser amado é falta de sorte, mas não amar é a própria infelicidade',
      'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar',
      'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho',
      'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores',
    ]
  }

  quebrarBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img src={require('./asserts/biscoito.png')} className="img" />
        <Botao acaoBtn={this.quebrarBiscoito} nome="abrir biscoito" />
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
}

export default App;
