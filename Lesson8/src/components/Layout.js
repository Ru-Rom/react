import React, {useState} from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';

const Layout = props => {
    
    function isActive(href) {
        return window.location.pathname === href; // Возвращаем результат сравнения текущего адреса
    }
    
    return(
        <div>
            <Menu brand={props.brand}>
                {/* Для <MenuItem передаем параметры href и active статус, а в children Главная */}
                <MenuItem href="/" active={isActive('/')}>Главная</MenuItem> 
                <MenuItem href="/posts" active={isActive('/posts')}>Список постов</MenuItem>
                <MenuItem href="/comments" active={isActive('/comments')}>Список комментариев</MenuItem>
                <MenuItem href="/about" active={isActive('/about')}>О нас</MenuItem>
                <MenuItem href="/contacts" active={isActive('/contacts')}>Связь с нами</MenuItem>
            </Menu>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {props.children}
                    </div>
                </div>
            </div>
            <footer className="card-footer">&copy; 2019</footer>
        </div>
    );
};

export default Layout;