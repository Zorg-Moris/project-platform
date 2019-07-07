import React, { Component } from 'react';
import Axios from 'axios';
import TableRow from './TableRow';
import './indexStyle.css'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }


    componentDidMount() {
        this.getDataDb();
    }

  

    getDataDb() {
        Axios.get('http://localhost:4000/project').then(response => {
            this.setState({ projects: response.data });
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    // componentDidUpdate(){
    //     this.getDataDb();
    // }

    showTableRow() {
        console.log("showTableRow");
        return this.state.projects.map(function (obj, i) {
            return <TableRow obj={obj} key={i} />
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Projects List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Project</th>
                            <th>Description</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showTableRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}