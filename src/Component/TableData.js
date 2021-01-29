import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mapData = () => this.props.data.map((value, key) => {
        return (<TableDataRow editUser={(user) => this.props.editUser(value)} changeEditUserSts={()=>this.props.changeEditUserSts()} key={key} name={value.name} id={value.id} phone={value.phone} role={value.role}
        deleteUser={(id) => {this.deleteUser(id)}}/>);
    });

    deleteUser = (id) => {
        this.props.deleteUser(id);
    }

    render() {
        return (
            <div className="col">
                 <div className="form-group">
                    <table className="table table-striped table-inverse table-responsive">
                            <tbody>
                                <tr>
                                    <th>Order</th>
                                    <th>Customer Name</th>
                                    <th>Customer Phone</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                                {this.mapData()}
                            </tbody>
                        
                    </table>
                    
                    
                 </div>
            </div>
        );
    }
}

export default TableData;