import { addText } from "./action-types";
import { toggleProperty } from "./action-types";

// Called from the component.
// This will connect the action with the reducer
// It will call the reducer and pass in the action.

export const addTextAction = (text) => ({
  type: addText,
  payload: text,
});

export const togglePropertyAction = () => ({
  type: toggleProperty,
});
