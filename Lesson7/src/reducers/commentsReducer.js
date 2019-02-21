export default function reducer(state={
    comments: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
    case 'FETCH_COMMENTS': { // Получили от диспетчера экшен:
        return {...state, fetching: true}; // Поставили статус fetching-а в тру
    }
    case 'FETCH_COMMENTS_REJECTED': {
        return {...state, fetching: false, error: action.payload};
    }
    case 'FETCH_COMMENTS_FULFILLED': {
        return {
            ...state,
            fetching: false,
            fetched: true,
            comments: action.payload,
        };
    }
    }

    return state;
}
