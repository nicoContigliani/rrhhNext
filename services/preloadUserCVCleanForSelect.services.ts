export const preloadUserCVCleanForSelectServices = async (data: any) => {
    if (data) {
        const todo = await data.map((item: any) => ({
            Score: item?.Score,
            birthday: item?.birthday,
            createdAt: item?.createdAt,
            email: item?.email,
            fullname: item?.fullname,
            id: item?.id,
            phone: item?.phone,
            status_user: item?.status_user,
            updatedAt: item?.updatedAt
        }));
        return todo
    }


}