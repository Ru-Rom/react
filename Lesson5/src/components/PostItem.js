import React from 'react';

export default class PostItem extends React.Component{
   
    render() {
        return ( // key={index}
            <ul>
                <div className="card border-secondary mb-3">
                    <div className="card-header">{this.props.title}</div>
                    <div className="card-body text-secondary">
                        <p>{this.props.body}</p>
                    </div>   
                </div>
            </ul>
        );
    }
}