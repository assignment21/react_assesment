import React, { Component } from 'react';
import TutorialDataService from '../services/tutorial.service';
import NavBar from "./navbar.component"

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.signinSubmit = this.signinSubmit.bind(this);
        this.newTutorial = this.newTutorial.bind(this);
        this.state = {
            email : "",
            password : "",
            role : "",
            submit : false,
        };
    } 

    componentDidMount() {
        if (localStorage.getItem('user_token')) {
            this.props.history.push(`/add`);
        }
    }

    changeEmail(e) {
        this.setState({
            email : e.target.value
        });
    }

    changePassword(e) {
        this.setState({
            password : e.target.value
        });
    }

    onChangeRole(e) {
        this.setState({
            role : e.target.value
        });
    }

    newTutorial() {
        this.setState({
            submit : false,
        })
    }

    signinSubmit() {
        var formData = {
            email : this.state.email,
            password : this.state.password,
            role : this.state.role
        };
        TutorialDataService.signin(formData).then(response => {
           if (response.data.statusCode == '200') {
                localStorage.setItem('user_token',response.data.data.token);
                this.props.history.push(`/getall`);
           } else {
            this.props.history.push(`/signin`);
           }
        }).catch(error => {
            this.setState({
                submit : true,
            })
        });
    }

    render() {
        return(
        <div>
            <NavBar />
            <div className="submit-form">
                {this.state.submit ? (
                     <div>
                        <h4>Something Went Wrong !!!!!!!!!!!!!!!</h4>
                        <button className="btn btn-success" onClick={this.newTutorial}>
                        Try Again
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <h2>User Sign In</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" required id="email" name="email" className="form-control"
                            value={this.state.email} onChange={this.changeEmail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" required id="password" name="password" className="form-control"
                            value={this.state.password} onChange={this.changePassword} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Role</label>
                            <select id="role" name="role" className="form-control" value={this.state.role} onChange={this.onChangeRole}>
                                <option >Select Role</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <button onClick={this.signinSubmit} className="btn btn-danger">
                            Signin
                        </button>
                    </div>
                )}
            </div>
            </div>
        )
    }
}