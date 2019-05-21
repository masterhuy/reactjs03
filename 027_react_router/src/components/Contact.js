import React, { Component } from 'react';
import Redirect from "react-router-dom/Redirect";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fNgay: "thu5"
        }
    }
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;

        this.setState({
            [ten]: giatri
        });
    }    
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        })
    }

    isFileChange = (event) => {
        const tenanh = event.target.files[0].name;

        this.setState({
            fAnh: tenanh
        })
    }

    getGiaTri = () => {
        var noiDung = "";
        noiDung += "Ten nhan duoc la: " + this.state.fName;
        noiDung += "/ Email nhan duoc la: " + this.state.fName;
        noiDung += "/ Phone nhan duoc la: " + this.state.fName;
        noiDung += "/ Message nhan duoc la: " + this.state.fName;
        noiDung += "/ Ngay nhan duoc la: " + this.state.fNgay;
        noiDung += "/ Anh nhan duoc la: " + this.state.fAnh;
        return noiDung;
    }

    render() {
        if (this.state.isRedirect){
            console.log(this.getGiaTri())
                return <Redirect to="/" />;
        }
        return (
            <div>
                <div>
                <header className="masthead tintuc mb-5">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5 text-center">Contact</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin contact */}
                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <hr className="star-dark mb-5" />
                    <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Name</label>
                            <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" aria-invalid="false"/>
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" aria-invalid="false"/>
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" aria-invalid="false"/>
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" aria-invalid="false"/>
                            <p className="help-block text-danger" />
                            </div>
                        </div>

                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <div className="form-group">
                              <label>Chon ngay</label>
                              <select value={this.state.fNgay} className="form-control" name="fNgay" onChange={(event) => this.isChange(event)}>
                                <option value="thu2">Thu hai</option>
                                <option value="thu3">Thu ba</option>
                                <option value="thu4">Thu tu</option>
                                <option value="thu5">Thu nam</option>
                                <option value="thu6">Thu sau</option>
                              </select>
                            </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="file" name="fAnh" className="form-control-file" aria-describedby="fileHelpId" onChange={(event) => this.isFileChange(event)}/>
                        </div>

                        <br />
                        <div id="success" />
                        <div className="form-group">
                            <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                {/* end  contact */}
                </div>

            </div>
        );
    }
}

export default Contact;