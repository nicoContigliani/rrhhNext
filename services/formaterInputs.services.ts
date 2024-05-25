export const rulesWordStartStatus = ((dataWord: string) => {
    if (dataWord.toLowerCase().startsWith("status_")) {

        return "checkbox";
    }
    if (dataWord.includes("start_")) {

        return "datetime-local";
    }
    if (dataWord.includes("finish")) {

        return "datetime-local";
    }
    if (dataWord.includes("interviewDateTime")) {

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

        case "boolean":
            return "checkbox";

        case "datetime-local":
            return "datetime-local"    


        default:
            return "text";
    }
}

