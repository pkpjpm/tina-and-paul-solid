import { combineReducers } from "redux";
import { aboutReducer } from './about/aboutActions';

const rootReducer = combineReducers({ aboutReducer });
export default rootReducer;