import React, { Component } from 'react';
import TutorialDataService from "../services/tutorial.service";
import NavBar from "./navbar.component"

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.signupSubmit   =   this.signupSubmit.bind(this);
        this.againSignup = this.againSignup.bind(this);
        this.state = {
            first_name            :   "",
            last_name            :   "",
            email           :   "",
            password        :   "",
            phone           :   "",
            signupSubmit    :   false,
            role            :   "",
        };
    }

    componentDidMount() {
        if (localStorage.getItem('user_token')) {
            this.props.history.push(`/add`);
        }
    }

    onChangeFirstName(e) {
        this.setState({
            first_name : e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name : e.target.value
        });
    }
    
    onChangeEmail(e) {
        this.setState({
            email : e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password : e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone : e.target.value
        });
    }

    onChangeRole(e) {
        this.setState({
            role : e.target.value
        });
    }

    againSignup() {
        this.setState({
            signupSubmit : false,
        })
    }

    signupSubmit() {
        var formData = {
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            email : this.state.email,
            password : this.state.password,
            phone : this.state.phone,
            role : this.state.role
        };

        TutorialDataService.signup(formData).then(response => {
           
           if (response.data.statusCode === 200) {
             this.props.history.push(`/signin`);
           } else {
            this.props.history.push(`/signup`);
           }
           
        }).catch(error => {
            this.setState({
                signupSubmit : true,
            });
        });
    }

    render(){
        return(
        <div>
        <NavBar/>
            <div className="submit-form">
                {this.state.signupSubmit ? (
                    <div>
                        <h4>Something Went Wrong !!!!!!!!!!!!!!</h4>
                        <button className="btn btn-success" onClick={this.againSignup}>
                            Try Again
                        </button>
                   </div>
                ) : (
                    <div>
                        
                        <div>
                        <div className="form-group">
                            <h2>User Registration</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input type="text" className="form-control" id="first_name" name="first_name" required 
                            value={this.state.first_name} onChange={this.onChangeFirstName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Name</label>
                            <input type="text" className="form-control" id="last_name" name="last_name" required 
                            value={this.state.last_name} onChange={this.onChangeLastName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required name="email" className="form-control" 
                            value={this.state.email} onChange={this.onChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" name="password" required
                            type="password" value={this.state.password} onChange={this.onChangePassword} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Phone</label>
                            <input type="number" id="phone" required name="phone" className="form-control" 
                            value={this.state.phone} onChange={this.onChangePhone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Role</label>
                            <select id="role" name="role" className="form-control" value={this.state.role} onChange={this.onChangeRole}>
                                <option >Select Role</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <button onClick={this.signupSubmit} className="btn btn-info">
                            Signup
                        </button>
                        </div>
                    </div>
                )}
            </div>
            </div>
        )
    }
}