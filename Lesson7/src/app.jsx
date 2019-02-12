import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'; // v3 // hashHistory #

//import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'; //v4

// Импортируем свои модули
import Layout from './layouts/Layout';
import Main from './components/Main';
import Posts from './components/Posts';
import Post from './components/Post';
import Comments from './components/Comments';
import Comment from './components/Comment';
import About from './components/About';
import Contacts from './components/Contacts';
import PageNotFound from './components/PageNotFound';
import './css/app.css';

console.log('Урок 7');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}/>
            <Route path="/posts" component={Posts}>
                <Route path=":postId" component={Post} />
            </Route>
            <Route path="/comments" component={Comments}>
                <Route path=":commentId" component={Comment} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>, document.getElementById('app-place'));

// <Layout>
//     <About />
// </Layout>
