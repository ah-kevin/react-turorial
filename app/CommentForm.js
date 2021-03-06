/**
 * Created by lennon on 15/11/2.
 */
import React from 'react';
import '../styles/CommentForm.scss';
class CommentForm extends React.Component {
   handleSubmit(e){
        e.preventDefault();
        var author=this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author:author,text:text});
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Your name" ref="author"/>
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        )
    }
}

export default CommentForm