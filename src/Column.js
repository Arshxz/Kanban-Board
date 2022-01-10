import React from "react";
import Card from "./Card";

const Column = ({
  column,
  columnIndex,
  onMoveRight,
  onMoveLeft,
  onAddCard,
  remove,
}) => {
  return (
    <>
      <div className="column">
        <h1>{column.name}</h1>
        {column.cards.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            card={card}
            cardIndex={cardIndex}
            canMoveLeft={columnIndex !== 0}
            canMoveRight={columnIndex !== 3}
            onMoveLeft={() => onMoveLeft(cardIndex)}
            onMoveRight={() => onMoveRight(cardIndex)}
            remove={() => remove(cardIndex)}
          />
        ))}
        <button className="add" onClick={onAddCard}>
          +
        </button>
      </div>
    </>
  );
};

export default Column;
