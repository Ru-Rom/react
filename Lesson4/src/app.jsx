/*

В главном файле App.js: подключите компоненты Blog и WelcomeModal, 
далее создайте массив с постами (объекты с различными свойствами, т.е. 
title/заголовок поста, postBody/текст поста и т.п. ) для блога и передайте его компоненту Blog (Blog.js). 
Метод ReactDOM.render() указывается только в App.js.

*/

import React from 'react';
// Или так: import React, {Component} from 'react';
// > class App extends Component
import ReactDOM from 'react-dom';

// Импортируем свои модули
import Blog from './components/Blog';
import WelcomeModal from './components/WelcomeModal';
import './css/app.css';

console.log('Урок 4');

const blogPosts = [
    {title: 'Заголовок поста 1', txt: 'Содержимое поста 1'},
    {title: 'Заголовок поста 2', txt: 'Содержимое поста 2'},
    {title: 'Заголовок поста 3', txt: 'Содержимое поста 3'}
];

ReactDOM.render(<WelcomeModal />, document.getElementById('modal-place'));
ReactDOM.render(<Blog posts={blogPosts}/>, document.getElementById('blog-place'));
