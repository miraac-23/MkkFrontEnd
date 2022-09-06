import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/permissionTypes/";


export default class PermissionTypeService{

    addPermissionType = body => {

        return axios.post(API_URL+ "add" , body , {headers: authHeader() });
    }

    getPermissionTypes(){

        return axios.get(API_URL+ "getAll",{ headers: authHeader() });
    }

    deletePermissionType(id) {

        return axios.delete(API_URL + "delete?permissionTypeEntity="+id ,{ headers: authHeader() });
    }
}