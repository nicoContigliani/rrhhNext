export const sortSectionTypeId = async (data: any) => {
    // Verificar si hay datos
    if (!data || !data.Sections || !Array.isArray(data.Sections)) {
        console.error("Error: `data` no es válido o no contiene un array de Sections");
        return data; // Devolver los datos originales si no son válidos
    }

    // Hacer una copia de los datos para no modificar el original
    let dataCVTodo = { ...data };
    let sections = [...dataCVTodo.Sections];
    let genearlDataCV = {
        createdAt: dataCVTodo.createdA,
        description_cv: dataCVTodo.description_cv,
        id: dataCVTodo.id,
        status_cv: dataCVTodo.status_cv,
        title: dataCVTodo.title,
        updatedAt: dataCVTodo.updatedAt,
    }


    // Ordenar las secciones por SectionTypeId
    sections.sort((a: any, b: any) => {
        if (a?.SectionTypeId === undefined || b?.SectionTypeId === undefined) {
            console.error("Error: `SectionTypeId` no definido para un elemento");
            return 0;
        }
        return parseInt(a.SectionTypeId) - parseInt(b.SectionTypeId);
    });

    // Actualizar las secciones en los datos de retorno
    dataCVTodo.Sections = sections;

    return { dataCVTodo, sections, genearlDataCV };
};