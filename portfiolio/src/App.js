import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Timeline from './components/Timeline';
import './css/timeline.scss';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      renderiza: 0
    }
  }
  render() {
    const { renderiza } = this.state;
    return (
      <div className="App">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar>
        {renderiza === 0 && <Timeline />}
      </div>
    );
  }
}

export default App;
