import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Menu extends React.Component {
    render() {
        const {brandName} = this.props.settings;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">{brandName}</Link>

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

function mapStateToProps (state) { // функция которая объясняет как мы хотим получать переменные из стейта
    return {
        settings: state.settings.settings, // в reducers в index.js import commentsReducer как comment
    };
}

export default connect(mapStateToProps)(Menu);