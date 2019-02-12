import axios from 'axios';

export function fetchTweets() {
    return function(dispatch) {
        dispatch({type: 'FETCH_TWEETS'});

        axios.get('http://rest.learncode.academy/api/reacttest/tweets')
            .then((response) => {
                dispatch({type: ' FETCH_TWEETS_FULLFILED',
                    payload: [
                        {id:1, text: 'oh, hi'},
                        {id:2, text: 'you are'}
                    ]
                });
            })
            .catch((err) => {
                dispatch({type: 'FETCH_TWEETS_REJECTED', payload: err});
            });
    };
}