import * as actions from '../actions/actionCreator';


const initialState = {
    words: null,
    favouriteWords: [],
    loading: false

};

const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_WORD: {
            return {
                ...state,
                loading: action.loading,
                words: action.words,
            }
        }
        case actions.FAV_WORD: {
            return {
                ...state,
                loading: action.loading,
                favouriteWords: [...state.favouriteWords, action.favouriteWords],
            }
        }
        case actions.REMOVE_FAV_ITEM: {
            return {
                ...state,
                loading: action.loading,
                favouriteWords: [
                    ...state.favouriteWords.filter((words) => words.id !== action.id)
                ]
            }
        }
    }
    return state;
}


export default wordReducer