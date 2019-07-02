import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Create extends Component{

    constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName:'',
            lastName:'',
            mobNo:''
        }

    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeMobile(e){
        this.setState({
            mobNo: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.firstName}, ${this.state.lastName}, and ${this.state.mobNo}`)
        this.setState({
          firstName: '',
          lastName: '',
          mobNo: ''
        })
    }

    render(){



        return(
            <div style={{marginTop: 10}}>
            <h3>Add New User</h3><hr/>
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <label>First Name:  </label>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"
                                   className="form-control"
                                   value = {this.state.firstName}
                                   onChange = {this.onChangeFirstName}/>
                        </div>
                        <div className="col-lg-6">
                            <label>Last Name:  </label>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"
                                   className="form-control"
                                   value = {this.state.lastName}
                                   onChange = {this.onChangeLastName}/>
                        </div>

                        <div className="col-lg-6">
                            <label>Mobile Number:  </label>
                        </div>
                        <div className="col-lg-6">
                            <input type="Number"
                                   className="form-control"
                                   value = {this.state.mobNo}
                                   onChange = {this.onChangeMobile}/>
                        </div>
                    </div>
                </div>               
                <hr/>
                <div className="form-group">
                    <input type="submit" value="Register Details" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}