import { selectAuth } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { readLocalStorage } from '@/services/storage.services';
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'

const useAuth = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogins, setIsLogins] = useState(false);
    const [isAdmin, setIsadmin] = useState(false);
    const [infoUser, setInfoUser] = useState()
    const [dataPermission, setDataPermission] = useState<any>()


    const [rulesCreate,setRulesCreate]=useState<boolean>()
    const [rulesUpdate,setRulesUpdate]=useState<boolean>()
    const [rulesPost,setRulesPost]=useState<boolean>()
    const [rulesDelete,setRulesDelete]=useState<boolean>()


    const dataSearch = [
        "islogin",
        "token",
        "id",
        "email",
        "fullname",
        "phone",
        "birthday",
        "Score",
        "status_user",
        "name_role",
        "name_permission",
        "conditions",
        "code",
        "creates",
        "reads",
        "updates",
        "deletes",
        "admins",
        "exports",
        "imports",
        "approve",
        "generate_reports",
        "configure",
        "restrict",
        "manage_users",
        "manage_roles",
        "audit",
        "name_branch",
        "branch_long",
        "branch_lat",
        "branch_score",
        "company",
        "companyPhone",
        "companyEmail",
        "urlCompany",
        "status_company",
        "shift_name",
        "start_time",
        "end_time",
        "status_shift"
    ];
    const auth = useAppSelector(selectAuth);


    useLayoutEffect(() => {
        const checkLocalStorage = async () => {
            const datas = await readLocalStorage(dataSearch);

            const {
                islogin,
                token,
                id,
                email,
                fullname,
                phone,
                birthday,
                Score,
                status_user,
                name_role,
                name_permission,
                conditions,
                code,
                creates,
                reads,
                updates,
                deletes,
                admins,
                exports,
                imports,
                approve,
                generate_reports,
                configure,
                restrict,
                manage_users,
                manage_roles,
                audit,
                name_branch,
                branch_long,
                branch_lat,
                branch_score,
                company,
                companyPhone,
                companyEmail,
                urlCompany,
                status_company,
                shift_name,
                start_time,
                end_time,
                status_shift
            } = datas
            setIsadmin(admins)


            if (datas.length !== 0) setInfoUser(datas)

            if (datas && datas.islogin) {
                setIsLogins(true);
                setDataPermission(datas)

            } else {
                setIsLogins(false);
            }
        };

        checkLocalStorage();
    }, [auth]);

    return { isOpen, isLogins, infoUser, isAdmin, setIsOpen, setIsLogins, dataPermission };
}

export default useAuth



