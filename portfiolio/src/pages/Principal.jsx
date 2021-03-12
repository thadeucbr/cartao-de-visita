import React, { Component } from 'react';
import MenuZ from '../componentes/MenuZ';
import Projetos from './Projetos';
import Contato from './Contato';
import Timeline from '../componentes/Timeline';
import Sobre from './Sobre';
export default class Principal extends Component {
  constructor() {
    super();
    this.state = {
      renderiza: this.props,
    };
  }

  render() {
    const { caminho } = this.props;
    return (
      <div>
        <MenuZ />
        <Sobre />
        <Timeline />
        <Projetos />
        <Contato />
      </div>
    );
  }
}
