import React from 'react';

import CommentsList from './CommentsList';

export default class Comments extends React.Component {
    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<CommentsList />)
                        :
                        (this.props.children)
                }
            </div>
            
        );
    }
}
