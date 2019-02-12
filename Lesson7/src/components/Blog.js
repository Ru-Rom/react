/*

В файле Blog.js: подключите к данному файлу модуль Post.js. Здесь вы должны обработать переданные модулем App.js посты (массив с объектами), 
трансформируя объекты массива в презентабельный JSX-код (HTML-код с использованием css-стилей). 
Процесс преобразования (т.е. использование метода map()) проходит в файле Blog.js, 

а JSX-код («HTML-код») для каждого индивидуального поста генерируется в Post.js (для этого мы его и подключили в Blog.js), 
которому вы будете передавать свойства преобразуемых объектов в виде props’ов.

*/

import React from 'react';

import Post from './Post';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts // Копируем свойство posts из props
        };
    }

    render() {
        console.log(this.state.posts);
        const items = this.state.posts.map((item, index) => {
            return (
                <div key={index}>
                    <Post postTitle={item.title} postTxt={item.txt} />
                </div>
            );
        });
        return (
            <>{items}</>
            
        );
    }
}

