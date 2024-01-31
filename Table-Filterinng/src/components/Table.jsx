import { useState } from "react";

const Table = ({ data, handleSortBy }) => {
  const [sortQuery, setSortQuery] = useState({
    key: null,
    dir: "asc",
  });

  const handleSortClick = (key) => {
    const newSortQuery = { key, dir: "asc" };
    if (sortQuery.key === key && sortQuery.dir === "asc")
      newSortQuery.dir = "desc";
    setSortQuery(newSortQuery);
    handleSortBy(key, newSortQuery.dir);
  };

  const getArrow = (key) => {
    {
      if (sortQuery.key === key) {
        return sortQuery.dir === "asc" ? <span>↑</span> : <span>↓</span>;
      }
    }
  };
  const renderHeadCell = (label, key) => {
    return (
      <th
        key={key}
        onClick={() => {
          handleSortClick(key);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{label}</span>
          {sortQuery.key === key && getArrow(key)}
        </div>
      </th>
    );
  };
  return (
    <table>
      <thead>
        <tr>
          {renderHeadCell("ID", "id")}
          {renderHeadCell("Breed", "name")}
          {renderHeadCell("Avg. Weight", "avgWeight")}
          {renderHeadCell("Avg Lifespan", "avgLifespan")}
          {renderHeadCell("Avg Height", "avgHeight")}
          {renderHeadCell("Active", "isActive")}
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((dog, index) => {
            return (
              <tr key={dog.id}>
                <td>{dog.id}</td>
                <td>{dog.name}</td>
                <td>{dog.avgWeight}</td>
                <td>{dog.avgLifespan}</td>
                <td>{dog.avgHeight}</td>
                <td>{dog.isActive ? "Yes" : "No"}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default Table;
