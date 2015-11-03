/**
 *
 * Created by lennon on 15/11/2.
 */
import React from 'react';
import '../styles/CommentList.scss';
import Comment from './Comment';
class CommentList extends React.Component{
    render() {
        var commentNodes=this.props.data.map(function (comment) {
           return(
               <Comment author={comment.author}>
                   {comment.text}
               </Comment>
           )
        });
        return (
            <div className="commentList">q'we
                {commentNodes}
            </div>
         )
    }
}

export default CommentList;