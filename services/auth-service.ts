import httpClient from './http-service';
import LoginResponse from '../dto/auth/LoginResponse';
import RegisterResponse from '../dto/auth/RegisterReponse';
import jwt_decode from "jwt-decode";

interface User{
    id:string,
    email:string,
    menteeId:string,
    mentorId:string,
    role:string,
    exp:number,
    token:string
}

class AuthService {

    async login(email : string, password : string){
        const response = await httpClient.post<LoginResponse>(`./Auth/Login`, {
            Email : email,
            Password : password
        });
        console.log(response)
        if(response.success){
            const decodedToken = jwt_decode(response.token)
            const user:User={
                id: decodedToken.id,
                email: decodedToken.email,
                menteeId: decodedToken.menteeId,
                mentorId: decodedToken.mentorId,
                role: '',//TODO: FIX THIS
                exp: decodedToken.exp,
                token: response.token
            }
            localStorage.setItem('user',JSON.stringify(user));
            return true;
        }
        return false;
        
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