export const hederColumsformater = (props: any) => {
    return props?.map((item: any) => {
        return {
            title: item, 
            dataIndex: item, 
            key: item, 
            // responsive: ['md'],
            editable: true,
            disabled: false,

        }
    })

}