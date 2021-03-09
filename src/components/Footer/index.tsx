import React, { useContext } from "react";
import { Context } from "../../context/Provider";
import { FILTERS } from "../../types";

interface Props {
  count: number;
  changeFilter: (type: string) => void;
  selected: string;
  clearCompleted: () => void;
}
const Footer: React.FC<Props> = ({
  count,
  changeFilter,
  selected,
  clearCompleted,
}) => {
  const { option } = useContext(Context);
  return (
    <div className={`todo__list__footer ${option === "dark" && "dark"}`}>
      <p>{count} items left</p>
      <ul className="todo__list__selector">
        <li
          className={`${selected === FILTERS.ALL && "active"}`}
          onClick={() => changeFilter(FILTERS.ALL)}
        >
          All
        </li>
        <li
          className={`${selected === FILTERS.ACTIVE && "active"}`}
          onClick={() => changeFilter(FILTERS.ACTIVE)}
        >
          Active
        </li>
        <li
          className={`${selected === FILTERS.COMPLETED && "active"}`}
          onClick={() => changeFilter(FILTERS.COMPLETED)}
        >
          Completed
        </li>
      </ul>
      <p onClick={clearCompleted}>clear completed</p>
    </div>
  );
};

export default Footer;
