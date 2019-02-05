import React from 'react';
import axios from 'axios';

import PostItem from './PostItem';

export default class PostsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [] // Копируем свойство posts из props
        };

        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(response => {
                this.setState({posts: response.data})
            });
    }

    render() {
        if (!this.state.posts.length) {
            return null;
        }

        const posts = this.state.posts.map((post, index) => {
            return <PostItem key={index} {...post}/>; // все свойства post передаем в компонент PostItem
        });
        return(
            <>  
                <h4>Список постов</h4>
                {posts}
            </>
        );
    }
}
