import { times } from 'lodash';
import * as actions from '../actions/actionCreator';



export const fetchWord = (word) => {
    return async dispatch => {
        dispatch({
            type: actions.GET_WORD,
            loading: true,
        });
        try {

            await fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 242c952f702d0470d4db34b9dafeff7c102fdcf0'
                },
            }).then(response => response.json())
                .then(data => {
                    console.log('action data', data)
                    dispatch(setWords(data))
                }).catch((error) => {
                    console.error('Error:', error);
                });

        } catch (error) {
            dispatch({
                type: actions.GET_WORD,
                loading: false,
            });
        }
    };
};


const setWords = words => {
    return {
        type: actions.GET_WORD,
        loading: false,
        words,
    };
};


export const toggleFavourite = (item) => {
    return async dispatch => {
        dispatch({
            type: actions.FAV_WORD,
            favouriteWords: {
                item,
                id: Date.now()
            }
        })
    }
}


export const removefromFavStore = (id) => {
    return async dispatch => {
        dispatch({
            type: actions.REMOVE_FAV_ITEM,
            id
        })
    }

}
