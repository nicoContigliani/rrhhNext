import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import useAxios from "@/services/useAxios.services";
import dotenv from 'dotenv';
import { readLocalStorage } from "@/services/storage.services";
// dotenv.config({ path: '@/.env' });
dotenv.config();
const API_URL = process.env.API_URL;

const dataSearch: any[] = ["token"]


// import routesName from '../../../routes.api.json'


dotenv.config();

export interface CVState {
    moduleCVActive?: boolean;
    tokenModuleCV?: string;
    cvDatas: any;
    cvOneData: any;
    message: any;
    httpStatus: any;
    moduleName: any;
}


const createDataStart = {
    colIdPath: [
        {
            ids: "RoadMapId",
            paths: " /RoadMap/RoadMap/",
            datakey: ['id', 'description'],
            titleModal: 'Vacancy',
            rules: {
                isMultiple: false
            }
        },

    ]
}

const createDataSecond = {
    colIdPath: [
        {
            ids: "VacancyId",
            paths: "/Vacancy/Vacancy",
            datakey: ['id', 'title'],
            titleModal: 'Vacancy',
            rules: {
                isMultiple: false
            }
        },

    ]
}
const dataThirds = {
    colIdPath: [
        {
            ids: "InterviewId",
            paths: "/Interview/Interview",
            datakey: ['id', 'interviewers'],
            titleModal: 'Interview',
            rules: {
                isMultiple: false
            }


        },
        {
            ids: "UserId",
            paths: "/User/User",
            datakey: ['id', 'fullname'],
            titleModal: 'Interview Users',
            rules: {
                isMultiple: true
            }
        },
        {
            ids: "UserId",
            paths: "/User/User",
            datakey: ['id', 'fullname'],
            titleModal: 'Interview Responsibles',
            rules: {
                isMultiple: true
            }
        },
    ]
}




const initialState: any | undefined = {
    data: [] || undefined,
    col1: [] || undefined,
    data1: [] || undefined,
    colStart: [] || undefined,
    //All element RoadMap
    dataGetRoadMap: [] || undefined,
    interviewsData: [] || undefined,
    iterviewUsers: [] || undefined,
    iterviewUsersKey: [] || undefined,
    interviewResponsible: [] || undefined,
    vacanciesData: [] || undefined,
    vacanciesDataKey: [] || undefined,
    users: [] || undefined,
    userKey: [] || undefined,
    createDataStart: [createDataStart] || undefined,
    createDataSeconds: [createDataSecond] || undefined,
    createDataThirds: [dataThirds] || undefined,

    rules_creates: [] || undefined,
    updateMethodsIds: null,
    dataSeconds: [] || undefined,

    dataRoadMapId: [] || undefined,
    dataVacanciesId: [] || undefined,
    dataUserId: [] || undefined,
    dataUserInterview: [] || undefined,
    dataUserResponsible: [] || undefined,
    dataInterviewId: [] || undefined,

    dataRoadMapIdData: [] || undefined,
    dataVacanciesIdData: [] || undefined,
    dataUserIdData: [] || undefined,
    dataUserInterviewData: [] || undefined,
    dataUserResponsibleData: [] || undefined,
    dataInterviewIdData: [] || undefined,

    dataRoadMapIdDataKeys: [] || undefined,
    dataVacanciesIdDataKeys: [] || undefined,
    dataUserIdDataKeys: [] || undefined,
    dataUserInterviewDataKeys: [] || undefined,
    dataUserResponsibleDataKeys: [] || undefined,
    dataInterviewIdDataKeys: [] || undefined,


}


export const preloadRoadMapsData = createAsyncThunk(
    "RoadMap/preload",
    async () => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/RoadMap/RoadMap/`,
                method: 'GET',
                body: "",
                idParams: null,
                token: token
            }

            const response = await useAxios(todo);
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);



export const preloadInterViewData = createAsyncThunk(
    "Interview/preload",
    async () => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/Interview/Interview`,
                method: 'GET',
                body: "",
                idParams: null,
                token: token
            }
            console.log("🚀 ~ todo:", todo)

            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);


export const preloadVacancyData = createAsyncThunk(
    "Vacancy/preload",
    async () => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/Vacancy/Vacancy`,
                method: 'GET',
                body: "",
                idParams: null,
                token: token
            }
            console.log("🚀 ~ todo:", todo)

            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);

export const preloadUserData = createAsyncThunk(
    "Users/preload",
    async () => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/User/User/`,
                method: 'GET',
                body: "",
                idParams: null,
                token: token
            }
            console.log("🚀 ~ todo:", todo)

            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);

