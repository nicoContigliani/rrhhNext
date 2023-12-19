import { selectAuth } from '@/app/GlobalRedux/Features/auth/authSlice';
import { useAppSelector } from '@/app/GlobalRedux/hooks';
import { readLocalStorage } from '@/services/storage.services';
import React, { useEffect, useState } from 'react'

const useAuth = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogins, setIsLogins] = useState(false);
    const [isAdmin, setIsadmin] = useState(false);
    const [infoUser, setInfoUser] = useState()

    const dataSearch = ["token", "islogin", "user", "id"];
    const auth = useAppSelector(selectAuth);


    useEffect(() => {
        const checkLocalStorage = async () => {
            const datas = await readLocalStorage(dataSearch);

            const {
                user: { admins }
            } = datas
            setIsadmin(admins)


            if (datas.length !== 0) setInfoUser(datas)

            if (datas && datas.islogin) {
                setIsLogins(true);
            } else {
                setIsLogins(false);
            }
        };

        checkLocalStorage();
    }, [auth]);

    return { isOpen, isLogins, infoUser, isAdmin, setIsOpen, setIsLogins };
}

export default useAuth



