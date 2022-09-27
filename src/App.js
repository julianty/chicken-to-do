import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Workspace from './Components/Workspace';
import dragElement from './Components/dragElement';
import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

function App(props) {

  const [cardList, setCardList] = useState([])

  useEffect(() => {
    const db = getFirestore(props.app);
    const cardsColRef = collection(db, 'cards');
    const unsub = onSnapshot(cardsColRef, (snapshot) => {
      snapshot.docs.forEach(doc => {
        pushToCardList(doc.data().title);
      })
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
    // Add card to firestore database

    // For trash, remove card from firestore database
  }

  function pushToCardList(card) {
    // Update cardList updates cards on workspace
    if (cardList.indexOf(card) === -1) {
      setCardList(cardList.concat([card]));
    }
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
