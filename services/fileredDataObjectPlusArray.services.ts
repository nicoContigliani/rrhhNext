export const filteredDataObjectPlusArray = async (props: any) => {
    const { datas, recordData } = props;

    try {
        const filteredData = await datas?.filter((item: any) => item.id === recordData.id);

        const arrayValues = await filteredData?.map((data: any) =>
            Object.values(data).filter(Array.isArray)
        ).reduce((acc: any, curr: any) => acc.concat(curr), []);

        const nonArrayValues = await (filteredData?.map((data: any) =>
            Object.values(data).filter((value: any) => !Array.isArray(value))
        ).reduce((acc: any, curr: any) => acc.concat(curr), []) || []);

        return { filteredData, arrayValues, nonArrayValues }; // Return the results
    } catch (error) {
        console.log(" ~ fileredDataObjectPlusArray ~ error:", error);
        throw error; // Rethrow the error to propagate it up
    }
};