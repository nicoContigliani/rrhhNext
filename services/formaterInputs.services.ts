export const rulesWordStartStatus = ((dataWord: string) => {
    if (dataWord?.toLowerCase()?.startsWith("status_")) {

        return "checkbox";
    }
    if (dataWord?.includes("start_")) {

        return "datetime-local";
    }
    if (dataWord?.includes("finish")) {

        return "datetime-local";
    }
    if (dataWord?.includes("interviewDateTime")) {

        return "datetime-local";
    }

    if (dataWord?.includes("all_Steps")) {

        return "number";
    }

    if (dataWord?.includes("duration")) {

        return "number";
    }

    if (dataWord?.includes("sequence")) {

        return "number";
    }
    if (dataWord?.includes("description_steps")) {

        return "description_steps";
    }
    if (dataWord?.includes("Id")) {

        return "number";
    }

})

export const rulesType = (dataInputs: any) => {


    
    switch (dataInputs?.types) {
        case "string":
            return "text";

        case "character varying":
            return "text";

        case "number":
            return "number";

        case "bigint":
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

