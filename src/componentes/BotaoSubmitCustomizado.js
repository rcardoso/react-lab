import React, {Component} from "react";

class BotaoSubmitCustomizado extends Component{
   render(){
       return(
       <div className="pure-controls">
            <button type="submit" className="pure-button pure-button-primary">{this.props.label}</button>
       </div>
       );
   } 
}

export default BotaoSubmitCustomizado;