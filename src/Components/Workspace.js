import Card from "./Card"


function Workspace(props) {
  
  let docList = props.docList;



  return (
    <div id='workspace'>
      {props.docList.map(doc=> {
        return (
          <Card 
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