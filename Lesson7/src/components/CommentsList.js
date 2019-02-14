import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/commentsActions';

import CommentItem from './CommentItem';

class CommentsList extends React.Component {
    fetchComments() {
        this.props.dispatch(fetchComments()); // Функция получения данных, выдающая массив объектов(коментариев)
    } 

    render() {
        const {user, comments} = this.props;
        console.log('list render', comments);
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
    }

    componentDidMount() {
        this.props.dispatch(fetchComments());
    }
}

function mapStateToProps (state) { // функция которая объясняет как мы хотим получать переменные из стейта
    return {
        comments: state.comments.comments // (в reducers в index.js import commentsReducer как comment)
    };
}

export default connect(mapStateToProps)(CommentsList);
