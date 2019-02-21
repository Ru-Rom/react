import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const Menu = props => {
    
    const {brandName} = props.settings;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">{brandName}</Link>

                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        {props.children}
                    </ul>
                </div>
            </div>
        </nav>
    );
    
}

function mapStateToProps (state) { // функция которая объясняет как мы хотим получать переменные из стейта
    return {
        settings: state.settings.settings, // в reducers в index.js import commentsReducer как comment
    };
}

export default connect(mapStateToProps)(Menu);