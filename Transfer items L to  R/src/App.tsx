import { useState } from "react";
import "./styles.css";
import List from "./components/List";
import Action from "./components/Action";

export default function App() {
  const items = [
    {
      value: 1,
      isChecked: false,
    },
    {
      value: 2,
      isChecked: false,
    },
    {
      value: 3,
      isChecked: false,
    },
    {
      value: 4,
      isChecked: false,
    },
  ];
  const [firstList, setFirstList] = useState<items[]>(items);
  const [secondList, setSecondList] = useState<items[]>([]);
  const handleSelectChange = (index: number, direction: "left" | "right") => {
    if (direction === "left") {
      setFirstList((prevList) => {
        const updatedItem = {
          ...prevList[index],
          isChecked: !prevList[index].isChecked,
        };
        const newItems = [...prevList];
        newItems[index] = updatedItem;
        return newItems;
      });
    } else if (direction === "right") {
      setSecondList((prevList) => {
        const updatedItem = {
          ...prevList[index],
          isChecked: !prevList[index].isChecked,
        };
        const newItems = [...prevList];
        newItems[index] = updatedItem;
        return newItems;
      });
    }
  };
  const handleAction = (direction: "left" | "right") => {
    if (direction === "left") {
      const selectedItems = secondList.filter((item) => item.isChecked);
      setFirstList((prevFirstList) => [
        ...prevFirstList,
        ...selectedItems.map((item) => ({ ...item, isChecked: false })),
      ]);
      setSecondList((prevSecondList) =>
        prevSecondList.filter((item) => !item.isChecked)
      );
    } else if (direction === "right") {
      const selectedItems = firstList.filter((item) => item.isChecked);
      setSecondList((prevSecondList) => [
        ...prevSecondList,
        ...selectedItems.map((item) => ({ ...item, isChecked: false })),
      ]);
      setFirstList((prevFirstList) =>
        prevFirstList.filter((item) => !item.isChecked)
      );
    }
  };

  return (
    <div className="transfer-list App">
      <List
        items={firstList}
        handleSelectChange={(index) => handleSelectChange(index, "left")}
      />
      <Action handleAction={handleAction} />
      <List
        items={secondList}
        handleSelectChange={(index) => handleSelectChange(index, "right")}
      />
    </div>
  );
}
