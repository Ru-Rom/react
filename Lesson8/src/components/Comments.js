import React from 'react';

import CommentsList from './CommentsList';

const Comments = props => {
    
    
    // Ниже, если this.props.children null то выводим список комментариев, иначе children
    return (
        <div>
            {
                (!props.children) ?
                    (<CommentsList />)
                    :
                    (props.children)
            }
        </div>
            
    );
    
};

export default Comments;