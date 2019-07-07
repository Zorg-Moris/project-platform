import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.delete = this.delete.bind(this);

  }

  componentDidMount() {
    console.log("this.props.obj", this.props);
  }

  delete() {
    Axios.get('http://localhost:4000/project/delete/' + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch(error => console.log(error));

    console.log(this.props.obj);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.person_name}
        </td>
        <td>
          {this.props.obj.project_name}
        </td>
        <td>
          {this.props.obj.description}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.delete}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;