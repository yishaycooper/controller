import { toggleProperty } from "../action-types";

const initial_state = { propertyEnabled: false };

export default function (state = initial_state, action) {
  switch (action.type) {
    case toggleProperty:
      return {
        ...state,
        propertyEnabled: !state.propertyEnabled,
      };

    default:
      return state;
  }
}
