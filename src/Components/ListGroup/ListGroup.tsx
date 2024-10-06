import { useState } from "react";
import styles from "./ListGroup.module.css";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //items = [];

  // Hook
  //use state will rerender the component
  // Only updates the state variable for the next render
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const checkEmpty = () => {
    return items.length === 0 && <p>No Item Found</p>;
  };

  //Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  //Converted each item to react format

  //Put in braces because not a html / react component
  return (
    <>
      <h1>{heading}</h1>
      {checkEmpty()}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
