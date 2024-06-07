export const intreviewUsersAndResponsibleFormater = ((dataArray: any[]) => {
    const Interview_Responsibles: any[] | undefined = [];
    const Interview_Users: any[] | undefined = [];

    dataArray?.forEach(item => {
        let InterviewId: any;

        Object?.entries(item)?.forEach(([key, value]) => {
            if (key?.startsWith('Interview-')) {
                InterviewId = key?.split('-')[1];
            }

            if (key?.startsWith('Interview_Responsibles') && Array?.isArray(value)) {
                value?.forEach(responsible => {
                    const [UserId] = responsible?.split('-');
                    Interview_Responsibles?.push({
                        InterviewId,
                        RoadMapId: "n",
                        UserId,
                        responsibilityDescription: "1",
                        status_interview_responsible: true,
                    });
                });
            }

            if (key?.startsWith('Interview_Users') && Array?.isArray(value)) {
                value?.forEach(user => {
                    const [UserId] = user?.split('-');
                    Interview_Users?.push({
                        InterviewId,
                        RoadMapId: "n",
                        UserId,
                        userDescription: "1",
                        status_interview_user: true,
                    });
                });
            }
        });
    });
    return {
        Interview_Responsibles,
        Interview_Users
    }
})