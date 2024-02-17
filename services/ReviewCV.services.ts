import { cvNextAsync } from "@/redux/features/CV/cvSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ReviewCV = () => {

    const dispatch = useDispatch();

      const {
        personalInformation: { personalInformationData },
        personalDescription: { personalDescriptionData },
        education: { educationData },
        experience: { experienceData },
        hardSkills: { selectedValues },
        tittleCV: { selectedValues: selectedValueT },
        softSkills: { selectedValues: selectedValuesSS },
        lenguage: { selectedValues: selectedValuesL },
        disponibility: { selectedValues: selectedValuesD }
      } = useSelector((state: any) => state);

    const dataForSend = {
        PersonalInformation:personalInformationData,
        PersonTitle:selectedValueT,
        PersonalDescription:personalDescriptionData,
        Education:educationData,
        Experience:experienceData,
        HardSkill:selectedValues,
        SoffSkill:selectedValuesSS,
        Lenguage:selectedValuesL,
        Disponibility:selectedValuesD
    }

    const handleSave = async () => {
        try {

            dispatch(cvNextAsync(dataForSend)); // Usa cvNextAsync correctamente aquí
          
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