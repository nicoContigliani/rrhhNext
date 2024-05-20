export const rulesWordStartStatus = ((dataWord: string) => {
    if (dataWord.toLowerCase().startsWith("status_")) {

        return "checkbox";
    }

    if (dataWord.trim().toLowerCase().includes("interviewdatetime") || dataWord.trim().toLowerCase().includes("start_vacancy") || dataWord.trim().toLowerCase().includes("finish_vacancy")) {
        return "datetime-local";
    }
})

export const rulesType = (dataInputs: string) => {
    switch (dataInputs) {
        case "string":
            return "text";
        case "number":
            return "number";
        case "boolean":
            return "checkbox";

        case "date":
            return "date";


        default:
            return "text";
    }
}

