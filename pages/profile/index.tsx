import { profile } from "console";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import accountService from "../../services/account-service";

const Profile : NextPage= () => {
    const [accounts,setAccounts] = useState()
    useEffect(()=>{
        const fetchAccounts = async ()=>{
            const accounts =  await accountService.getAccounts()
        }
        fetchAccounts()
    },[])
    return (<>{accounts}</>)
}

export default Profile;