export const api = "https://reactgram-kb58.onrender.com/api"
export const uploads = "https://reactgram-kb58.onrender.com/uploads"
export const requestConfig = (method, data, token = null, image = null) => {
    let config

    if(image) {
        config = {
            method, 
            body: data,
            headers: {'Access-Control-Allow-Origin' : '*'}
        }
    } else if (method === "DELETE" || data === null) {
        config = {
            method, 
            headers: {'Access-Control-Allow-Origin' : '*'}
        }
    } else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin' : '*'
            }
        }
    }

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}