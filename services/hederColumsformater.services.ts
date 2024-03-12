export const hederColumsformater = (props: any) => {
    return props?.map((item: any) => {
        return {
            title: item, 
            dataIndex: item, 
            key: item, 
            responsive: ['lg'],
            disabled: false

        }
    })

}