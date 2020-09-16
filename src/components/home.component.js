import React, { Component } from 'react';
import NavBar from "./navbar.component";

export default class Home extends Component{
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div>
                <NavBar data={this.props}/>
                <center><h2>Welcome To My App!!!!!!!!!!!</h2></center>
            </div>
        )
    }
}