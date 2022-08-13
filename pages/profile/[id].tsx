import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AccountEntity from "../../dto/account/AccountEntity";
import accountService from "../../services/account-service";


const Profile: NextPage = () => {
    const router = useRouter();

    const [account, setAccount] = useState<AccountEntity>()
    useEffect(() => {
        if (router.isReady) {
            const fetchAccount = async () => {
                const res: AccountEntity = await accountService.getAccount(router.query.id as string);
                if (res) {
                    setAccount(res);
                    console.log(res);
                }
            }
            fetchAccount();
        }
    }, [router.isReady])
    if(account)return (<>Test {account.email}</>)
    return <></>
}

export default Profile;