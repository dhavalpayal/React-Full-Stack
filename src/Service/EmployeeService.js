import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/vi/emploee";

class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee (emploee) {
        return axios.post(EMPLOYEE_API_BASE_URL, emploee);
    }

    getEmployeesById(emploeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + emploeeId);
    }

    updateEmployee(emploee, emploeeId){
        return axios.put(EMPLOYEE_API_BASE_URL+ '/' + emploeeId, emploee);
    }
}

export default new EmployeeService()