import React from 'react';
import {Link} from 'react-router';

const CommentItem = props => {
   
    
    return (
        <div className="card border-secondary mb-3">
            <div className="card-header"><Link to={`/comments/${props.id}`}>{props.name}</Link></div>
            <div className="card-body text-secondary">
                <p>{props.body}</p>
                <p>By: {props.email}</p>
            </div>   
        </div>
    );
    
};

export default CommentItem;