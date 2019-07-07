import React, { Component } from 'react';
import * as projectApi from '../../server/projectApi';
import { connect } from 'react-redux';

class Create extends Component {

    onSubmit = (e) => {
        e.preventDefault();

        const projectInfo = {
            person_name: this.refs.personNameInput.value,
            project_name: this.refs.projectNameInput.value,
            description: this.refs.descriptionInput.value,
            upLoadLink: this.refs.upLoadInput.files[0].name
        };

        projectApi.createProject(projectInfo);

        console.log("start function onSubmit -", projectInfo.upLoadLink);

        this.refs.personNameInput.value = "";
        this.refs.projectNameInput.value = "";
        this.refs.descriptionInput.value = "";  
    }

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10 }}>
                <h3>Add Project</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input type="text"
                            className="form-control"
                            ref="personNameInput" />
                    </div>
                    <div className="form-group">
                        <label>Project Name: </label>
                        <input type="text"
                            ref="projectNameInput"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Project Description: </label>
                        <textarea type="text"
                            className="form-control"
                            ref="descriptionInput" />

                       <div className="form-group">
                           <input className="form-control"  
                                  ref="upLoadInput" type="file" />
                         </div>

                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Create"
                            className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
};

let mapStateToProps = function (store) {
    return {
        progect: store.projectState.progect
    };
};

export default connect(mapStateToProps)(Create);