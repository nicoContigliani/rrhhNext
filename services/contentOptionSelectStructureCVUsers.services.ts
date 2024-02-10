export const contentOptionSelectCVUsers = async(data: any) => {

    if (data) {
        const todo = await data.map((item: any) => ({
           value:item?.id , label:`${item?.fullname} - ${item?.email}  `
        }));
        return todo
    }

    
}
