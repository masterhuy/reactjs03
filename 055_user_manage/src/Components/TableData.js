import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    mappingDataUser = () => 
        this.props.dataUserProps.map((value, key) => (
            <TableDataRow
                deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
                changeEditUserStatus = {() => this.props.changeEditUserStatus()}
                editFunClick={(user) => this.props.editFun(value)} 
                userName={value.name} 
                key={key} 
                stt={key} 
                tel={value.tel} 
                permission={value.permission}
                id={value.id}
            />
        ))
    
    
    render() {
        return (
            <div className="col data-table">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Ten</th>
                        <th>Dien thoai</th>
                        <th>Quyen</th>
                        <th>Hanh dong</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {this.mappingDataUser()}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;