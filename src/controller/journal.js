import axios from "axios";
const route = "/journals";


export async function createJournal(journal) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url,{
      "number": journal.number,
      "amount": journal.amount,
      "phone": journal.phone,
      "date": journal.date,
      "status": journal.status,
      "message": journal.message,
      "journalTypeId": journal.journalTypeId,
    });
    if(response.status === 200){
        return response;
    }
}

export async function getJournals (){
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url);
    if(response.status === 200){
        return response;
    }
}

export async function getJournalById (id){
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if(response.status === 200){
        return response;
    }
}

export async function getJournalByStatus (status){
    const url = BASE_URL+`${route}/getJournalByStatus/${status}`;
    const response = await axios.get(url);
    if(response.status === 200){
        return response;
    }
}
 
 
export async function updateJournal(journal) {
    const url = BASE_URL+`${route}/${journal.id}`;
    const response = await axios.put(url,{
      "number": journal.number,
      "amount": journal.amount,
      "phone": journal.phone,
      "date": journal.date,
      "status": journal.status,
      "message": journal.message,
      "journalTypeId": journal.journalTypeId,
    });
    if(response.status === 200){
        return response;
    }
}
 