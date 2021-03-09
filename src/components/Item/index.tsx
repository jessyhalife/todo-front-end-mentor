import React, { useContext } from "react";
import { Todo } from "../../types";
import check from "../../images/icon-check.svg";
import { Context } from "../../context/Provider";

interface Props {
  item: Todo;
  toggleCompleted: (id: Todo["id"]) => void;
}

const Item: React.FC<Props> = ({ item, toggleCompleted }) => {
  const { option } = useContext(Context);
  return (
    <div className={`todo__list__item ${option === "dark" && "dark"}`}>
      <span
        className={`radio__circle ${item.completed && "full"}`}
        onClick={() => toggleCompleted(item.id)}
      >
        {item.completed && <img src={check} alt="" />}
      </span>
      <p
        className={`${item.completed && "strike"} ${
          option === "dark" && "dark"
        }`}
      >
        {item.title}
      </p>
    </div>
  );
};

export default Item;
