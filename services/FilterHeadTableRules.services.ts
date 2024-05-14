export const FilterHeadTableRules = ((element: any, dataTodo: any) => {
    return element
        .filter((item: any) => item.key !== "action") // Exclude "action" key
        .filter((item: any) => item.key !== "id")
        .filter((item: any) => !dataTodo?.some((excluded: any) => excluded.ids.includes(item.dataIndex))); // Exclude data based on colIdPath
})
