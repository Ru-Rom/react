import React from 'react';
import axios from 'axios';

import PostItem from './PostItem';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then(response => {
                this.setState({post: response.data}); // Обновляем состояние компонента
            });
    }

    render() {
        return (
            <div>
                {this.state.post && <PostItem {...this.state.post}/>}
            </div>
        );

    }
}