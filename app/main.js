/**
 * Created by lennon on 15/11/2.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import CommentBox from './CommentBox';

ReactDOM.render(<CommentBox url="comments.json" pollInterval={2000}/>,document.getElementById('app'));
