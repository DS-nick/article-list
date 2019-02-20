import React, {Component} from 'react'


export default class UserForm extends Component {

    state = {
        inputValue: ''
    };

    render() {
        
        return (
            <div>
                Name: <input type='text' value = {this.state.inputValue} onChange = {this.handleChange}/>
            </div>
        )

    }
    handleChange =(ev) => {
        this.setState({
            inputValue: ev.target.value
        })
    }
	
}