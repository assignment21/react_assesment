import React, { Component } from 'react';
import TutorialDataService from "../services/tutorial.service";
import NavBar from "./navbar.component";

export default class GetAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorials : [], 
        }
    }

    componentDidMount() {
        if (! localStorage.getItem('user_token')) {
          this.props.history.push("/signin");
        }
        this.getAllData();
      }

    getAllData() {
        TutorialDataService.getAll().then(response => {
            this.setState({
                tutorials : response.data.content,
            })
        }).catch(error => {});
    }

    ShowRecord(id) {
        console.log('showwwwwwwwwwww',id);
    }
    EditRecord(id) {
        this.props.history.push({ pathname: `/edit/${id}` })
    }
    DeleteRecord(id) {
        console.log('deleteeeeeeeeeeeee',id);
    }

    render() {
        const {tutorials} = this.state;
        return(
           <div>
            <NavBar data={this.props}/>
            <div className="col-md-6">
                <h4>Merchant Listing.. Coming Soon !!!!!!!!!!!!!</h4>
                <ul className="list-group">
                    {tutorials ? (
                        tutorials.map((tutorial, index) => 
                   <li key={index} className="list-group-item">{tutorial.title}
                   
                   <button onClick={() => this.EditRecord(tutorial.id)} className="btn btn-info">
                   Edit
                    </button>
                    <button onClick={() => this.DeleteRecord(tutorial.id)} className="btn btn-danger">
                    Delete
                    </button>
                    <button onClick={() => this.ShowRecord(tutorial.id)} className="btn btn-success">
                        Show
                    </button>
                    </li>
                     )
                    
                    ) : (
                        <li>No Data Found</li>
                    )}                
                </ul>
            </div>
           </div>
        );
    }
}