import { combineReducers } from "redux";
import TextReducer from "./text-reducer";
import ButtonReducer from "./button-reducer";

export default combineReducers({ TextReducer, ButtonReducer });
