import React, { Component } from 'react';
import EmployeeService from '../Service/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(porps){
        super(props)
        this.state ={
            id: this.porps.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeesById(this.state.id).then( res => {
            this.setState({employee:res.data});
        })
    }
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee First Name:</label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label>Employee Last Name:</label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label>Employee Email Id:</label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;