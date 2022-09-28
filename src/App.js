import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Workspace from './Components/Workspace';
import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot, Firestore } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";

function App(props) {

  const [docList, setDocList] = useState([])

  useEffect(() => {
    const db = getFirestore(props.app);
    const cardsColRef = collection(db, 'cards');
    const unsub = onSnapshot(cardsColRef, (snapshot) => {
      snapshot.docs.forEach(doc => {
        // give doc.data() in its entirety to be parsed in workspace
        pushToDocList(doc);
      })
    })

    return unsub
  },)


  const style = {
    display: 'grid',
    gridTemplateRows: '7% auto',
    gridTemplateColumns: '5% auto',
    backgroundColor: '#eeeeee',
    height: '100vh'
  }


  function sidebarClickHandler(e) {
    // pushToCardList('card');
    // Add card to firestore database

    // For trash, remove card from firestore database
  }

  function pushToDocList(newDoc) {
    // Update docList updates cards on workspace
    if (docList.find(doc => doc.id === newDoc.id) === undefined) {
      setDocList(docList.concat([newDoc]));
    }
  }


  function updateFirestore(cardState, docId) {
    const db = getFirestore(props.app);
    setDoc(doc(db, "cards", docId), {...cardState}, {merge: true});
  }

  return (
    <div style={style}>
      <Header />
      <Sidebar clickHandler={sidebarClickHandler}/>
      <Workspace 
        docList={docList} 
        setDocList={setDocList}
        updateFirestore={updateFirestore}/>
    </div>
  );
}

export default App;
