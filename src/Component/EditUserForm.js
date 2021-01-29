import React, { Component } from 'react';

class EditUserForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            phone:this.props.userEditObject.phone,
            role:this.props.userEditObject.role
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveBtn = () => {

        //set info user
        var info = {}
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.role = this.state.role;

        this.props.getUserEditForm(info);
        this.props.changeEditUserSts();
    }

    render() {
        return (
            <form>
                <div className="card-text-white mt-2 mb-3">
                    <div className="card-text-label"><h6>Change Info Customer Form</h6></div>
                    <table className="form-group-table editForm">
                        <tbody>
                        <tr><th>Customer Name</th></tr>
                        <tr>
                            <td><input type="text" defaultValue={this.props.userEditObject.name} name="name" onChange={(event) => this.isChange(event)} placeholder="Input name"/></td>
                        </tr>
                        <tr><th>Customer Phone</th></tr>
                        <tr>
                            <td><input type="text" defaultValue={this.props.userEditObject.phone} name="phone" onChange={(event) => this.isChange(event)} placeholder="Input phone number" /></td>
                        </tr>
                        <tr><th>Role</th></tr>
                        <tr>
                            <td>
                            <select className="form-select" defaultValue={this.props.userEditObject.role} name="role" onChange={(event) => this.isChange(event)}>Admin
                                <option value="0">Select menu</option>
                                <option value="1">Admin</option>
                                <option value="2">Moderator</option>
                                <option value="3">Normal</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="submit-btn"><input className="btn btn-success" type="reset" value="Save" onClick={() => this.saveBtn()}/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        );
    }
}

export default EditUserForm;