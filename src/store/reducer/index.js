import { combineReducers } from 'redux';
import wordReducer from './words';


const rootReducer = combineReducers({
    word: wordReducer,
})

export default rootReducer;