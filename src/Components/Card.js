import { Component,  createRef } from "react"
import 'react-edit-text/dist/index.css'
import dragElement from "./dragElement";


class Card extends Component {
  constructor(props) {
    super(props)
    this.data = this.props.data;
    this.cardRef = createRef();
    this.state = {
      uid: 'admin',
      created: '00:00:00',
      title: this.data.title,
      textContent: this.data.textContent,
      style: this.data.style,
      type: '',
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
    this.setState(
      {textContent: e.value},
      () => this.props.updateFirestore(this.state, this.props.docId)
    )
    console.log(this.state);
  }

  onBlur = (e) => {
    this.enableAllDraggable();
  }

  mouseUp = () => {
    const style = this.cardRef.current.style;
    // Save position of element
    const [top, left] = [style.top, style.left];
    this.setState(
      {style: JSON.stringify({top: top, left: left})},
      () => this.props.updateFirestore(this.state, this.props.docId, 'mouseUp')
    )

  }


}

export default Card