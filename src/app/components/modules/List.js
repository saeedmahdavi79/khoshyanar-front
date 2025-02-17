import React, { useRef } from "react";
import { useDndZone } from "react-dnd-action";

export function List({ items, onItemsChange, isHorizontal = false }) {
  const listRef = useRef();
  useDndZone(listRef, { items }, ({ items: newItems }) =>
    onItemsChange(newItems)
  );

  return (
    <ul className={isHorizontal ? "list horizontal" : "list"} ref={listRef}>
      {items.map((item) => (
        <li key={item.id}>{item.id}</li>
      ))}
    </ul>
  );
}
