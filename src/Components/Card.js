import { Component } from "react"


class Card extends Component {
  constructor(props) {
    super(props)
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