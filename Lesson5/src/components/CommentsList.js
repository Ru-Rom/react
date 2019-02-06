import React from 'react';
import axios from 'axios';

import CommentItem from './CommentItem';

export default class CommentsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [] // Копируем свойство posts из props
        };

        axios.get('https://jsonplaceholder.typicode.com/comments/')
            .then(response => {
                this.setState({comments: response.data}); // Обновляем состояние компонента
            });
    }

    render() {
        if (!this.state.comments.length) {
            return null;
        }

        const comments = this.state.comments.map((comment, index) => {
            return <CommentItem key={index} {...comment}/>; // все свойства post передаем в компонент PostItem
        });
        return(
            <>  
                <h4>Список комментариев</h4>
                {comments}
            </>
        );
    }
}
