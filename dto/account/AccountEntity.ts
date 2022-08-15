import AccountTypeEnum from '../account/AccountTypeEnum';

export default class AccountEntity {
    email : string;
    passwordHash : string;
    passwordSalt : string;
    mentorId : string;
    menteeId : string;
    accountType : AccountTypeEnum;
}