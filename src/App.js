import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Workspace from './Components/Workspace';
import dragElement from './Components/dragElement';
import { useEffect } from 'react';


function App() {
  // Make elements with the draggable class draggable
  useEffect(() => {
    const draggableElements = document.getElementsByClassName('draggable');
    if (draggableElements) {
      for (let i=0; i<draggableElements.length; i++) {
        dragElement(draggableElements[i]);
        console.log(draggableElements[i])
      }
      // console.log(document.getElementsByClassName('draggable'));
    }
  },);

  const style = {
    display: 'grid',
    gridTemplateRows: '5% auto',
    gridTemplateColumns: '5% auto',
    backgroundColor: '#eeeeee',
    height: '100vh'
  }

  let noteList = ['note'];

  function sidebarClickHandler(e) {
    noteList.push('note');
  }

  return (
    <div style={style}>
      <Header />
      <Sidebar clickHandler={sidebarClickHandler}/>
      <Workspace noteList={noteList}/>
    </div>
  );
}

export default App;
