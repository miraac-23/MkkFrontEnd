
import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/employees/";



export default class EmployeeService {

    getEmployees() {

        //   const axiosClient =  axios.create({
        //         baseURL:"http://localhost:8080/",
        //         withCredentials:true
        //     })

        //interceptors
        return axios.get(API_URL + "getEmployeeWithPosition", { headers: authHeader() })
    }
    getEmployeesByName(name) {

        return axios.get(API_URL + "getByName?name=" + name)
    }

    addEmployee = body => {

        return axios.post(API_URL + "add", body, { headers: authHeader() })
    }



    deleteEmployee(id) {
        return axios.delete(API_URL + "delete?employeeEntity=" + id, { headers: authHeader() });
    }

    getEmployeeById(id) {

        return axios.get(API_URL + "getById?id=" + id, { headers: authHeader() });

    }

    updateEmployee = body => {

        return axios.post(API_URL + "update?id=", body, { headers: authHeader() });
    }

    getEmployeeByTcNo(tcNo) {

        return axios.get(API_URL + "getByTcNo?tcNo=" + tcNo, { headers: authHeader() });
    }





}