import React from 'react';

import PostsList from './PostsList';

export default class Posts extends React.Component {
    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<PostsList />)
                        :
                        (this.props.children)
                }
            </div>
            
        );
    }
}
