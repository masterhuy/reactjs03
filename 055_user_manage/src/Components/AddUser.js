import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        });
        //pakage to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);
    } 

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true){
            return (
                <div className="col user-manage">
                    <form>
                        <div className="card mt-2">
                            <div className="card-body">
                                <h4 className="card-title">Them moi User</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control"  placeholder="Ten User" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control"  placeholder="Dien thoai" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} className="custom-select" name="permission">
                                        <option value>Chon quyen</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Member</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" value="Them" className="btn btn-block btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.kiemTraTrangThai()
                }                
            </div>
        );
    }
}

export default AddUser;