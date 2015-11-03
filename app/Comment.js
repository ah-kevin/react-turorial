/**
 * Created by Lennon on 15/11/3.
 */
import React from 'react';

class Comment extends React.Component{
    rawMarkup(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html:rawMarkup};
    }
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
    )
    }
}

export default Comment;