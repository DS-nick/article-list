import React, {Component} from 'react'
import './style.css'


export default class FormComments extends Component {

    state = {
        user: '',
        text: ''
    }

    render() {

        return (
            <div>
            <form onSubmit = {this.handleSubmit} >
            User: <input type='text' 
                    value = {this.state.user}
                    onChange = {this.handleChange('user')}
                    className={this.getClassName('user')}/>
            Comment: <input type='text' value = {this.state.text}
                    onChange = {this.handleChange('text')}
                    className={this.getClassName('text')}/>
            <input type = 'submit' 
            value = 'submit'/>

            </form>

            </div>
        )
        
    }
    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ?
    'form-input__error' : ''


    handleChange = type => ev => {
        const {value} = ev.target
        if(value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
    
}
const limits = {

    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 30
    }

}