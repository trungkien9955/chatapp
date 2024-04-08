export const baseUrl = "http://192.168.1.218:5000/api";
// export const imageUrl = "http://localhost:5000/assets/images"
export const imageUrl = "http://192.168.1.218:5000/assets/images"

export const laravelUrl = "http://127.0.0.1:8000/api";
export  const postRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body
    })
    
    const data = await response.json();
    // if(!response.ok) {
    //     let message;
    //     if(data?.message){
    //         message = data.message;
    //     }else{
    //         message = data;
    //     }
    //     return {error: true, message};
    // }
    return data;
}
export  const postRequestForFormData = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        body
    })
    
    const data = await response.json();
    if(!response.ok) {
        let message;
        if(data?.message){
            message = data.message;
        }else{
            message = data;
        }
        return {error: true, message};
    }
    return data;
}
export const getRequest = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    // if(!response.ok){
    //     let message = "An error occured"
    //     if(data?.message){
    //         message = data.message
    //     }
    //     return {error:true, message}
    // }
    return data
}
export const laravelGetRequest = async(url)=>{
    const response = await fetch(url)
    const data = await response.json()
    if(!response.ok) {
        let message = "An error occured"
        if(data?.message){
            message = data.message
        }
        return {error: true, message}
    }
    return data;
}
