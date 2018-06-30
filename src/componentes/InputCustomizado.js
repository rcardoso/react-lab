import React, {Component} from "react";
import Topics from '../utils/Topics'
import "../css/App.css";

class InputCustomizado extends Component{
    
    constructor(){
        super()
        this.state = {errorMsg:""}
    }

    componentDidMount(){
        Topics.AUTHOR_FORM_ERRORS.subscribe(function(error){
            if(error.field === this.props.name){
                this.setState({errorMsg:error.defaultMessage});
            }
        }.bind(this))

        Topics.AUTHOR_FORM_ERRORS_CLEAN.subscribe(function(){
            this.setState({errorMsg:""})
        }.bind(this))
    }
    
    render(){
        return(
            <div className="pure-control-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
                <span className="error-message pure-form-message-inline">{this.state.errorMsg}</span>
            </div>
        )
    }
}

export default InputCustomizado;