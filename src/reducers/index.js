import {SET_BOOKS_TO_THE_LISTS} from '../constants/action-types';

const initialState = {
    books: []
};

export default (state = initialState, action) => {
    if (action.type === SET_BOOKS_TO_THE_LISTS) {
        return Object.assign(
            {},
            state,
            {
                books: [...action.payload.slice(0, 10)]
            }
        )
    }

    return state;
};
