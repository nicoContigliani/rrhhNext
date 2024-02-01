import { readLocalStorage } from "@/services/storage.services";
import { useEffect, useMemo, useState } from "react";

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

const useReadPermission = () => {
    const [datas, setDatas] = useState<any | null | any[]>();

    useEffect(() => {
        const fetchData = async () => {
            const fetchedDatas = await readLocalStorage(dataSearch);
            setDatas(fetchedDatas);
        };

        fetchData();
    }, [dataSearch]);

    return datas;
};

export default useReadPermission;