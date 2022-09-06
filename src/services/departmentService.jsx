import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/departments/";


export default class DepartmentService {



    addDepartment = body => {

        return axios.post(API_URL + "add", body, { headers: authHeader() });
    }

    getDepartments() {

        return axios.get(API_URL + "getAll", { headers: authHeader() });
    }

    deleteDepartment(id) {

        return axios.delete(API_URL + `delete?departmentEntity=${id} ` , { headers: authHeader() } );

    //http://localhost:8080/api/departments/delete?departmentEntity=

}



}