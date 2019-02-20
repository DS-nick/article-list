import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorator/toggleOpen'
import FormComments from './FormComments';


class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    
    render() {

        return (
            <div>
                
                <button onClick = {this.props.toggleOpen}>{!this.props.isOpen? 'show comments' : 'hide comments'}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if(!isOpen) return null
       
        if(!comments.length) return <p>No comments yet</p>
        return (
            <div>
                <FormComments/>
            <ul className= 'comment-list-ul'>
            { comments.map((id) => 
                 <li key = {id} className= 'comment-list-li'><Comment id = {id} /></li>
           )}
            </ul>
            </div>
        )
    }
    
}
export default toggleOpen(CommentList)