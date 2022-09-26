import { Component } from "react"
import { EditText } from "react-edit-text";
import 'react-edit-text/dist/index.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: 'admin',
      created: '00:00:00',
      title: props.title,
      textContent: '',
    }
  }
  render = () => {
    return (
      <div className="draggable card">
        <div>{this.state.title}</div>
        {/* <div contentEditable="true">{this.state.textContent}</div> */}
        < EditText defaultValue="Click to edit" />
      </div>
    )
  }
}



export default Card