import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorator/accordion'
import {connect} from 'react-redux'
import {filtrateArticlesSelector} from '../selectors'
import './style.css'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }
    render() {
        const { articles, openItemId, toggleOpenItem } = this.props
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul className = 'article-list-ul'>
                {articleElements}
            </ul>
        )
    }
}

export default connect((state) => {
    
    return {articles: filtrateArticlesSelector(state)}
})(accordion(ArticleList))