import { list } from "../list";

export default function Checkbox() {
  console.log(list);
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Checkboxes</h1>
      <form>
        {list.map((item) => (
          <div key={item.id} style={{ padding: "1rem" }}>
            <input
              type="checkbox"
              id={item.name}
              name={item.name}
              value={item.name}
            />
            <label htmlFor={item.name}>{item.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}
