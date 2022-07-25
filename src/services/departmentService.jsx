import axios from "axios";


export default class DepartmentService{

    addDepartment = body =>{

        return axios.post("http://localhost:8080/api/departments/add",body);
    }

    getDepartments(){

        return axios.get("http://localhost:8080/api/departments/getAll")
    }

    deleteDepartments = (id) =>{

        return axios.delete("http://localhost:8080/api/departments/delete",id);

    }

}