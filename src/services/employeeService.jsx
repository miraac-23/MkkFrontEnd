
import axios from "axios";
import authHeader from "./authHeader";


export default class EmployeeService{

    getEmployees(){

      const axiosClient =  axios.create({
            baseURL:"http://localhost:8080/",
            withCredentials:true
        })

        //interceptors
        return axiosClient.get("api/employees/getAll",{ headers: authHeader() } )
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