import CommentForm from './CommentForm';
import CommentBox from './CommentBox'
import React from 'react';

class CommentListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] }
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    addComment(comment) {
        this.setState({ comments: this.state.comments.concat(comment) });
    }

    deleteComment(index) {
        this.setState((prevState) => ({
            comments: prevState.comments.filter((item, i) => i !== index)
        }));
    }



    render() {
        const renderComments = this.state.comments.map((comment, index) =>
            < CommentBox comment= { comment } index= { index } deleteComment= { this.deleteComment } key= { index }  /> )
        return (
            <div>
                <CommentForm addComment={this.addComment} /> {renderComments}
            </div>
        );
    }
}
export default CommentListBox;