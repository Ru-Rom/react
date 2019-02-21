import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component{
   
    render() {
        return ( // либо <li className={`nav-item ${this.props.active && 'active'}`}>
            <>
                <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to={this.props.href}>
                        {this.props.children}
                    </Link>
                </li>
            </>
        );
    }
}