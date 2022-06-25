import AccountTypeEnum from '../account/AccountTypeEnum';

class AccountEntity {
    constructor(Email : string, PasswordHash : string, PasswordSalt : string, MentorId : string, MenteeId : string, AccountType : AccountTypeEnum) {}
}

export default AccountEntity;