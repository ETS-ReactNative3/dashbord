import axios from "axios";
const route = "/participants";


export async function createParticipant(participant) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url,{
        "name": participant.name,
        "phone": participant.phone,
        "ticketId": participant.ticketId,
    });
    if(response.status === 200){
        return response;
    }
}
export async function getParticipants() {
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url);
    if(response.status === 200){
        return response;
    }
}

export async function getParticipantById(id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if(response.status === 200){
        return response;
    }
}
  
export async function getParticipantByName(name) {
    const url = BASE_URL+`${route}/getParticipantByName/${name}`;
    const response = await axios.get(url);
    if(response.status === 200){
        return response;
    }
}

export async function getParticipantByTicketId(ticketId) {
    const url = BASE_URL+`${route}/getParticipantByTicketId/${ticketId}`;
    const response = await axios.get(url);
    if(response.status === 200){
        return response;
    }
}
 
export async function updateParticipant(participant) {
    const url = BASE_URL+`${route}/${participant.id}`;
    const response = await axios.put(url,{
        "name": participant.name,
        "phone": participant.phone,
        "ticketId": participant.ticketId,
    });
    if(response.status === 200){
        return response;
    }
}
 
