import React from 'react';
import {connect} from 'react-redux';

import {fetchComments} from '../actions/commentsActions';

import CommentItem from './CommentItem';

class Comment extends React.Component {

    render() {
        const {comments} = this.props;
        console.log(comments);
        return (
            <div>
                {<CommentItem {...comments}/>} 
                {/* а для чего тут было comments && <CommentItem {...comments}/> ?? */}
            </div>
        );

    }

    componentDidMount() {
        this.props.dispatch(fetchComments(this.props.params.commentId));
    }
}

function mapStateToProps (state) { // функция которая объясняет как мы хотим получать переменные из стейта
    return {
        comments: state.comments.comments // (в reducers в index.js import commentsReducer как comment)
    };
}

export default connect(mapStateToProps)(Comment);