
import axios from "axios";

export default class EmployeeService{

    getEmployees(){

        return axios.get("http://localhost:8080/api/employees/getAll")
    }
    getEmployeesByName(name){

        return axios.get("http://localhost:8080/api/employees/getByName?name=" + name)
    }
}