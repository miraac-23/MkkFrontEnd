import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/";


export default class PermissionTypeService{

    addPermissionType = body => {

        return axios.post(API_URL+ "permissionTypes/add" , body , {headers: authHeader() });
    }

    getPermissionTypes(){

        return axios.get(API_URL+ "permissionTypes/getAll",{ headers: authHeader() });
    }

    deletePermissionType(id) {

        return axios.delete("http://localhost:8080/api/permissionTypes/delete?permissionTypeEntity="+id ,{ headers: authHeader() });
    }
}