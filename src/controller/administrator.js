import {BASE_URL} from "../config/http";
import axios from "axios";
import { toast } from "react-toastify";

const route = '/administrators';

export async function addAdministrator(administrateur)  {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url, administrateur);

    if (response.status === 200) {
        console.log('Administrateur cree');
    } else {
        console.log('Error');
    }
}

export async function getAdministrators(){
    const url = BASE_URL+`${route}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
}




export async function getSingleAdministrator(id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
}

export async function deleteAdministrator(id) {
    if (window.confirm("Are you sure that you wanted to delete that user record ? ")
        ) {
            const url = BASE_URL+`${route}/${id}`;
            const response = await axios.delete(url);
            if (response.status === 200) {
                toast.success(response.data);
                getAdministrators();
            }
        }
}

export async function updateAdministrator(administrateur, id){
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.put(url, administrateur);
    if (response.status === 200) {
        toast.information("Users updated successfuly");
    }
}

export async function login(username, password)  {
    if (username.length > 0 && password.length > 0) {

        const url = BASE_URL+`${route}/loginWithUsername/${username}/${password}`;
        const response = await axios.get(url);
    
        if (response.status === 200) {
            localStorage.setItem('token', response.data['token']);
            localStorage.setItem('name', response.data['administrator'].name);
            localStorage.setItem('username', response.data['administrator'].username);
            localStorage.setItem('contact', response.data['administrator'].contact);
            localStorage.setItem('level', response.data['administrator'].level);
            return true;     
        }
        return false;  
    } else {
        return false;
    }
}
