/*

В файле Post.js: на основе переданных от Blog.js props’ов напишите JSX-код, который будет генерировать новый пост.

*/


import React from 'react';

export default class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts // Копируем свойство posts из props
        };
    }

    render() {
        return ( // key={index}
            <ul>
                <li className="list-group-item list-group-item-action"><h6>{this.props.postTitle}</h6></li>
                <li className="list-group-item list-group-item-action">{this.props.postTxt}</li>
            </ul>
        );
    }
}