
import axios from "axios";

export default class EmployeeService{

    getEmployees(){

        return axios.get("http://localhost:8080/api/employees/getAll")
    }
    getEmployeesByName(name){

        return axios.get("http://localhost:8080/api/employees/getByName?name=" + name)
    }

    addEmployee= body =>{

        return axios.post("http://localhost:8080/api/employees/add",body)
    }

    updateEmployee() {

        return axios.post
    }

    deleteEmployee(id) {
        return axios.post("http://localhost:8080/api/employees/delete?employeeEntity="+id);
    }

    
}