import React from 'react';
// Или так: import React, {Component} from 'react';
// > class App extends Component
import ReactDOM from 'react-dom';

// Импортируем свои модули
import Login from './Login';
import Menu from './Menu';



console.log('Урок 3');

//const newLogin = new Login('Вася', 28);
//const newMenu = new Menu;

ReactDOM.render(<Menu menuTitle='Меню' />, document.getElementById('menu-place'));
ReactDOM.render(<Login />, document.getElementById('login-place'));