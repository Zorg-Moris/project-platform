import React, { Component } from 'react';
import MyProjectList from '../../views/myProjectList/myProjectList';
import './myProjectList.css';
import * as projectApi from '../../../Api/projectApi';
import { connect } from 'react-redux';

class MyProjectListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeTogle: true,
            dateToggle: true
        }
    }

    sortLikes = () => {
        if (this.state.likeTogle) {
            this.setState({ likeTogle: false })
        } else {
            this.setState({ likeTogle: true })
        }
        projectApi.sortLikesApi(this.state.likeTogle);
    }

    sortDate = () => {
        if (this.state.dateToggle) {
            this.setState({ dateToggle: false })
        } else {
            this.setState({ dateToggle: true })
        }
        projectApi.sortDateApi(this.state.dateToggle);
    }

    myProjects = () => {
       let userId = this.props.user._id;
       let myProjectList = this.props.projects.filter(function(project) {
               return project.user_id === userId;
        });
        return myProjectList;
    }

    render() {
       
        if (this.props.projects.length) {

            return (
                <div>
                    <h3 align="center">My Projects</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Person</th>
                                <th>Project</th>
                                <th>Description</th>
                                <th><label onClick={ this.sortDate }>Date</label></th>
                                <th colSpan="2">
                                    <label onClick={ this.sortLikes }>Likes</label>
                                </th>
                                <th colSpan="2">Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            <MyProjectList projects={ this.myProjects() } user={ this.props.user }></MyProjectList>
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <div> NO project </div>
        }
    }
}


const mapStateToProps = function (store) {
   return {
        projects: store.projectState.projects,
        user: store.authenticationState.user
    };
};

export default connect(mapStateToProps)(MyProjectListContainer);