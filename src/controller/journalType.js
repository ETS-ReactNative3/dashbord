import axios from "axios";
const route = "/journalTypes";

export async function createJournalType(journalType) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url, {
        "name": journalType.name,
    });
    if (response.status === 200) {
        return response;
    }
}


export async function getJournalTypes() {
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
}

export async function getJournalTypesById(id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
}

export async function getJournalTypesByName(name) {
    const url = BASE_URL+`${route}/getJournalTypeByName/${name}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
}
  
export async function updateJournalType(journalType) {
    const url = BASE_URL+`${route}/${journalType.id}`;
    const response = await axios.put(url, {
        "name": journalType.name,
    });
    if (response.status === 200) {
        return response;
    }
}
