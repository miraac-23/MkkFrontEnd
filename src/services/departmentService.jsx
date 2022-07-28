import axios from "axios";


export default class DepartmentService{


    addDepartment = body =>{

        return axios.post("http://localhost:8080/api/departments/add",body);
    }

    getDepartments(){

        return axios.get("http://localhost:8080/api/departments/getAll")
    }

    deleteDepartment (id) {

        return axios.post("http://localhost:8080/api/departments/delete?departmentEntity="+id);

    }

}