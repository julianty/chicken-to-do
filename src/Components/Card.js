import { Component } from "react"


class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: 'admin',
      created: '00:00:00'
    }
  }
  render = () => {
    return (
      <div className="draggable">
        <div>Card</div>
      </div>
    )
  }
}



export default Card