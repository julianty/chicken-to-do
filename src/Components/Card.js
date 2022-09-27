import { Component } from "react"
import { EditText } from "react-edit-text";
import 'react-edit-text/dist/index.css'
import dragElement from "./dragElement";


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
  // Make elements with the draggable class draggable
  componentDidUpdate(prevProps) {
    const draggableElements = document.getElementsByClassName('draggable');
    if (draggableElements) {
      for (let i=0; i<draggableElements.length; i++) {
        dragElement(draggableElements[i]);
      }
    }
  }

  disableAllDraggable = () => {
    let draggableList = document.getElementsByClassName('draggable');
    draggableList = Array.from(draggableList);
    for (const element of draggableList) {
      console.log(element)
      element.classList.remove('draggable');
      element.onmousedown = null;
    }
  }

  enableAllDraggable = () => {
    let cardList = document.getElementsByClassName('card');
    for (const element of cardList) {
      element.classList.add('draggable');
      dragElement(element);
    }
  }


  render = () => {
    return (
      <div className="draggable card">
        <div>{this.state.title}</div>
        {/* <div contentEditable="true">{this.state.textContent}</div> */}
        < EditText 
          defaultValue="Click to edit" 
          onEditMode={this.disableAllDraggable}
          onBlur={this.enableAllDraggable}/>
      </div>
    )
  }
}



export default Card