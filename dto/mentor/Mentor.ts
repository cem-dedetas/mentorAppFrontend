import Mentee from '../mentee/Mentee';
import Product from '../product/Product';
import Certificate from './Certificate';

export default class Mentor {
    name : string;
    age : number;
    gender : string;
    phone : string;
    description : string;
    certificates : Certificate[]; 
    products : Product[];
    mentees : Mentee[];
    mentorType : 'mentorTypeEnum';
}