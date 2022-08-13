import httpClient from './http-service';
import AccountEntity from '../dto/account/AccountEntity';
import SingleResponse from '../dto/SingleResponse';
import MultiResponse from '../dto/MultiResponse';


class AccountService {
    async getAccounts() {
        const accounts = await httpClient.get<MultiResponse>(`./Accounts`,{headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsIm1lbnRvcklkIjoiIiwibWVudGVlSWQiOiIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY2MTIzOTAxNn0.kTlWjUIk0KD1fUTXfrmbRMA8kiM1QAAtb2HJS-Kug2K59vcDZ4KKB-M2gB9dw2CyiVZZKyvB4H2a2sDpbI8C4w` 
          }});
        return accounts.data;
    }

    async getAccount(id:string){
        const res:SingleResponse = await httpClient.get<SingleResponse>(`./Accounts/${id}`,{headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsIm1lbnRvcklkIjoiIiwibWVudGVlSWQiOiIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY2MTIzOTAxNn0.kTlWjUIk0KD1fUTXfrmbRMA8kiM1QAAtb2HJS-Kug2K59vcDZ4KKB-M2gB9dw2CyiVZZKyvB4H2a2sDpbI8C4w` 
          }});
        return res.data;
    }
}


const accountService = new AccountService();
export default accountService;