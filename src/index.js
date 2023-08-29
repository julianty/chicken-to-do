import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, onSnapshot } from "firebase/firestore";
import { StyledEngineProvider } from "@mui/material";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5WY6q3351Eby88T9Lhlo4wMaZEnKfPng",
  authDomain: "chicken-tasks.firebaseapp.com",
  projectId: "chicken-tasks",
  storageBucket: "chicken-tasks.appspot.com",
  messagingSenderId: "273950036329",
  appId: "1:273950036329:web:02ff88e208dbf3df3bedf8",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <StyledEngineProvider injectFirst>
        <App app={app} />
      </StyledEngineProvider>
    </DndProvider>
  </React.StrictMode>
);

// Initialize Firebase

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
