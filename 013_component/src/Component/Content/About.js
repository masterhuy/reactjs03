import React, { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trangThai:false
        }
    }
    

    thongbao = () => {
        alert("Cach xu ly tuong tac trong react js");
    }

    thongbao2 = () =>{
        alert("Day la thong bao so 2");
    }

    thongbao3 = (x) =>{
        alert(x);
    }

    renderButton = () => (
        <div className="btn btn-group">
            <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
            <div className="btn btn-warning">Remove</div>
        </div>
    )
    renderForm = () => (
        <div className="form-group">
            <input ref={(dulieunhap) => {this.trunggian = dulieunhap}} defaultValue={this.props.title} type="text" className="form-control" name="ten"/>
            <div className="btn btn-success" onClick={() => this.saveClick()}>Save</div>
        </div>
    )
    displayCheck = () => {
        if(this.state.trangThai === false){
            return this.renderButton();
        }
        else{
            return this.renderForm();
        }
    }
    editClick = () => {
        this.setState({
            trangThai:!this.state.trangThai
        });
        
    }
    saveClick = () => {
        this.setState({
            trangThai:!this.state.trangThai
        });
        console.log(this.trunggian.value);
    }

    render() {
        return (
            <section className="bg-primary text-white mb-0" id="about">
                <div className="container">
                    <h2 className="text-center text-uppercase text-white">{this.props.title}</h2>
                    <hr className="star-light mb-5" />
                    <div className="row">
                        <div className="col-lg-4 ml-auto">
                        <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                        <p className="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        {this.displayCheck()}
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default About;