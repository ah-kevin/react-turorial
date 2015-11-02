/**
 * Created by lennon on 15/11/2.
 */
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import '../styles/CommentBox.scss';
class CommentBox extends React.Component{
    render(){
        return(
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        )
    }
}
export default CommentBox;