export const roadMapsDataId = createAsyncThunk(
    "RoadMap/id",
    async (data: any) => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/RoadMap/RoadMap/`,
                method: 'GET',
                body: "",
                idParams: data,
                token: token
            }

            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);
export const vacancyDataId = createAsyncThunk(
    "Vacancy_Id/id",
    async (data: any) => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/Vacancy/Vacancy`,
                method: 'GET',
                body: "",
                idParams: data,
                token: token
            }
            console.log("🚀 ~ todo:", todo)

            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);
export const userDataId = createAsyncThunk(
    "Users_Id/id",
    async (data: any) => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/User/User/`,
                method: 'GET',
                body: "",
                idParams: data,
                token: token
            }
            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);
export const userIntreviewDataId = createAsyncThunk(
    "UsersIntreview_Id/id",
    async (data: any) => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/InterviewUser/InterviewUser/`,
                method: 'GET',
                body: "",
                idParams: data,
                token: token
            }
            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);
export const userIntreviewResponsibleDataId = createAsyncThunk(
    "UsersResponsibleIntreview_Id/id",
    async (data: any) => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/InterviewResponsible/InterviewResponsible/`,
                method: 'GET',
                body: "",
                idParams: data,
                token: token
            }
            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);
export const interViewDataId = createAsyncThunk(
    "Interview_Id/id",
    async (data: any) => {
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = await {
                url: `${API_URL}/Interview/Interview`,
                method: 'GET',
                body: "",
                idParams: data,
                token: token
            }
            console.log("🚀 ~ todo:", todo)

            const response = await useAxios(todo);
            console.log("🚀 ~ response:", response)
            return response;

        } catch (error) {
            console.error("Error fetching CV data:", error);
            throw error;
        }
    }
);




export const cvIdAsync = createAsyncThunk(
    "CVId/Slice",
    async (id: any) => {
        console.log("🚀 ~ id:", id)
        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = {
                url: `${API_URL}/CVNext/CVNext/${id}`,
                method: 'GET',
                body: "",
                idParams: null,
                token: token

            }
            const response = await useAxios(todo);
            return response;

        } catch (error) {
            console.error("Error fetching CV ID data:", error);
            throw error;
        }
    }
);

export const cvNextAsync: any = createAsyncThunk(
    "CVId/Post/Slice",
    async (data: any) => {

        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = {
                url: `${API_URL}/CVNext/CVNext/`,
                method: 'POST',
                body: data,
                idParams: null,
                token: token

            }
            const response = await useAxios(todo);
            console.log("********************************************************")
            console.log("🚀 ~ response:***cvNextAsync******************", response, "🚀 ~ response:***cvNextAsync******************")
            console.log("********************************************************")

            return response;
        } catch (error) {
            console.error("Error fetching CV ID data:", error);
            throw error;
        }
    }
);
export const cvNextAsyncDelete: any = createAsyncThunk(
    "CVId/Delete/Slice",
    async (data: any, idParams: any) => {

        try {
            const { token } = await readLocalStorage(dataSearch);

            const todo: any = {
                url: `${API_URL}/CVNext/CVNext/`,
                method: 'POST',
                body: data,
                idParams: idParams,
                token: token

            }
            const response = await useAxios(todo);
            console.log("🚀 ~ response:******", response)
            return response;
            return true
        } catch (error) {
            console.error("Error fetching CV ID data:", error);
            throw error;
        }
    }
);

export const roadMapSlice = createSlice({
    name: "roadMap/slice",
    initialState,
    reducers: {
        cvs: (state, action: PayloadAction<any>) => {
            state.cvDatas = action.payload.data || {};
            state.cvOneData = action.payload.data || {};

        },
        getRoadMap: (state, action: PayloadAction<any>) => {
            state.dataGetRoadMap = action.payload.data || {};
            // state.cvOneData = action.payload.data || {};

        },
        getInterViews: (state, action: PayloadAction<any>) => {
            state.interviewsData = action.payload.data || {};
            // state.cvOneData = action.payload.data || {};

        },
        getVacancies: (state, action: PayloadAction<any>) => {
            state.vacanciesData = action.payload.data || {};
            // state.cvOneData = action.payload.data || {};

        },
        getUsers: (state, action: PayloadAction<any>) => {
            state.users = action.payload.data || {};
            // state.cvOneData = action.payload.data || {};

        },
        updateColStart: (state, action: PayloadAction<string[]>) => {
            state.colStart = action?.payload;
        },
        updateData1: (state, action: PayloadAction<string[]>) => {
            state.data1 = action?.payload;
        },
        updateInterviewData: (state, action: PayloadAction<string[]>) => {
            state.interviewsData = action?.payload;
        },
        updateInterviewDataKey: (state, action: PayloadAction<string[]>) => {
            state.interviewsDataKey = action?.payload;
        },
        updateVacanciesData: (state, action: PayloadAction<string[]>) => {
            state.vacanciesData = action?.payload;
        },
        updateVacanciesDataKey: (state, action: PayloadAction<string[]>) => {
            state.vacanciesDataKey = action?.payload;
        },

        updateCool1: (state, action: PayloadAction<string[]>) => {
            state.col1 = action?.payload;
        },
        updateCreateDataStart: (state, action: PayloadAction<string[]>) => {
            state.createDataStart = action?.payload;
        },

        updateCreateDataSeconds: (state, action: PayloadAction<any | undefined>) => {
            state.createDataSeconds = action?.payload;
        },
        updateCreateDataThirds: (state, action: PayloadAction<any | undefined>) => {
            state.createDataThirds = action?.payload;
        },

        updateDataSecond: (state, action: PayloadAction<any | undefined>) => {
            state.dataSeconds = action?.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(preloadRoadMapsData.fulfilled, (state, action) => {
                if (action.payload) {
                }
                state.dataGetRoadMap = action.payload.data || {};
            })
            .addCase(preloadInterViewData.fulfilled, (state, action) => {
                if (action.payload) {
                    state.interviewsData = action.payload.data || {};
                }
            })
            .addCase(preloadVacancyData.fulfilled, (state, action) => {
                if (action.payload) {
                    state.vacanciesData = action.payload.data || {};
                }
            })
            .addCase(preloadUserData.fulfilled, (state, action) => {
                if (action.payload) {
                    state.users = action.payload.data || {};
                }
            })


            .addCase(roadMapsDataId.fulfilled, (state, action) => {
                if (action.payload) {
                    state.dataRoadMapId = action.payload.data || [];
                    const dataR = action?.payload?.data

                    const dataReturn: any | any[] | undefined = dataR?.map((item: any) => {
                        const result: any = {};
                        const arrays: any = {};

                        for (const key in item) {
                            if (Array.isArray(item[key])) {
                                arrays[key] = item[key];
                            } else {
                                result[key] = item[key];
                            }
                        }
                        return result
                    })

                    state.dataRoadMapIdData = dataReturn || [];

                    const allKeys = dataR.reduce((acc: any | any[], obj: any) => {
                        Object.keys(obj).forEach((key) => {
                            if (!acc.includes(key)) {
                                acc.push(key);
                            }
                        });
                        return acc;
                    }, []);
                    state.dataRoadMapIdDataKeys = allKeys || [];


                }
            })
            .addCase(vacancyDataId.fulfilled, (state, action) => {
                if (action.payload) {
                    state.dataVacanciesId = action.payload.data || {};

                    const dataR = action?.payload?.data

                    const dataReturn: any | any[] | undefined = dataR?.map((item: any) => {
                        const result: any = {};
                        const arrays: any = {};

                        for (const key in item) {
                            if (Array.isArray(item[key])) {
                                arrays[key] = item[key];
                            } else {
                                result[key] = item[key];
                            }
                        }
                        return result
                    })
                    state.dataVacanciesIdData = dataReturn || [];

                    const allKeys = dataR.reduce((acc: any | any[], obj: any) => {
                        Object.keys(obj).forEach((key) => {
                            if (!acc.includes(key)) {
                                acc.push(key);
                            }
                        });
                        return acc;
                    }, []);
                    state.dataVacanciesIdDataKeys = allKeys || [];
                }
            })
            .addCase(userDataId.fulfilled, (state, action) => {
                if (action.payload) {
                    state.dataUserId = action.payload.data || {};

                    const dataR = action?.payload?.data

                    const dataReturn: any | any[] | undefined = dataR?.map((item: any) => {
                        const result: any = {};
                        const arrays: any = {};

                        for (const key in item) {
                            if (Array.isArray(item[key])) {
                                arrays[key] = item[key];
                            } else {
                                result[key] = item[key];
                            }
                        }
                        return result
                    })
                    state.dataUserIdData = dataReturn || [];

                    const allKeys = dataR.reduce((acc: any | any[], obj: any) => {
                        Object.keys(obj).forEach((key) => {
                            if (!acc.includes(key)) {
                                acc.push(key);
                            }
                        });
                        return acc;
                    }, []);
                    state.dataUserIdDataKeys = allKeys || [];
                }
            })


            .addCase(userIntreviewDataId.fulfilled, (state, action) => {
                if (action.payload) {
                    state.dataUserInterview = action.payload.data || {};
                    const dataR = action?.payload?.data

                    const dataReturn: any | any[] | undefined = dataR?.map((item: any) => {
                        const result: any = {};
                        const arrays: any = {};

                        for (const key in item) {
                            if (Array.isArray(item[key])) {
                                arrays[key] = item[key];
                            } else {
                                result[key] = item[key];
                            }
                        }
                        return result
                    })
                    state.dataUserInterviewData = dataReturn || [];

                    const allKeys = dataR.reduce((acc: any | any[], obj: any) => {
                        Object.keys(obj).forEach((key) => {
                            if (!acc.includes(key)) {
                                acc.push(key);
                            }
                        });
                        return acc;
                    }, []);
                    state.dataUserInterviewDataKeys = allKeys || [];
                }
            })

            .addCase(userIntreviewResponsibleDataId.fulfilled, (state, action) => {
                if (action.payload) {
                    state.dataUserResponsible = action.payload.data || {};
                    const dataR = action?.payload?.data

                    const dataReturn: any | any[] | undefined = dataR?.map((item: any) => {
                        const result: any = {};
                        const arrays: any = {};

                        for (const key in item) {
                            if (Array.isArray(item[key])) {
                                arrays[key] = item[key];
                            } else {
                                result[key] = item[key];
                            }
                        }
                        return result
                    })
                    state.dataUserResponsibleData = dataReturn || [];

                    const allKeys = dataR.reduce((acc: any | any[], obj: any) => {
                        Object.keys(obj).forEach((key) => {
                            if (!acc.includes(key)) {
                                acc.push(key);
                            }
                        });
                        return acc;
                    }, []);
                    state.dataUserResponsibleDataKeys = allKeys || [];

                }
            })

            .addCase(interViewDataId.fulfilled, (state, action) => {
                if (action.payload) {
                    state.dataInterviewId = action.payload.data || {};
                    const dataR = action?.payload?.data

                    const dataReturn: any | any[] | undefined = dataR?.map((item: any) => {
                        const result: any = {};
                        const arrays: any = {};

                        for (const key in item) {
                            if (Array.isArray(item[key])) {
                                arrays[key] = item[key];
                            } else {
                                result[key] = item[key];
                            }
                        }
                        return result
                    })
                    state.dataInterviewIdData = dataReturn || [];

                    const allKeys = dataR.reduce((acc: any | any[], obj: any) => {
                        Object.keys(obj).forEach((key) => {
                            if (!acc.includes(key)) {
                                acc.push(key);
                            }
                        });
                        return acc;
                    }, []);
                    state.dataInterviewIdDataKeys = allKeys || [];
                }
            })








            .addCase(cvIdAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.cvOneData = action.payload.data || {};
                }
            })
            .addCase(cvIdAsync.pending, (state) => {
                state.cvOneData = {};
            })
            .addCase(cvIdAsync.rejected, (state) => {
                state.cvOneData = [];
                state.message = "rejected"
                state.httpStatus = 500

            })
            .addCase(cvNextAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.cvOneData = action.payload.data || {};
                    state.message = action.payload.message;
                    state.httpStatus = action.payload.status
                }
            })
            ;



        // cvNextAsync



    },
});

export const {
    cvs,
    getRoadMap,
    getInterViews,
    getVacancies,
    getUsers,
    updateColStart,
    updateData1,
    updateInterviewData,
    updateInterviewDataKey,
    updateVacanciesData,
    updateVacanciesDataKey,
    updateCool1,
    updateCreateDataStart,
    updateCreateDataSeconds,
    updateCreateDataThirds,
    updateDataSecond

} = roadMapSlice.actions;

export const selectRoadMap = (state: RootState) => state.roadMap;

export default roadMapSlice.reducer;