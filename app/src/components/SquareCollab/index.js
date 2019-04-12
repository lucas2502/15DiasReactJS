import React, { Component } from 'react';



class SquareCollab extends Component{
    /*constructor(props) {
        super(props);
        this.state = {
            content: "X"
        }
    } = */state = {content: "X"};

    handleClick = () => {
        this.setState(this.state.content === "X" ? {content: "O"} : {content: "X"}); 
    }

    render(){
        return (
            <button 
            onClick={this.handleClick}
            >
            {this.state.content}
            </button>
        )
    }
    
}

export default SquareCollab;