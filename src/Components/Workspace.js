import Note from './Note';
import ToDoList from './ToDoList';


function Workspace(props) {
  
  let docList = props.docList;

  function returnComponentBasedOnDoc(doc) {
    if (doc.data().type === "note")
      return (
        // TODO: read doc.data().type for the card
        <Note 
          key={doc.id}
          docId={doc.id}
          data={doc.data()}
          updateFirestore={props.updateFirestore}/>
      )
    else if (doc.data().type === "todolist")
      return (
        <ToDoList 
          key={doc.id}
          docId='test'
          data={doc.data()}
          updateFirestore={props.updateFirestore}/>
      )
  }

  return (
    <div id='workspace'>
      {props.docList.map((doc) => returnComponentBasedOnDoc(doc))}
    </div>
  )
}


export default Workspace