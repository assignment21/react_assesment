import React, { Component } from 'react';
import TutorialDataService from "../services/tutorial.service";
import NavBar from "./navbar.component";
import toastr from "toastr";

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted : false,
            title : "",
            description : "",
            success_msg : "",
        }
        this.updateTutorial = this.updateTutorial.bind(this);
    }

    componentDidMount() {
        if (! localStorage.getItem('user_token')) {
            this.props.history.push("/signin");
          }

        this.edit_id = this.props.match.params.id;
        TutorialDataService.getRecordForEdit(this.edit_id).then(response => {
            this.setState({
                title : response.data.content.title,
                description : response.data.content.description,
            })
        }).catch(error => {});
    }

    updateTutorial() {
        var form_data = {
            title : this.state.title,
            description : this.state.description,
            id : this.edit_id,
        }
        TutorialDataService.storeEditRecord(form_data).then(response => {
           if (response.data.status === 'success') {
            toastr.success(response.data.content);
                this.setState({
                    submitted : true,
                    success_msg : response.data.content,
                });
                // this.props.history.push(`/getall`);
           } else {
            toastr.error("Something Went Wrong !!!!!!!!!!");
           }
        }).catch(error => {});
    }

    onChangeTitle(e) {
        this.setState({
            title : e.target.value,
        })
    }
    onChangeDescription(e) {
        this.setState({
            description :  e.target.value,
        })
    }

    render() {
        const { submitted, success_msg } = this.state;
        return(
            <div>
                <NavBar/>
                <div className="submit-form">
          {submitted ? (
            <div>
              <h4>{success_msg}</h4>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle.bind(this)}
                  name="title"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription.bind(this)}
                  name="description"
                />
              </div>
  
              <button onClick={this.updateTutorial} className="btn btn-success">
                Update
              </button>
            </div>
          )}
        </div>

            </div>
        )
    }
}