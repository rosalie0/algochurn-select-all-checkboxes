# Select All Checkboxes

Given a Select All checkbox - toggle the children's checkboxes in such a way that when the select all button is clicked, all the boxes are checked. Similarly, when the button is toggled, the checkboxes become unchecked.

User Stories 0. Create a Checkbox component that takes in checked, onChange and label as props.

1. A select all checkbox should be there that toggles the state of all the children checkboxes.
2. Any of the individual checkboxes should have their own state. That means if any of the checkboxes is checked, it should reflect.
3. If any one of the checkboxes is NOT selected, the select all checkbox should be unchecked.
4. If all the checkboxes are selected, the select all checkbox should be checked.
5. Loop through the given listItems array that follows the following structure.
