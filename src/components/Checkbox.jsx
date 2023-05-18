// Create a Checkbox component that takes in checked, onChange and label as props.
export default function Checkbox({ checked, onChange, label }) {
  const handleChange = (event) => {
    console.log(event.target.checked);
    // propagage checked value upwards
    onChange && onChange(event.target.checked);
  };
  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
