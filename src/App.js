import React, { Component } from "react";
import Column from "./Column";
import "./App.css";

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Assigned",
          cards: [{ name: "Demo Task" }],
        },
        {
          name: "Ongoing",
          cards: [],
        },
        {
          name: "To be tested",
          cards: [],
        },
        {
          name: "Completed",
          cards: [],
        },
      ],
    };
  }

  handleAdd = (columnIndex) => {
    const name = window.prompt("Add a Task");
    if (!name) return;
    const card = { name };
    this.setState((prevState) => {
      const { columns } = this.state;
      columns[columnIndex].cards.push(card);
      return { columns };
    });
  };

  handleMove = (columnIndex, cardIndex, direction) => {
    this.setState((prevState) => {
      const { columns } = prevState;
      const [card] = columns[columnIndex].cards.splice(cardIndex, 1);
      columns[columnIndex + direction].cards.push(card);
      return { columns };
    });
  };

  remove = (columnIndex, cardIndex) => {
    this.setState((prevState) => {
      const { columns } = this.state;
      columns[columnIndex].cards.splice(cardIndex, 1);
      return { columns };
    });
  };

  render() {
    return (
      <>
        <div className="App">
          {this.state.columns.map((column, columnIndex, cardIndex) => (
            <Column
              column={column}
              columnIndex={columnIndex}
              key={columnIndex}
              onMoveLeft={(cardIndex) =>
                this.handleMove(columnIndex, cardIndex, DIRECTION_LEFT)
              }
              onMoveRight={(cardIndex) =>
                this.handleMove(columnIndex, cardIndex, DIRECTION_RIGHT)
              }
              onAddCard={() => this.handleAdd(columnIndex)}
              remove={(cardIndex) => this.remove(columnIndex, cardIndex)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
