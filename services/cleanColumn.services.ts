export const cleanColumns = async (datas: any, cvData: any) => {


    let data = datas

    let cvDataR: any[] | undefined = cvData
    
    
    if (cvDataR === undefined) console.log("undefined")
    if (cvDataR !== undefined) {
        try {
            const newData = await cvDataR?.map((item: any) => {
                // Filtrar las propiedades basadas en el array 'data'
                const newItem = Object.keys(item)
                    .filter(key => !data.includes(key))
                    .reduce((acc: any, key) => {
                        acc[key] = item[key];
                        return acc;
                    }, {});

                return newItem;
            });
            return newData
        } catch (error) {
        console.log("🚀 ~ file: cleanColumn.services.ts:25 ~ cleanColumns ~ error:", error)

        }
    }




    console.log("🚀 ~ file: cleanColumn.services.ts:7 ~ cleanColumns ~ cvDataR:", cvDataR)







}












