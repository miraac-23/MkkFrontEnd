
import axios from "axios";


export default class PermissionService {

    addPermission = body => {
        return axios.post("http://localhost:8080/api/permissions/add",body)
    }

    getPermissions(){
        return axios.get("http://localhost:8080/api/permissions/getAll")
    }

    deletePermission(id){

        return axios.post("http://localhost:8080/api/permissions/delete?permission=" +id)
    }

    
 
}
