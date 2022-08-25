import Mentor from '../dto/mentor/Mentor';
import SingleResponse from '../dto/SingleResponse';
import httpClient from './http-service';
class MentorService {

    getMentors = async () : Promise<Mentor> => {
        const response = await httpClient.get<SingleResponse>(`./Mentors`);
        return response.data;
    }

    getMentor = async (id: string) : Promise<Mentor> => {
        const response = await httpClient.get<SingleResponse>(`./Mentors/${id}`);
        return response.data;
    }


}

const mentorService = new MentorService();
export default mentorService;