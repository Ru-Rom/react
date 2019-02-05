import React from 'react';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.brand = 'Бложенька';
    }


    isActive(href) {
        return window.location.pathname === href; // Возвращаем результат сравнения текущего адреса
    }

    render() {
        return(
            <div>
                <Menu brand={this.brand}>
                    {/* Для <MenuItem передаем параметры href и active статус, а в children Главная */}
                    <MenuItem href="/" active={this.isActive('/')}>Главная</MenuItem> 
                    <MenuItem href="/posts" active={this.isActive('/posts')}>Список постов</MenuItem>
                    <MenuItem href="/about" active={this.isActive('/about')}>О нас</MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">&copy; 2019</footer>
            </div>
        );
    }
}