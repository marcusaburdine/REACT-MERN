const BASE_URL = '/api/profile';


export async function addProfile(formData) {
    //console.log('this is working in goals API before send request')
    console.log(formData)
    return sendRequest(BASE_URL, 'POST', formData)
}

export function getProfile() {
    return sendRequest(BASE_URL);
}

export function deleteProfile(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function showProfile(id) {
   
    return sendRequest(`${BASE_URL}/${id}`);
}

export function editProfile(id, formData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData);
}


// HELPER FUNCTIONS:
async function sendRequest (url, method = 'GET', payload = null) {
    const options = { method }

    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }

    const res = await fetch(url, options)
    console.log(res)

    if (res.ok) {
        return res.json 
    } else {
        console.log('the error is here in profile-api')
        throw new Error('Bad Request')
    }
    
 }