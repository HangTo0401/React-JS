import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            btnSts: false
        }
    }

    renderBtn = () => {
        if(this.state.btnSts === true){
            //Hiển thị nút đóng lại
            return(
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.changeSts(false)}>Close</div>
            )
        } else {
             //Hiển thị nút thêm mới
             return(
                <div className="btn btn-block btn-outline-info" onClick={()=>this.changeSts(true)}>Add New</div>
            )
        }
        
    }

    changeSts = (state) =>{
        this.setState({
            btnSts: state
        });
    }

    checkStatus = () => {
        if(this.props.displayFormVal === true) {
            return(
                <div>
                    {this.renderForm()}
                </div>
            );
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    renderForm = () => {
            //Hiển thị form
            return(
                <div className="col-6">
                    <form>
                        <div className="card-border-primary mb-3 mt-2">
                            <h6>Add new customer</h6>
                            <table className="form-group-table">
                                <tbody>
                                <tr><th>Customer Name</th></tr>
                                <tr>
                                    <td><input type="text" name="name" onChange={(event) => this.isChange(event)} placeholder="Input name"/></td>
                                </tr>
                                <tr><th>Customer Phone</th></tr>
                                <tr>
                                    <td><input type="text" name="phone" onChange={(event) => this.isChange(event)} placeholder="Input phone number" /></td>
                                </tr>
                                <tr><th>Role</th></tr>
                                <tr>
                                    <td>
                                    <select className="form-select" defaultValue="sel" name="role" onChange={(event) => this.isChange(event)}>Admin
                                        <option value="sel">Select menu</option>
                                        <option value="adm">Admin</option>
                                        <option value="mod">Moderator</option>
                                        <option value="nor">Normal</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td className="submit-btn"><button className="btn btn-success" type="submit" onClick={(name, phone, role) => this.props.getUserForm(this.state.name, this.state.phone, this.state.role)} >Add</button></td> */}
                                    <td className="submit-btn"><input className="btn btn-success" type="reset" onClick={(name, phone, role) => this.props.getUserForm(this.state.name, this.state.phone, this.state.role)} value="Add"/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            )
    }

    //Chạy luôn k cần đợi thì gọi kiểu {renderBtn} còn muốn kiểu thao tác r mới gọi thì gọi kiểu arrow func ()=>{}
     
    render() {
        return (
            <div className="col">
                <div className="form-group">
                    {this.checkStatus()}
                </div>
            </div>
        );
    }
}

export default AddUser;