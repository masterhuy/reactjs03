import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="col-12 user-manage mb-5">
                <form>
                    <div className="card text-white bg-secondary mt-2">
                        <div className="card-body">
                            <h4 className="card-title">Sua thong tin User</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" name="name" defaultValue={this.props.userEditObject.name} className="form-control"  placeholder="Ten User" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" name="tel" defaultValue={this.props.userEditObject.tel} className="form-control"  placeholder="Dien thoai" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} className="custom-select" name="permission" defaultValue={this.props.userEditObject.permission}>
                                    <option value>Chon quyen</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Member</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="button" value="Save" onClick={() => this.saveButton()} className="btn btn-block btn-danger"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;