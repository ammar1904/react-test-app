import { useState } from "react";
import styles from "./ListGroup.module.css";

interface listGroupProps {
  items: string[];
  heading: string;
  // onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: listGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no items found</p>}
      <ul className={styles["list-group"]}>
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
              // onSelectItem(item);
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
