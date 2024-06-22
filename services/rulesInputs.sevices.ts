export const rulesWords = (typesData: any) => {
    let dataR = 'text'
    if (typeof typesData === "bigint") dataR = "number"
    if (typeof typesData === "boolean") dataR = "checkbox"
    if (typeof typesData === "string") dataR = "text"
    if (typesData === 'id') dataR = 'number'
    if (typesData === 'duration') dataR = 'text'
    if (typesData === 'description_steps') dataR = 'description_steps'
    if (typesData === 'description') dataR = 'description_steps'
    if (typesData === 'all_Steps') dataR = 'number'
    if (typesData === 'start_DateTime') dataR = 'datetime-local'
    if (typesData === 'after_steps') dataR = 'number'
    if (typesData.includes('@')) dataR = 'email'
    if (typesData?.startsWith('status_')) dataR = 'boolean'
    return dataR
}