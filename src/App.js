import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Workspace from './Components/Workspace';
import dragElement from './Components/dragElement';
import { useEffect, useState } from 'react';


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

  const [noteList, setNoteList] = useState([])

  const style = {
    display: 'grid',
    gridTemplateRows: '7% auto',
    gridTemplateColumns: '5% auto',
    backgroundColor: '#eeeeee',
    height: '100vh'
  }


  function sidebarClickHandler(e) {
    pushToNoteList('note');
  }

  function pushToNoteList(note) {
    setNoteList(noteList.concat([note]));
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
