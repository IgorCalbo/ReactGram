export const api = "https://reactgram-kb58.onrender.com/api";  // URL do backend no Render
export const uploads = "https://reactgram-kb58.onrender.com/uploads";  // URL de uploads, se necessário

export const requestConfig = (method, data, token = null, image = null) => {
    let config

    if(image) {
        config = {
            method, 
            body: data,
            headers: {}
        }
    } else if (method === "DELETE" || data === null) {
        config = {
            method, 
            headers: {}
        }
    } else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}