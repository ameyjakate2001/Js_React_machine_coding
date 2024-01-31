import React from "react";
interface ActionProps {
  handleAction: (direction: "left" | "right") => void;
}
const Action = ({ handleAction }: ActionProps) => {
  return (
    <div className="action">
      <button onClick={() => handleAction("left")}>Left</button>
      <button onClick={() => handleAction("right")}>Right</button>
    </div>
  );
};
export default Action;
