import React, { Component } from 'react';
import './../App.css'
import AddUser from './AddUser';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import data from './Data_01.json';

const uuidv4 = require('uuid/v1');
class App extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            displayFormVal: false, 
            data:data,
            searchVal:"",
            editUserSts:false,
            userEditObject:{}
        }
    }

    changeState = () => {
        this.setState({
            displayFormVal: !this.state.displayFormVal
        });
    }

    checkConnectChildComponent = () => {
        alert('Ket noi thanh cong');
    }

    getTempVal = (tempVal) => {
        this.setState({
            searchVal:tempVal
        });
    }

    getUserForm = (name, phone, role) => {
        var item = {}
        item.id = uuidv4();
        item.name = name;
        item.phone = phone;
        item.role = role;
        var items = this.state.data;
        items.push(item);

        //Update data
        this.setState({
            data:items
        });
    }

    editUser = (user) => {
        //If click on update user then show form to change info
        this.setState({
            userEditObject:user
        });
    }

    changeEditUserSts = () => {
        this.setState({
            editUserSts:!this.state.editUserSts
        });
    }

    getUserEditFormApp = (info) => {
        console.log("App id " + info.id);
        console.log("App name " + info.name);
        console.log("App phone " + info.phone);
        console.log("App role " + info.role);
        this.state.data.forEach((value, key) => {
            if(value.id === info.id){
                value.name = info.name;
                value.phone = info.phone;
                value.role = info.role;
            }
        });
    }

    deleteUser = (id) => {
        console.log("App2 " + id);
        var tempData = this.state.data.filter(item => item.id !== id);

        this.setState({
            data:tempData
        });

        //Đẩy dữ liệu vào localStorage
        localStorage.setItem('userData', JSON.stringify(tempData));
    }

    render() {
        var result = [];
        this.state.data.forEach((item) => {
            if(item.name.indexOf(this.state.searchVal) !== -1){
                result.push(item)
            }
        });

        return (
            <div className="jumbotron jumbotron-fluid">
                <Header/>
                <div className="container">
                    <SearchForm connect={() => this.changeState()} displayFormVal={this.state.displayFormVal} 
                                checkConnect={() => this.checkConnectChildComponent()} getTempVal={(tempVal) => this.getTempVal(tempVal)}
                                editUserSts={this.state.editUserSts} changeEditUserSts={()=>this.changeEditUserSts()} 
                                userEditObject={this.state.userEditObject} 
                                getUserEditFormApp={(info) => this.getUserEditFormApp(info)}/>
                    <div className="col-12">
                        <div className="row">
                            <TableData deleteUser={(id) => this.deleteUser(id)} editUser={(user) => this.editUser(user)} changeEditUserSts={()=>this.changeEditUserSts()} data={result}/>
                            <AddUser displayFormVal={this.state.displayFormVal} getUserForm={(name, phone, role) => this.getUserForm(name, phone, role)}/>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;