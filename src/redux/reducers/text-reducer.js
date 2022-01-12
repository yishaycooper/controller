import { removeText, addText } from "../action-types";

const initial_state = {
  textValue: "WWWW",
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case addText: {
      return {
        ...state,
        textValue: action.payload,
      };
    }
    case removeText: {
      return {
        ...state,
        textValue: "",
      };
    }
    default:
      return state;
  }
}
