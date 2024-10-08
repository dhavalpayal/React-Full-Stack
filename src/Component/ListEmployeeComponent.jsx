import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor (props){
        super(props)
        this.state = {
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.updateemployee = this.updateemployee.bind(this);
        this.deleteemployee = this.deleteemployee.bind(this);
    }

    deleteemployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employee: this.state.employees.filter(employee =>employee.id)
            });
        });
    }

    viewemployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    
    updateemployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().them((res) => {
            this.setState({employees:res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/-1');
    }
    
  render() {
        return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
            <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
        </div>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <button onClick={() => this.updateemployee(employee.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteemployee(employee.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.viewemployee(employee.id)} className="btn btn-info">View</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
