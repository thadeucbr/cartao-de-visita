import React, { Component } from 'react';
import MenuZ from '../componentes/MenuZ';
import Contato from './Contato';

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
        <Contato />
      </div>
    );
  }
}
