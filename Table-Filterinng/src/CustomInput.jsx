const CustomInput = ({ label, filterQuery, onChange, selectKey, keyValue }) => {
  return (
    <div className="input-section">
      <label htmlFor={label}>Average {label}</label>
      <div className="select-input">
        <select
          name={label}
          id={selectKey}
          onChange={(e) => onChange(selectKey, e.target.value)}
        >
          <option value="lessThan">Less Than</option>
          <option value="greaterThan">Greater Than</option>
          <option value="equalsTo">Equals To</option>
        </select>
        <input
          type="number"
          id={label}
          min={1}
          max={100}
          value={filterQuery[keyValue]}
          onChange={(e) => onChange(keyValue, e.target.value)}
        />
      </div>
    </div>
  );
};
export default CustomInput;
