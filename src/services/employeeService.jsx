
import axios from "axios";
import authHeader from "./authHeader";


export default class EmployeeService{

    getEmployees(){

    //   const axiosClient =  axios.create({
    //         baseURL:"http://localhost:8080/",
    //         withCredentials:true
    //     })

        //interceptors
        return axios.get("http://localhost:8080/api/employees/getEmployeeWithPosition",{ headers: authHeader() } )
    }
    getEmployeesByName(name){

        return axios.get("http://localhost:8080/api/employees/getByName?name=" + name)
    }

    addEmployee= body =>{

        return axios.post("http://localhost:8080/api/employees/add",body,{ headers: authHeader() })
    }

 

    deleteEmployee(id) {
        return axios.delete("http://localhost:8080/api/employees/delete?employeeEntity="+id,{ headers: authHeader() });
    }

    getEmployeeById(id) {

        return axios.get("http://localhost:8080/api/employees/getById?id="+id,  { headers: authHeader() });

    }

    updateEmployee = body =>{

        return axios.post("http://localhost:8080/api/employees/update?id=",body ,  { headers: authHeader() });
    }

    getEmployeeByTcNo(tcNo){

        return axios.get("http://localhost:8080/api/employees/getByTcNo?tcNo="+tcNo, { headers: authHeader() });
    }

    


    
}