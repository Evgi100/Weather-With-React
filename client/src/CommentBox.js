
import React from 'react';

const CommentBox = (props) => {
   
    return (
        < div >    
        Written by: {props.comment.comment} -{props.comment.visitor}
            < span className="glyphicon glyphicon-trash commentsTrash" onClick={() => { props.deleteComment(props.index) }}></span >
        </div >
    );
}



export default CommentBox;