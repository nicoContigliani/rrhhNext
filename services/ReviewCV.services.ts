import { cvNextAsync } from "@/redux/features/CV/cvSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ReviewCV = () => {

    const dispatch = useDispatch();

    //   const {
    //     personalInformation: { personalInformationData },
    //     personalDescription: { personalDescriptionData },
    //     education: { educationData },
    //     experience: { experienceData },
    //     hardSkills: { selectedValues },
    //     tittleCV: { selectedValues: selectedValueT },
    //     softSkills: { selectedValues: selectedValuesSS },
    //     lenguage: { selectedValues: selectedValuesL },
    //     disponibility: { selectedValues: selectedValuesD }
    //   } = useSelector((state: any) => state);


    const dataForSend: any | undefined | object =
    {
        "PersonalInformation": [
            {
                "fullname": "Nicolás Contigliani",
                "email": "nico.contigliani@gmail.com",
                "phone": "2612444106",
                "birthsday": "2024-02-11"
            }
        ],
        "PersonTitle": [
            "Developer"
        ],
        "PersonalDescription": [
            {
                "persondescription": "Soy un profesional..."
            }
        ],
        "Education": [
            {
                "title": "Developer",
                "institute": "IIESSB",
                "start": "2024-02-14",
                "finish": "2024-02-17"
            }
        ],
        "Experience": [
            {
                "company": "OPENDEV",
                "start": "2024-02-18",
                "finish": "2024-02-18"
            }
        ],
        "HardSkill": [
            "React.js",
            "Node"
        ],
        "SoffSkill": [
            "god man",
            "Conflict resolution"
        ],
        "Lenguage": [
            "Englis"
        ],
        "Disponibility": [
            "8:00 - 13:00"
        ]
    }



    const handleSave = async () => {
        try {

            const resultAction = dispatch(cvNextAsync(dataForSend)); // Usa cvNextAsync correctamente aquí
            await console.log("Action Result:", resultAction); // Resultado de la acción
        } catch (error) {
            console.error("Error:", error); // Manejar errores si es necesario
        }
    };


    const addReviewCVEntrys = () => {
        // dispatch(addReviewCVEntry());
    };
    const updateReviewCVEntrys = (index: number, field: string, value: any) => {
        // dispatch(updateReviewCVEntry({ index, field, value }));
    };

    const deleteReviewCVEntrys = (index: number) => {
        // dispatch(deleteReviewCVEntry({ index }));
    };



    return {
        handleSave,
        addReviewCVEntrys,
        updateReviewCVEntrys,
        deleteReviewCVEntrys
    }

}


export default ReviewCV;