import React from 'react';
import axios from 'axios';

class Form extends React.Component{

    state = {
        username: "Enter your github username"
    };
    
    handleSubmit = async(event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.username}`);
        alert(JSON.stringify(response));
        console.log(JSON.stringify(response));
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter your name : " value={this.state.username}
                onChange={ event => this.setState({username: event.target.value})}
                ></input>
                <button type="submit">Submit</button>
            </form>
        )
    };
}

export default Form;