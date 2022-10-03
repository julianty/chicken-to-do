import Card from './Card';
import { Component } from 'react';
import { EditText } from 'react-edit-text';


class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: this.props.data.complete,
      textContent: this.props.data.textContent
    }
  }

  render = () => {
    return (
      <div className='todolistitem'>
        <input type="checkbox"></input>
        <EditText
          name={this.props.data.name}
          defaultValue={this.state.textContent}
          style={{display: 'flex', margin: '0px'}}
          onEditMode={this.props.disableAllDraggable}
          onBlur={this.props.onBlur}
          onSave={this.props.onSave}
          className='todolisttextcontent'
        />
      </div>
    )
  }
}

class ToDoList extends Card {
  constructor(props) {
    super(props)
    this.state.listItems = this.data.listItems;
    this.state.type = 'todolist';
  }

  handleListItemChange = (e) => {
    // update state.listitems
    const targetToDoListObj = this.state.listItems.find(toDoListObj => {
      return toDoListObj.name === e.name;
    });
    let updatedListItems = [...this.state.listItems];
    updatedListItems[updatedListItems.indexOf(targetToDoListObj)] = 
      {...targetToDoListObj, textContent: e.value};
    console.log(updatedListItems)
    this.setState((state) => {
      return {...this.state, listItems: updatedListItems}
    }, () => this.updateFirestore())
  }

  updateFirestore = () => {
    this.props.updateFirestore(this.state, this.props.docId, 'todolist')
  }

  dummylistItem = {
    textContent: 'task1', 
    name: 'name1', 
    complete: 'false'
  }

  render = () => {
    return (
      <div className="draggable card todolist" 
        ref={this.cardRef} 
        onMouseUp={this.mouseUp}
        >
        <div>{this.state.title}</div>
        {this.state.listItems.map((toDoListItem) => {
          return (
            <ToDoListItem 
              data={toDoListItem}
              disableAllDraggable={this.disableAllDraggable}
              onBlur={this.onBlur}
              onSave={this.handleListItemChange}   
            />
          )
        })}
      </div>
    )
  }
}


export default ToDoList

