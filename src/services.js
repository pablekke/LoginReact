import { URL_APP } from "./const";

export const loginApi = async ({ email, password }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "usuario": email,
        "password": password
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    const response = await fetch(`${URL_APP}/login.php`, requestOptions);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en la solicitud');
    }
    const result = await response.json();
    return result;
}

