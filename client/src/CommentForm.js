import React from 'react';
import app from './index.js'

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            visitor: ""
        }
       
        this.getCommentData = this.getCommentData.bind(this);     //console.log(this.state)
    }

    getCommentData() {
      this.props.addComment(this.state)
      this.setState({comment:'',visitor:''})
    }

    render() {        
        return (
            <div>
                <input type="text" value={this.state.comment}  onChange={(event) => this.setState({comment: event.target.value} )} id="visitor" className="d-inline form-control" placeholder="Visitor" />
                <input type="text" value={this.state.visitor}  onChange={(event) => this.setState({visitor: event.target.value})} id="comment" className="d-inline form-control" placeholder="Enter comment" />
                <button type="button" className="btn btn-primary d-inline btn-city" onClick={this.getCommentData}>Submit</button>
            </div >
        )
    }
}

export default CommentForm;