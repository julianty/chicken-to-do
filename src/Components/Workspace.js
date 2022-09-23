import { useState } from "react"
import Note from "./Note"

function Workspace(props) {
  const [notes, setNotes] = useState([])

  console.log(props.noteList);
  return (
    <div id='workspace'>
      {props.noteList.map(noteClass => <Note />)}
    </div>
  )
}


export default Workspace