import Card from "./Card"


function Workspace(props) {

  return (
    <div id='workspace'>
      {props.cardList.map(noteClass => <Card title={noteClass}/>)}
    </div>
  )
}


export default Workspace