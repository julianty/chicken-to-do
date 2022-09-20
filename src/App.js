import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import dragElement from './Components/dragElement';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    dragElement(document.getElementById('draggable'));
    console.log(document.getElementById('draggable'));
  }, []);
  const style = {
    display: 'grid',
    gridTemplateRows: '5% auto',
    gridTemplateColumns: '5% auto',
    backgroundColor: '#eeeeee',
    height: '100vh'
  }
  return (
    <div style={style}>
      <Header />
      <Sidebar />
      <div id='draggable'>Hello</div>
    </div>
  );
}

export default App;
