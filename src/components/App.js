import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'

import UserForm from './UserForm'
import Filter from './Filter'
import Counter from './Counter'
import Header from './Header/index'


class App extends Component {
    static propTypes = {

    };

    render() {
        const {articles} = this.props

        return (
            <div>
                <Header />
               
               <Filter />
                <ArticleList />
                
            </div>
        )
    }
}

export default App