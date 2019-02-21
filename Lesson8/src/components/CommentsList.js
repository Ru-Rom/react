import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/commentsActions';
import CommentItem from './CommentItem';

const CommentsList = props => {
    useEffect(() => {
        
        props.dispatch(fetchComments());
    }, {});

    const {comments} = props;
   
    if (!comments.length) {
        return null;
    }

    const mappedComments = comments.map((comment, index) => {
        return <CommentItem key={index} {...comment}/>;
    });
        
    return(
        <>  
            <h4>Список комментариев</h4>
            {mappedComments}
        </>
    );
};

function mapStateToProps (state) { // функция которая объясняет как мы хотим получать переменные из стейта
    return {
        comments: state.comments.comments // (в reducers в index.js import commentsReducer как comment)
    };
}

export default connect(mapStateToProps)(CommentsList);
