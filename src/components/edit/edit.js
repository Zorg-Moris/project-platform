import React, { Component } from 'react';
import * as projectApi from '../../Api/projectApi';
import './editStyle.css';


class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messge: false
        }

        this.personNameInput = React.createRef();
        this.projectNameInput = React.createRef();
        this.descriptionInput = React.createRef();
    };


    componentDidMount() {
        this.getData();
    }


    async getData() {
        let projectInfo = await projectApi.getProjectDataDb(this.props.match.params.id);

        let { _id, user_name, user_id, project_name, like, dizlike, date, description } = projectInfo;

        this.personNameInput.current.value = user_name;
        this.projectNameInput.current.value = project_name;
        this.descriptionInput.current.value = description;
        this.like = like;
        this.dizlike = dizlike;
        this.date = date;
        this.user_id = user_id;
        this._id = _id;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const projectInfo = {
            _id: this._id,
            user_id: this.user_id,
            user_name: this.personNameInput.current.value,
            project_name: this.projectNameInput.current.value,
            description: this.descriptionInput.current.value,
            date: this.date,
            like: this.like,
            dizlike: this.dizlike
        };
        this.checkInfo(projectInfo);
    }


    async checkInfo(projectInfo) {
        let info = await projectApi.updateInfoProject(projectInfo, this.props.match.params.id);
        if (info) {
            this.setState({ messge: "successfully" });
            setTimeout(() => {
                this.props.history.push('/myproject');
            }, 2000);
        } else {
            this.setState({ messge: "file is not edited" })
        }
    }


    render() {
        return (
            <div style={ { marginTop: 10 } }>
                <h3 align="center">Update project</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Person Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            ref={this.personNameInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Project Name: </label>
                        <input type="text"
                            className="form-control"
                            ref={this.projectNameInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Project description: </label>
                        <textarea type="text"
                            className="form-control"
                            ref={this.descriptionInput}
                            onChange={ this.onchangeDataInput }
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit"
                            value="Update Progect Info"
                            className="btn btn-primary"
                        >Update Progect Info</button>
                    </div>
                </form>
                <div>{ this.state.messge }</div>
            </div>
        )
    }
}

export default Edit;