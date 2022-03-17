import axios from "axios";
const route = "/etablissements";

export async function createEtablissement(etablissement)  {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url, {
      "logo": etablissement.logo,
      "name": etablissement.name,
      "localite": etablissement.localite,
      "phone": etablissement.phone,
      "program": etablissement.program,
      "etablissementTypeId": etablissement.etablissementTypeId,
    });

    if (response.status === 200) {
        console.log('Etablissement crée');
        return response;
    } else {
        console.log('Error');
    }
}

export async function getEtablissements(){
    const url = BASE_URL+`${route}`;
    const response = await axios.get(url);
        if (response.status === 200) {
            return response;
        }
}


export async function getEtablissementById(id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
}

export async function getEtablissementByName(name) {
    const url = BASE_URL+`${route}/getEtablissementByName/${name}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
}


export async function updateEtablissement(etablissement)  {
    const url = BASE_URL+`${route}/${etablissement.id}`;
    const response = await axios.put(url, {
      "logo": etablissement.logo,
      "name": etablissement.name,
      "localite": etablissement.localite,
      "phone": etablissement.phone,
      "program": etablissement.program,
      "etablissementTypeId": etablissement.etablissementTypeId,
    });

    if (response.status === 200) {
        console.log('Establishment update successfuly');
        return response;
    } else {
        console.log('Error');
    }
}
