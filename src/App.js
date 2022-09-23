import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Workspace from './Components/Workspace';
import dragElement from './Components/dragElement';
import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

function App(props) {

  const [cardList, setCardList] = useState([])
  // Make elements with the draggable class draggable
  useEffect(() => {
    const draggableElements = document.getElementsByClassName('draggable');
    if (draggableElements) {
      for (let i=0; i<draggableElements.length; i++) {
        dragElement(draggableElements[i]);
      }
    }
  },);

  useEffect(() => {
    const db = getFirestore(props.app);
    const cardsColRef = collection(db, 'cards');
    const unsub = onSnapshot(cardsColRef, (snapshot) => {
      console.log(snapshot.docs.map((doc) => (
        {
          title: doc.data().title
        }
      )));
      // console.log(snapshot.docs[0].data().title);
    })

    return unsub
  })


  const style = {
    display: 'grid',
    gridTemplateRows: '7% auto',
    gridTemplateColumns: '5% auto',
    backgroundColor: '#eeeeee',
    height: '100vh'
  }


  function sidebarClickHandler(e) {
    pushToCardList('card');
  }

  function pushToCardList(card) {
    setCardList(cardList.concat([card]));
  }

  return (
    <div style={style}>
      <Header />
      <Sidebar clickHandler={sidebarClickHandler}/>
      <Workspace cardList={cardList}/>
    </div>
  );
}

export default App;
