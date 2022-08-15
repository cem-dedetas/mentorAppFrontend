import httpClient from './http-service';

export interface Mentor {
    id: string;
    name: string;
    description: string;
}

export class MentorResult {
    constructor(public totalCount: number, public applications: Mentor[]) {

    }

    static get empty(): MentorResult { return new MentorResult(0, []); }
}

class MentorService {

    async getMentor(id: string): Promise<Mentor> {
        const mentor = await httpClient.get<Mentor>(`./Mentors/${id}`);
        return mentor;
    }

    /*
    async getApplications(page: number, pageSize: number, name: string): Promise<ApplicationPagingResult> {
        const applications = await httpClient.get<ApplicationPagingResult>(`./applications?page=${page}&pageSize=${pageSize}&name=${name}`);
        return applications;
    }

    async getFavouriteApplications(userId: string): Promise<Application[]> {
        const applications = await httpClient.get<Application[]>(`./users/${userId}/applications`);
        return applications;
    }

    async getFeatures(applicationId: string, page: number, pageSize: number, key: string, tagIds: string[]): Promise<FeaturePagingResult> {
        const featureResult = await httpClient.get<FeaturePagingResult>(`./applications/${applicationId}/features?page=${page}&pageSize=${pageSize}&key=${key}&tagIds=${tagIds.toString()}`);
        return featureResult;
    }
    */
}

const mentorService = new MentorService();
export default mentorService;