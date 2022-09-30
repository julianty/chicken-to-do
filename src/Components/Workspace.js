import Note from './Note';

function Workspace(props) {
  
  let docList = props.docList;



  return (
    <div id='workspace'>
      {props.docList.map(doc=> {
        return (
          // TODO: read doc.data().type for the card
          <Note 
            key={doc.id}
            docId={doc.id}
            data={doc.data()}
            updateFirestore={props.updateFirestore}/>
        )
      })}
    </div>
  )
}


export default Workspace