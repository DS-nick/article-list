import React from 'react'
import {connect} from 'react-redux'


function Comment({comment}) {
    console.log(comment)
    return (
        <div>
           
            <p>{comment.text} <b>by {comment.user}</b></p> 
        </div>
    )
}

export default connect((state, ownProps) => {
    
    return {
    comment:  state.comments[ownProps.id]}
    
})(Comment)