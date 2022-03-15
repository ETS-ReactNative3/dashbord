import {BASE_URL, HEADERS} from "../config/http";
import axios from "axios";

const route = '/administrators';


export async function addAdministrator(administrateur)  {
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url, administrateur);

    if (response.status === 200) {
        console.log('Administrateur cree');
    } else {
        console.log('Error');
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
