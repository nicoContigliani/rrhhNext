

export const formaterNotArray = (dataArray: any[] | undefined) => {
    return dataArray?.map((item: any) => {
        const arrays = Object.keys(item).reduce((acc: any, key: any) => {
            const element = item[key];
            if (!Array.isArray(element) && typeof element !== "object") {
                acc[key] = element;
            }
            return acc;
        }, {});

        return arrays;
    });
}



