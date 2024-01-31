import React from "react";
import Item from "./Item";

interface ListProps {
  items: {
    value: number;
    isChecked: boolean;
  }[];
  handleSelectChange: (index: number, direction) => void;
}
const List = ({ items, handleSelectChange }: ListProps) => {
  return (
    <div className="list">
      {items
        .sort((a, b) => a.value - b.value)
        .map((item, index) => {
          return (
            <Item
              item={item}
              handleSelectChange={() => handleSelectChange(index)}
            />
          );
        })}
    </div>
  );
};
export default List;
