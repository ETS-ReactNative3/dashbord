import axios from 'axios';
import { useEffect} from 'react';
import {BASE_URL} from "../config/http";


const route = '/users';
var hasProfessionalAccount = {
    0: "Classique",
    1: "Professionnel"
  }

  var statusName = {
    0 : "Désactivé",
    1 : "Actif  "
  };

  useEffect(() => {
    getUsers();
  }, []);

  export async function getUsers () {
    const url = BASE_URL+`${route}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }
 
  export async function addUser(user)  {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url, {
        "lastName": user.lastName,
        "firstName": user.firstName,
        "password": user.password,
        "codePin": user.codePin,
        "phone": user.phone,
        "country": user.country,
    });

    if (response.status === 200) 
        return response;   
}

export async function getUsersMinim () {
    const url = BASE_URL+`${route}/findAllMin`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function getUsersById (id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function getFidelityPointsByUserId(userId) {
    const url = BASE_URL+`${route}/getFidelityPointsByUserId/${userId}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }
 
  export async function getUserByPhoneNumber(phone) {
    const url = BASE_URL+`${route}/getUserByPhoneNumber/${phone}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function verifyPhoneNumber(phone) {
    const url = BASE_URL+`${route}/verifyPhoneNumber/${phone}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function convertFidelityPointsToMoney(userId) {
    const url = BASE_URL+`${route}/convertFidelityPointsToMoney/${userId}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function updateFirstName(id, firstName) {
    const url = BASE_URL+`${route}/updateFirstName/${id}/${firstName}`;
    const response = await axios.put(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function updateLastName(id, lastName) {
    const url = BASE_URL+`${route}/updateLastName/${id}/${lastName}`;
    const response = await axios.put(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function updatePhoneNumber(id, phone) {
    const url = BASE_URL+`${route}/updatePhoneNumber/${id}/${phone}`;
    const response = await axios.put(url);
        if (response.status === 200) {
            return response;
        }
  }

  export async function updatePassword(id, password) {
    const url = BASE_URL+`${route}/updatePassword/${id}/${password}`;
    const response = await axios.put(url);
        if (response.status === 200) {
            return response;
        }
  }
  

  export async function updateCodePin(id, codePin) {
    const url = BASE_URL+`${route}/updateCodePin/${id}/${codePin}`;
    const response = await axios.put(url);
        if (response.status === 200) {
            return response;
        }
  }
  
  export async function createProfessionalAccount(id) {
    const url = BASE_URL+`${route}/createProfessionalAccount/${id}`;
    const response = await axios.put(url,{});
        if (response.status === 200) {
            return response;
        }
  }













// static Future<RequestResult> update(user) async {
//   var result = await http_put("$route/${user.id}", {
//     "id": user.id,
//     "firstName": user.firstName,
//     "lastName": user.lastName,
//     "username": user.username,
//     "email": user.email,
//     "password": user.password,
//     "phone": user.phone,
//     "birthday": user.birthday,
//     "country": user.country,
//     "identityCardNumber": user.identityCardNumber,
//     "passportNumber": user.passportNumber,
//     "fidelityPoints": user.fidelityPoints,
//     "isActive": user.isActive,
//   });
//   return result;
// }

// static Future<RequestResult> getByUsername(username) async {
//   var result = await http_get("$route/getUserByUsername/$username");
//   return result;
// }

// static Future<RequestResult> loginWithEmail(email, password) async {
//   var result = await http_get("$route/loginWithEmail/$email/$password");
//   return result;
// }
//
// static Future<RequestResult> loginWithUsername(username, password) async {
//   var result = await http_get("$route/loginWithUsername/$username/$password", {});
//   return result;