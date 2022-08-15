import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

class HttpClient {
    async get<T>(url: string, config?: any): Promise<T> {
        const result = await axios.get<T>(url, config);
        return result.data;
    }

    async post<T>(url: string, body: any, config?: any): Promise<T> {
        const result = await axios.post<T>(url, body, config);
        return result.data;
    }

    async put<T>(url: string, body: any, config?: any): Promise<T> {
        const result = await axios.put<T>(url, body, config);
        return result.data;
    }

    async delete<T>(url: string, config?: any): Promise<T> {
        const result = await axios.delete<T>(url, config);
        return result.data;
    }
}

axios.interceptors.request.use(config => {
    if (!config.url?.startsWith('./'))
        return config;

    config.url = publicRuntimeConfig.apiUrl + config.url.substr(2);
    return config;
});

axios.interceptors.request.use(config =>{
    const user = JSON.parse(localStorage.getItem('user') as string)
    if(user?.token){
        config.headers = {...config.headers,'Authorization':"Bearer " + user.token}
    }
    console.log(user?.token)
    return config
});

const httpClient = new HttpClient();
export default httpClient; 