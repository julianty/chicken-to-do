import "./App.css";
import { CssBaseline, Grid, Box } from "@mui/material";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Workspace from "./Components/Workspace";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  Firestore,
} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import uniqid from "uniqid";

function App(props) {
  const [docList, setDocList] = useState([]);

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
    let card = {
      title: "Title",
      uid: "admin",
      created: "00:00:00",
      textContent: "Click to edit",
      top: "0",
      left: "0px",
      id: uniqid(),
    };
    pushToDocList(card);
    console.log("sidebarClickHandler");
    // Add card to firestore database

    // For trash, remove card from firestore database
  }

  function pushToDocList(newDoc) {
    // Appends new cards
    if (docList.find((doc) => doc.id === newDoc.id) === undefined) {
      setDocList(docList.concat([newDoc]));
    }
  }

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
          setDocList={setDocList}
          updateFirestore={updateFirestore}
        />
      </Box>
    </>
  );
}

export default App;
