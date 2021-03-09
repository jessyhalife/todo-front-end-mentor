import React, { useContext } from "react";
import { Context } from "../../context/Provider";
import { Todo } from "../../types";

interface Props {
  addItem: (title: Todo["title"]) => void;
}

const Input: React.FC<Props> = ({ addItem }) => {
  const { option } = useContext(Context);
  const [title, setTitle] = React.useState<string>("");

  function handleAdd(key: string) {
    if (key === "Enter") {
      addItem(title);
      setTitle("");
    } else return;
  }
  return (
    <section
      className={`content__box todo__create ${option === "dark" && "dark"}`}
    >
      <input
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
        type="text"
        placeholder="Create a new todo"
        onKeyPress={({ key }) => handleAdd(key)}
      />
    </section>
  );
};

export default Input;
