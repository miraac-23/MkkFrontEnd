
import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/api/permissions/";



export default class PermissionService {

    addPermission = body => {
        return axios.post(API_URL + "add", body, { headers: authHeader() })
    }

    getPermissions() {
        return axios.get(API_URL + "getPermissionWithEmployeeAndPermissionType", { headers: authHeader() })
    }

    deletePermission(id) {

        return axios.delete( API_URL + "delete?permission=" + id, { headers: authHeader() })
    }

    getPermissionDaySum() {

        return axios.get(API_URL + "getPermissionDaySum", { headers: authHeader() })
    }



}
