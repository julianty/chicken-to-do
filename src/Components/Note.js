import Card from './Card';
import { EditText } from "react-edit-text";

class Note extends Card {
  constructor(props) {
    super(props);
    this.state.type = 'note';
  }

  render = () => {
    return (
      <div className="draggable card" 
        ref={this.cardRef} 
        onMouseUp={this.mouseUp}
        style={JSON.parse(this.state.style)}>

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

export default Note