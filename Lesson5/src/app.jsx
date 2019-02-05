import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'; // v3 // hashHistory #

//import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'; //v4

// Импортируем свои модули
import Layout from './layouts/Layout';
import Main from './components/Main';
import Posts from './components/Posts';
import Post from './components/Post';
import About from './components/About';
import Contacts from './components/Contacts';
import PageNotFound from './components/PageNotFound';
import './css/app.css';

console.log('Урок 5');

const blogPosts = [
    {title: 'Заголовок поста 1', txt: 'Содержимое поста 1'},
    {title: 'Заголовок поста 2', txt: 'Содержимое поста 2'},
    {title: 'Заголовок поста 3', txt: 'Содержимое поста 3'}
];

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}/>
            <Route path="/posts" component={Posts}>
                <Route path=":postId" component={Post} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>, document.getElementById('app-place'));

// <Layout>
//     <About />
// </Layout>
