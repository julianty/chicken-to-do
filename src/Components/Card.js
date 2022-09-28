import { Component } from "react"
import { EditText } from "react-edit-text";
import 'react-edit-text/dist/index.css'
import dragElement from "./dragElement";


class Card extends Component {
  constructor(props) {
    super(props)
    this.data = this.props.data;
    this.state = {
      uid: 'admin',
      created: '00:00:00',
      title: this.data.title,
      textContent: this.data.textContent,
      style: this.data.style
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
  componentDidMount() {
    this.enableAllDraggable();
  }

  disableAllDraggable = () => {
    let draggableList = document.getElementsByClassName('draggable');
    draggableList = Array.from(draggableList);
    for (const element of draggableList) {
      element.classList.remove('draggable');
      element.onmousedown = null;
    }
  }

  enableAllDraggable = (e) => {
    let cardList = document.getElementsByClassName('card');
    for (const element of cardList) {
      element.classList.add('draggable');
      dragElement(element);
    }
  }

  updateState = (e) => {
    console.log(e.value);
    this.setState(
      {textContent: e.value},
      () => this.props.updateFirestore(this.state, this.props.docId)
    )
  }

  onBlur = (e) => {
    this.enableAllDraggable();
  }


  render = () => {
    return (
      <div className="draggable card">
        <div>{this.state.title}</div>
        < EditText 
          defaultValue={this.state.textContent}
          onEditMode={this.disableAllDraggable}
          onBlur={this.onBlur}
          onSave={this.updateState}/>
      </div>
    )
  }
}



export default Card