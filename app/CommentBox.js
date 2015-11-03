/**
 * Created by lennon on 15/11/2.
 */
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import '../styles/CommentBox.scss';

class CommentBox extends React.Component{
    constructor() {
        super();
        this.state={data:[]}
    }
    loadCommentsFromServe(){
        $.ajax({
            url:this.props.url,
            dataType:'json',
            cache: false,
            success: (data)=>{
                this.setState({data: data});
            },
            error: (xhr, status, err)=>{
                console.error(this.props.url, status, err.toString());
            }
        })
    }
    handleCommentSubmit(comment){
        var comments=this.state.data;
        var newComments=comments.concat([comment]);
        this.setState({data:newComments});
        console.log(comment);
        $.ajax({
            url:this.props.url,
            type:'POST',
            dataType:'json',
            data:comment,
            success:(data)=>{
                this.setState({data:data});
            },
            error: (xhr, status, err)=>{
                console.log(this.props);
                console.error(this.props.url, status, err.toString());
            }
        })
    }
    componentDidMount(){
        this.loadCommentsFromServe();
        setInterval(this.loadCommentsFromServe.bind(this),this.props.pollInterval)
    }
    render(){
        return(
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
                <CommentList data={this.state.data}/>
            </div>
        )
    }
}
export default CommentBox;