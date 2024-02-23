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
        experienceFree: { experienceFreeData },
        hardSkills: { selectedValues },
        tittleCV: { selectedValues: selectedValueT },
        softSkills: { selectedValues: selectedValuesSS },
        lenguage: { selectedValues: selectedValuesL },
        disponibility: { selectedValues: selectedValuesD }
    } = useSelector((state: any) => state);


    const handleSave = async () => {

        try {
            let dataChange: any | any[] = [...personalInformationData]
            let dataChangeExperienceFree: any | any[] = [...experienceFreeData]
            let dataChangeExperience: any | any[] = [...experienceData]
            let dataChangeEducation: any | any[] = [...educationData]
            let dataChangePersonalDescriptionData: any | any[] = [...personalDescriptionData]

            let dataForSend = {
                PersonalInformation: dataChange,

                PersonTitle: selectedValueT,
                PersonalDescription: dataChangePersonalDescriptionData,
                Education: dataChangeEducation,
                Experience: dataChangeExperience,
                ExperienceFree: dataChangeExperienceFree,
                HardSkill: selectedValues,
                SoffSkill: selectedValuesSS,
                Lenguage: selectedValuesL,
                Disponibility: selectedValuesD
            }

            if (typeof dataChange[0] === 'object' && dataChange[0] !== null) {
                if (!Object.isExtensible(dataChange[0])) {
                    dataChange[0] = { ...dataChange[0] }; 
                }

                // Check and assign properties
                if (!dataChange[0].linkedin) {
                    dataChange[0].linkedin = "";
                }
                if (!dataChange[0].repository) {
                    dataChange[0].repository = "";
                }
                if (!dataChange[0].folderprofile) {
                    dataChange[0].folderprofile = "";
                }
            } else {
                console.error("dataChange[0] is not an object");
            }

            try {
                if (typeof dataChangeExperienceFree[0] === 'object' && dataChangeExperienceFree[0] !== null) {

                    if (!Object.isExtensible(dataChangeExperienceFree[0])) {
                        dataChangeExperienceFree[0] = { ...dataChangeExperienceFree[0] }; 
                    }

                    if (!dataChangeExperienceFree[0].detail_atribute) dataChangeExperienceFree[0].detail_atribute = "";
                    if (!dataChangeExperienceFree[0].compnay) dataChangeExperienceFree[0].compnay = "";
                    if (!dataChangeExperienceFree[0].job) dataChangeExperienceFree[0].job = ""
                    if (!dataChangeExperienceFree[0].start) dataChangeExperienceFree[0].start = "";
                    if (!dataChangeExperienceFree[0].finish) dataChangeExperienceFree[0].finish = "";
                }


            } catch (error) {
                console.log("🚀 ~ handleSave ~ error:--88--", error)

            }

            try {
                if (typeof dataChangeExperience[0] === 'object' && dataChangeExperience[0] !== null) {

                    if (!Object.isExtensible(dataChangeExperience[0])) {
                        dataChangeExperience[0] = { ...dataChangeExperience[0] }; // Create a shallow copy to make it extensible
                    }

                    if (!dataChangeExperience[0].detail_atribute) dataChangeExperience[0].detail_atribute = "";
                    if (!dataChangeExperience[0].compnay) dataChangeExperience[0].compnay = "";
                    if (!dataChangeExperience[0].job) dataChangeExperience[0].job = ""
                    if (!dataChangeExperience[0].start) dataChangeExperience[0].start = "";
                    if (!dataChangeExperience[0].finish) dataChangeExperience[0].finish = "";
                }


            } catch (error) {
                console.log("🚀 ~ handleSave ~ error:--88--", error)

            }

            try {
                if (typeof dataChangeEducation[0] === 'object' && dataChangeEducation[0] !== null) {

                    if (!Object.isExtensible(dataChangeEducation[0])) {
                        dataChangeEducation[0] = { ...dataChangeEducation[0] }; // Create a shallow copy to make it extensible
                    }

                    if (!dataChangeEducation[0].title) dataChangeEducation[0].title = "";
                    if (!dataChangeEducation[0].institute) dataChangeEducation[0].institute = "";
                    if (!dataChangeEducation[0].start) dataChangeEducation[0].start = ""
                    if (!dataChangeEducation[0].finish) dataChangeEducation[0].finish = "";
                }


            } catch (error) {
                console.log("🚀 ~ handleSave ~ error:--88--", error)

            }
            try {
                if (typeof dataChangePersonalDescriptionData[0] === 'object' && dataChangePersonalDescriptionData[0] !== null) {

                    if (!Object.isExtensible(dataChangePersonalDescriptionData[0])) {
                        dataChangePersonalDescriptionData[0] = { ...dataChangePersonalDescriptionData[0] }; // Create a shallow copy to make it extensible
                    }
                    if (!dataChangePersonalDescriptionData[0].descriptionPerson) dataChangePersonalDescriptionData[0].descriptionPerson = "";
                }


            } catch (error) {
                console.log("🚀 ~ handleSave ~ error:--88--", error)

            }
            console.log("🚀 ~ handleSave ~ dataForSend:", dataForSend)

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