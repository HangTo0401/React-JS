import React, { Component } from 'react';

class TableDataRow extends Component {
    editClick = () => {
        this.props.editUser();
        this.props.changeEditUserSts();
    }

    deleteClick = (id) => {
        this.props.deleteUser(id);
    }

    render() {
        return (
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.phone}</td>
                    <td>{this.props.role}</td>
                    <td>
                        <div className="btn btn-warning Update" onClick={() => this.editClick()}><i className="fa fa-edit" />Update</div>
                        <div className="btn btn-danger Delete" onClick={(id) => this.deleteClick(this.props.id)}><i className="fa fa-edit" />Delete</div>
                    </td>
                </tr>
        );
    }
}

export default TableDataRow;