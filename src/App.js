import "./App.css";
import { CssBaseline, Grid, Box } from "@mui/material";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Workspace from "./Components/Workspace";
import { useCallback, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  Firestore,
} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import update from "immutability-helper";
import uniqid from "uniqid";

function App(props) {
  const [docList, setDocList] = useState({
    randomId1: {
      top: 20,
      left: 20,
      text: "I am card 1",
    },
    randomId2: {
      top: 30,
      left: 30,
      text: "I am card 2",
    },
  });

  useEffect(() => {
    const db = getFirestore(props.app);
    const cardsColRef = collection(db, "cards");
    const unsub = onSnapshot(cardsColRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        // give doc.data() in its entirety to be parsed in workspace
        pushToDocList(doc);
      });
    });

    return unsub;
  });

  function sidebarClickHandler(type) {
    // Should be called by functions in Sidebar.js indicating the type of note
    // Add card to local database
    const newId = uniqid();
    const cardData = {
      type: type,
      title: "Title",
      uid: "admin",
      created: "00:00:00",
      text: "Click to edit",
      top: "0",
      left: "0",
      id: uniqid(),
    };
    const newCard = {};
    newCard[newId] = cardData;
    pushToDocList(newCard);
    // Add card to firestore database

    // For trash, remove card from firestore database
  }

  function pushToDocList(newCard) {
    // Appends new cards
    // setDocList(docList.concat([newDoc]));
    setDocList({ ...newCard, ...docList });
  }

  const moveCard = useCallback(
    // Called in Workspace.js whenever a card is moved
    (id, left, top) => {
      console.log("updating docList");
      setDocList(
        update(docList, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [docList, setDocList]
  );

  const updateDocList = useCallback((id, card) => {
    console.log(id, card);
  });

  function updateFirestore(cardState, docId, trigger = null) {
    // Give this function to Workspace component to save changes
    const db = getFirestore(props.app);
    console.log(`Updating Firestore: doc ${docId}, trigger: ${trigger}`);
    setDoc(doc(db, "cards", docId), { ...cardState }, { merge: true });
  }

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar clickHandler={sidebarClickHandler} />
        <Workspace
          docList={docList}
          updateDocList={updateDocList}
          moveCard={moveCard}
        />
      </Box>
    </>
  );
}

export default App;
