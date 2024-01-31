const InputField = ({ inputText, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by breed name"
      value={inputText}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default InputField;
