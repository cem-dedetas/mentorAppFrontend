import httpClient from './http-service';
import LoginResponse from '../dto/auth/LoginResponse';
import RegisterResponse from '../dto/auth/RegisterReponse';

class AuthService {

    async login(email : string, password : string): Promise<LoginResponse> {
        const response = await httpClient.post<LoginResponse>(`./Auth/Login`, {
            Email : email,
            Password : password
        });
        return response;
    }

    async register(email : string, password : string): Promise<RegisterResponse> {
        const response = await httpClient.post<LoginResponse>(`./Auth/Register`, {
            Email : email,
            Password : password
        });
        return response;
    }

}

const authService = new AuthService();
export default authService;