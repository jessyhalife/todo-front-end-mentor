import React, { useContext, useMemo } from "react";
import { Context } from "../../context/Provider";
import { Todo, FILTERS } from "../../types";

import Footer from "../Footer";
import Item from "../Item";
interface Props {
  items: Todo[];
  toggleCompleted: (id: Todo["id"]) => void;
  clearCompleted: () => void;
}

const List: React.FC<Props> = ({ items, toggleCompleted, clearCompleted }) => {
  const [filter, setFilter] = React.useState<string>(FILTERS.ALL);
  const [filteredData, setFilteredData] = React.useState<Todo[]>(items);
  const { option } = useContext(Context);

  const handleFilter = (type: string) => {
    setFilter(type);
    switch (type) {
      case FILTERS.ALL:
        setFilteredData(items);
        break;
      case FILTERS.ACTIVE:
        const active = items.filter((x) => !x.completed);
        setFilteredData(active);
        break;
      case FILTERS.COMPLETED:
        const completed = items.filter((x) => x.completed);
        setFilteredData(completed);
        break;
    }
  };

  React.useEffect(() => {
    handleFilter(filter);
  }, [items]);

  return (
    <>
      <section
        className={`content__box todo__list ${option === "dark" && "dark"}`}
      >
        {filteredData.map((item) => (
          <Item key={item.id} item={item} toggleCompleted={toggleCompleted} />
        ))}
        {filteredData.length === 0 && (
          <div className={`todo__list__item ${option === "dark" && "dark"}`}>
            <p>No todo´s found :o</p>
            <br />
            <small>Maybe you can try adding some new tasks!</small>
          </div>
        )}
      </section>
      <Footer
        count={items.filter((x) => !x.completed).length}
        changeFilter={handleFilter}
        clearCompleted={clearCompleted}
        selected={filter}
      ></Footer>
    </>
  );
};

export default List;
