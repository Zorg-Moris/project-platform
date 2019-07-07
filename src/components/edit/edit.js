import React, { Component } from 'react';
import * as projectApi from '../../server/projectApi';
import './editStyle.css';
import { connect } from 'react-redux';


class Edit extends Component {

    componentDidMount() {
        this.getData();
    }


    async getData() {
        let projectInfo = await projectApi.getProjectDataDb(this.props.match.params.id);
        console.log(projectInfo);

        let { person_name, project_name, description } = projectInfo;

        this.refs.personNameInput.value = person_name;
        this.refs.projectNameInput.value = project_name;
        this.refs.descriptionInput.value = description;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const projectInfo = {
            person_name: this.refs.personNameInput.value,
            project_name: this.refs.projectNameInput.value,
            description: this.refs.descriptionInput.value
        };

        projectApi.updateInfoProject(projectInfo, this.props.match.params.id);
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update project</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            ref="personNameInput"
                        />
                    </div>
                    <div className="form-group">
                        <label>Project Name: </label>
                        <input type="text"
                            className="form-control"
                            ref="projectNameInput"
                        />
                    </div>
                    <div className="form-group">
                        <label>Project description: </label>
                        <textarea type="text"
                            className="form-control"
                            ref="descriptionInput"
                            onChange={this.onchangeDataInput}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit"
                            value="Update Progect Info"
                            className="btn btn-primary"
                        >Update Progect Info</button>
                    </div>
                </form>
            </div>
        )
    }
}


let mapStateToProps = function (store) {
    return {
        progect: store.projectState.progect
    };
};

export default connect(mapStateToProps)(Edit);