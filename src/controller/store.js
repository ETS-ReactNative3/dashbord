import {BASE_URL, HEADERS} from "../config/http";
import {toast} from "react-toastify";
import axios from "axios";
const route = "/stores0";



// export async function createStore(store){
//     const url = BASE_URL+`${route}/`;
//     const response = await axios.put(url,{
//         "id": log.id,
//         "description": log.description,
//         "statut": log.statut,
//         "date": log.date,
//         "userId": log.userId,
//     });
//     if (response.status === 200) {
//         if (response.data.status === true) {
//             return response.data.data;
//         } else {
//             return response.data.message;
//         }
//     }
// }


export async function getStores (){
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url, {headers:HEADERS});
    if (response.status === 200) {
        if (response.data.status === true) {
            return response.data.data;
        } else {
            return response.data.message;
        }
    }
}
export async function deleteStore(id) {
    if (window.confirm("Are you sure that you wanted to delete Store record ? ")
        ) {
            const url = BASE_URL+`${route}/${id}/`;
            const response = await axios.delete(url,{headers:HEADERS});
            if (response.status === 200) {
                toast.success("Store deleted successfully");
            }
        }
}



 

 