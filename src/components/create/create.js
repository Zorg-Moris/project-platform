import React, { Component } from 'react';
import * as projectApi from '../../Api/projectApi';
import * as authApi from '../../Api/authApi';


class Create extends Component {
    constructor(props) {
        super(props);

        this.projectNameInput = React.createRef();
        this.descriptionInput = React.createRef();
    }


    onSubmit = (e) => {
        e.preventDefault();

        let userInfo = authApi.getAuthApi();
        let { _id, user_name } = userInfo;
        let projectInfo = {
            user_id: _id,
            user_name: user_name,
            project_name: this.projectNameInput.current.value,
            description: this.descriptionInput.current.value,
        };

        projectApi.createProject(projectInfo);

        this.projectNameInput.current.value = "";
        this.descriptionInput.current.value = "";
    }


    render() {
        return (
            <div style={ { marginTop: 10, marginLeft: 10 } }>
                <h3>Add Project</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Project Name: </label>
                        <input type="text"
                            ref={ this.projectNameInput }
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Project Description: </label>
                        <textarea type="text"
                            className="form-control"
                            ref={ this.descriptionInput } />
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

export default Create;