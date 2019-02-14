import React from 'react';

import CommentsList from './CommentsList';

export default class Comments extends React.Component {
    
    render() {
        // Ниже, если this.props.children null то выводим список комментариев, иначе children
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
