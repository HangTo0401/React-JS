import React, { Component } from 'react';
import EditUserForm from './EditUserForm';

class SearchForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            tempVal: "",
            userObj: {}
        }
       
    }

    isChange = (event) => {
        this.setState({
            tempVal: event.target.value
        });
    }

    getUserEditForm = (info) => {
        this.setState({
            userObj : info
        });
        this.props.getUserEditFormApp(info);
    }

    displayBtn = () => {
        if(this.props.displayFormVal === true){
            return(<div className="btn btn-block btn-outline-secondary" onClick={() => this.props.connect()}>Close</div>); 
        } else {
            return(<div className="btn btn-block btn-outline-info" onClick={() => this.props.connect()}>Add New</div>);
            
        }
    }

    isShowEditForm = () => {
        if(this.props.editUserSts === true){
            //Render Edit User Form
            return(
                <EditUserForm getUserEditForm={(info) => this.getUserEditForm(info)} userEditObject={this.props.userEditObject} changeEditUserSts={() => this.props.changeEditUserSts()}/>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-6">
                    <div className="editForm">
                        {this.isShowEditForm()}
                    </div>
                </div>
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <div className="row">
                                        <input className="form-control" type="text" id="search_area" onChange={(event) => this.isChange(event)} name="search_area" placeholder="Nhập từ khóa"/>
                                        <button type="button" onClick={(tempVal) => this.props.getTempVal(this.state.tempVal)}>Tìm</button>
                                        <div className="btn-group addClose">{this.displayBtn()}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;