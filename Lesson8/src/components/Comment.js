import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/commentsActions';
import CommentItem from './CommentItem';

const Comment = props => {
    const {comments} = props;

    useEffect(() => {
        props.dispatch(fetchComments(props.params.commentId));
    }, {}); // , {} как 2-й аргумент для useEffect ставится что бы useEffect выполнялся только при mount и unmount (useEffect run after every render), или так , [count]); // Only re-run the effect if count changes
    
    return (
        <div>
            {<CommentItem {...comments}/>} 
 
        </div>
    );

};

function mapStateToProps (state) { // функция которая объясняет как мы хотим получать переменные из стейта
    return {
        comments: state.comments.comments // (в reducers в index.js import commentsReducer как comment)
    };
}

export default connect(mapStateToProps)(Comment);