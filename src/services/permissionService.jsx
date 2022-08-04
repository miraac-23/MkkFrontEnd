
import axios from "axios";
import authHeader from "./authHeader";



export default class PermissionService {

    addPermission = body => {
        return axios.post("http://localhost:8080/api/permissions/add",body , { headers: authHeader() })
    }

    getPermissions(){
        return axios.get("http://localhost:8080/api/permissions/getPermissionWithEmployeeAndPermissionType" , { headers: authHeader() })
    }

    deletePermission(id){

        return axios.delete("http://localhost:8080/api/permissions/delete?permission=" +id,  { headers: authHeader() })
    }

    
 
}
