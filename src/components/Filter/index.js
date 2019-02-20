import React, {Component} from 'react'
import DataRange from './DataRange'
import SelectFilter from './Select'


export default class Filter extends Component {

    render() {
        const {articles} = this.props
        return (
            <div>
            <SelectFilter articles = {articles}/>
            <DataRange/>
            </div>
        )
    }
}