import React from "react";
import "./ToDo.css";
import TextField from "material-ui/TextField";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ task: event.target.value });
  };

  onSubmit = event => {
    // event.preventDefault();
    this.setState({
      task: "",
      items: [...this.state.items, this.state.task]
    });
  };

  deleteTodo = index => {
    const newTodos = this.state.items.slice();
    newTodos.splice(index, 1);
    this.setState({
      items: newTodos
    });
  };

  render() {
    const List = props => (
      <ul className="todo-items">
        {this.state.items.map((item, index) => (
          <li key={index}>
            <button
              className="todobutton"
              onClick={() => this.deleteTodo(index)}
            >
              X
            </button>
            {item}
          </li>
        ))}
      </ul>
    );
    return (
      <div className="todo-container">
        <div className="todo-top">
          To Do's:
          <div className="todo">
            <TextField
              hintText="What Do You Need To Do?"
              fullWidth={true}
              value={this.state.task}
              onChange={this.onChange}
            />
            {/* <input value={this.state.task} onChange={this.onChange} /> */}
            <button onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
        {<List items={this.state.items} />}
      </div>
    );
  }
}
