import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/";


export default class DepartmentService {



    addDepartment = body => {

        return axios.post(API_URL + "departments/add", body, { headers: authHeader() });
    }

    getDepartments() {

        return axios.get(API_URL + "departments/getAll", { headers: authHeader() });
    }

    deleteDepartment(id) {

        return axios.delete(API_URL + `departments/delete?departmentEntity=${id} ` , { headers: authHeader() } );

    //http://localhost:8080/api/departments/delete?departmentEntity=

}



}