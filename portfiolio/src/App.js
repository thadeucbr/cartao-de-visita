import React from 'react';
import Timeline from './components/Timeline';
import MenuZ from './components/MenuZ';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';

import { 
    BrowserRouter, 
    Route,
    Switch 
  } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/timeline" component={ Timeline } />
    <Route exact path="/sobre" component={ Sobre } />
    <Route exact path="/contato" component={ Contato } />
    <Route exact path="/projetos" component={ Projetos } />
    <Route path="/" component={ MenuZ } />
    </Switch>
  </BrowserRouter>
    );
  }
}
export default App;
