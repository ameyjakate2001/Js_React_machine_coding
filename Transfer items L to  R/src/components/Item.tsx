import React from "react";
interface ItemProps {
  item: {
    value: number;
    isChecked: boolean;
  };
  handleSelectChange: () => void;
}
const Item = ({ item, handleSelectChange }: ItemProps) => {
  return (
    <div className="list-item checked" key={item.value}>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={handleSelectChange}
      />
      {item.value}
    </div>
  );
};

export default Item;
