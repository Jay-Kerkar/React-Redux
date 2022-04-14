import { combineReducers } from "redux";
import balance from './balance'

const reducers = combineReducers({
    balance: balance
})

export default reducers