import React from 'react';
import {Link} from 'react-router';

import MenuItem from './MenuItem';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts // Копируем свойство posts из props
        };
    }

    render() {
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">{this.props.brand}</Link>

                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
