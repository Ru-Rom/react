import React from 'react';
// Или так: import React, {Component} from 'react';
// > class App extends Component
import ReactDOM from 'react-dom';

// Импортируем свои модули
import Login from './Login';
import Menu from './Menu';

class App extends React.Component {
    render() {
        const menuItems = [
            {href: '/', title: 'Главная'},
            {href: '/user_settings', title: 'Личный кабинет'},
            {href: '/', title: 'Меню 1'},
            {href: '/', title: 'Меню 2'},
            {href: '/', title: 'Меню 3'}
        ];

        return (
            <div><Menu menuTitle='Меню' items = {menuItems}/> </div>
        );
    }
}

console.log('Урок 3');

//const newLogin = new Login('Вася', 28);
//const newMenu = new Menu;

ReactDOM.render(<App />, document.getElementById('menu-place'));
ReactDOM.render(<Login />, document.getElementById('login-place'));