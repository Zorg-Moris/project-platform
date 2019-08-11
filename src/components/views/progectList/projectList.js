import React, { Component } from 'react';
import * as projectApi from '../../../Api/projectApi';
import './projectList.css';
import * as  userApi from '../../../Api/userApi';


class ProjectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: this.props.user.likes
        }
    }

    onDelete = (id) => {
        projectApi.deleteProgectDb(id);
    }

    onSetInfoLike = (idProject, e) => {
        let infolike = e.target.dataset.infolike;
        let user = this.props.user;
// проверить, скорее всего  в редьюсер записывается не правильная инфа сделать как с увеличением лайка
        projectApi.setInfoLike(idProject, infolike);
        userApi.addUserLikeProject(idProject, user._id);

        this.setState({ likes: [...this.state.likes, idProject] });
    }

    checkProjectLike(project) {
        console.log("check project - ", project);
        let project_id = project._id;
        let check = this.state.likes.includes(project_id);
        console.log("check - ", check);
        return check;
    }

    likeContainerAuth(project) {
        let user = this.props.user;
        let checkLikes = this.checkProjectLike(project);

        if (user._id !== project.user_id && checkLikes === false) {
            return (
                <React.Fragment>
                    <td>
                        <label data-infolike="like" onClick={ (e) => this.onSetInfoLike(project._id, e) }> { project.like }</label>
                    </td>
                    <td>
                        <label data-infolike="dizlike" onClick={ (e) => this.onSetInfoLike(project._id, e) }>{ project.dizlike }</label>
                    </td>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <td>
                        <label data-infolike="like"> { project.like }</label>
                    </td>
                    <td>
                        <label data-infolike="dizlike">{ project.dizlike }</label>
                    </td>
                </React.Fragment>
            )
        }
    }

    likeContainer(project) {
        return (
            <React.Fragment>
                <td>
                    <label data-infolike="like"> { project.like }</label>
                </td>
                <td>
                    <label data-infolike="dizlike">{ project.dizlike }</label>
                </td>
            </React.Fragment>
        )
    }

    //https://codeguida.com/post/1304        попробовать сделать карточки как тут 

    render() {
        return (
            <React.Fragment>
                { this.props.projects.map(project => (

                    <tr key={ project._id }>
                        <td>
                            { project.user_name }
                        </td>
                        <td>
                            { project.project_name }
                        </td>
                        <td>
                            { project.description }
                        </td>
                        <td>
                            { project.date }
                        </td>
                        { this.props.user ? this.likeContainerAuth(project) : this.likeContainer(project) }
                    </tr>

                ))
                }
            </React.Fragment >
        );
    }
}

export default ProjectList;