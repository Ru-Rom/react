import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';

import Layout from './components/Layout';
import Main from './components/Main';
import About from './components/About';
import Contacts from './components/Contacts';
import PageNotFound from './components/PageNotFound';
import Comments from './components/Comments';
import Comment from './components/Comment';


const app = document.getElementById('app-place');

ReactDOM.render(// Provider делает доступным store в окруженных им компонентах

    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Main}/>
                {/* <Route path="/posts" component={Posts}>
                    <Route path=":postId" component={Post} />
                </Route> */}
                <Route path="/comments" component={Comments}>
                    <Route path=":commentId" component={Comment} />
                </Route>
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route path="*" component={PageNotFound} />
            </Route>
        </Router>
    </Provider>, app);
