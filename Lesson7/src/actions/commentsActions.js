import axios from 'axios';

export function fetchComments(commentId) {
    return function(dispatch) {
        let url = 'https://jsonplaceholder.typicode.com/comments/';

        (commentId) ? (url = url + commentId) : url;

        dispatch({type: 'FETCH_COMMENTS'}); // Диспетчер передает экшены и данные редьюсерс
    
        axios.get(url)
            .then((response) => {
                dispatch({type: 'FETCH_COMMENTS_FULFILLED', payload: response.data
                });
                console.log('Получили данные от API: ', response.data[0].email);
            })
            .catch((err) => {
                dispatch({type: 'FETCH_COMMENTS_REJECTED', payload: err});
            });
    };
}
