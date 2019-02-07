import React from 'react';
import axios from 'axios';

import CommentItem from './CommentItem';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
            .then(response => {
                this.setState({comment: response.data}); // Обновляем состояние компонента
            });
    }

    render() {
        return (
            <div>
                {this.state.comment && <CommentItem {...this.state.comment}/>}
            </div>
        );

    }
}