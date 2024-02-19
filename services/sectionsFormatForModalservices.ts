export const sectionsFormatForModal = async (data: any) => {

    const sectionsReturn = {
        perInfData: null,
        perDescData: null,
        eduData: null,
        experFree: null,
        experData: null,
        hardSData: null,
        softSData: null,
        lenguageData: null,
        dispData: null,
        tittleData: null
    };

    for (let i = 0; i < data?.length; i++) {
        const element = data[i];
        switch (element.SectionTypeId) {
            case "1":
                sectionsReturn.perInfData = element;
                break;
            case "2":
                sectionsReturn.perDescData = element;
                break;
            case "3":
                sectionsReturn.eduData = element;
                break;
            case "4":
                sectionsReturn.experFree = element;
                break;
            case "5":
                sectionsReturn.experData = element;
                break;
            case "6":
                sectionsReturn.hardSData = element;
                break;
            case "7":
                sectionsReturn.softSData = element;
                break;
            case "8":
                sectionsReturn.lenguageData = element;
                break;
            case "9":
                sectionsReturn.dispData = element;
                break;
            default:
                sectionsReturn.tittleData = element;
        }
    }

    return sectionsReturn;

}