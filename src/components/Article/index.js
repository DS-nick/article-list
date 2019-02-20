import React, {Component} from 'react'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
//import toggleOpen from '../decorator/toggleOpen'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {deleteArticle} from '../../AC'



 class Article extends Component {
    static defaultProps = {
        articles: PropTypes.object.isRequired
    }

    


render() {
    const {article, isOpen, toggleOpen} = this.props
   
    return (
<div >
    <h3>{article.title}</h3>
    <button onClick = {toggleOpen}>
    {isOpen? 'close' : 'open'}
    </button>
    <button onClick = {this.handleDelete}>Delete me</button>
    <ReactCSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
    {this.getBody()}
    </ReactCSSTransitionGroup>
</div>

    )
}

handleDelete = () => {
    const {deleteArticle, article} = this.props
    deleteArticle(article.id)
}


getBody() {
    const {article, isOpen} = this.props
    if(!isOpen) return null
    
    return <div><section>{article.text}</section><CommentList comments = {article.comments}/></div>
}
}
export default connect(null, {deleteArticle})(Article)