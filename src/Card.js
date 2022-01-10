import React from "react";

const Card = ({
  card,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight,
  remove,
}) => {
  return (
    <>
      <div className="card">
        {canMoveLeft && <button onClick={onMoveLeft}>{"<"}</button>}
        <span onClick={remove} className="title">
          {card.name}
        </span>
        {canMoveRight && <button onClick={onMoveRight}>{">"}</button>}
      </div>
    </>
  );
};
export default Card;
