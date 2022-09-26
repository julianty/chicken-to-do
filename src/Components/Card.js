import { Component } from "react"


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
        <div>{this.state.textContent}</div>
      </div>
    )
  }
}



export default Card