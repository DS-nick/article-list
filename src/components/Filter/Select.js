import React, {Component} from 'react'
import DataRange from './DataRange'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import {changeSelection} from '../../AC'
import {mapToArr} from '../../helpers'


 class SelectFilter extends Component {

    state = {
		selection: null
	}

    

    render() {
        const {changeSelection, selection, articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <Select options = {options} value = {selection} 
			onChange =  {this.handleSelection}
			multi ={true}/>
			
        )
    }
    
    handleSelection = selection => this.props.changeSelection(selection.map(option => option.value))
}

export default connect((state) => ({
    articles: mapToArr(state.articles),
   selection: state.filters.selected
}),{changeSelection})(SelectFilter)