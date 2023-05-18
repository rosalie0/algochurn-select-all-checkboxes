import { useState } from "react";
import { list } from "../list";
import Checkbox from "./Checkbox";

export default function Form() {
  const [listItems, setListItems] = useState(list);

  const handleChecked = (element, checkedValue) => {
    // listItems, instead of just strings, now has an obj for each element.
    // Look for the element in our list that matches this one, and give it a true or false value for its checkedValue.
    // If it's not the one passed in, just leave it as is.
    const adjustedList = listItems.map((curr) =>
      curr.id === element.id ? { ...curr, isChecked: checkedValue } : curr
    );
    setListItems(adjustedList); // our state should now be this altered temp version.
  };

  const selectAllChangeHandler = (checkedValue) => {
    console.log(checkedValue);
    // Make a copy of the list where:
    // All of its elements has a checked value of the given checkedValue.
    const adjustedList = listItems.map((item) => {
      return { ...item, isChecked: checkedValue };
    });
    // set the list to this copy.
    setListItems(adjustedList);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Checkboxes</h1>

      {/* Select All checkbox: */}
      <div style={{ width: "200px", backgroundColor: "lightblue" }}>
        <Checkbox
          label="Select All"
          // If any one of the checkboxes is NOT selected,
          // the select all checkbox should be unchecked.
          checked={
            listItems.filter((ele) => ele?.checked !== true).length < 1
              ? true
              : false
          }
          onChange={(checked) => selectAllChangeHandler(checked)}
        />
      </div>

      {/* Rest of checkboxes: */}
      <form>
        {listItems.map((listItem) => (
          <Checkbox
            label={listItem.name}
            key={listItem.id}
            checked={listItem?.isChecked}
            onChange={(checked) => handleChecked(listItem, checked)}
          />
        ))}
      </form>
    </div>
  );
}
