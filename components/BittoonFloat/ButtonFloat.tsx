
import React from 'react';
import styles from './ButtonFloat.module.css';
import { FloatButton } from 'antd';
// import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BuildIcon from '@mui/icons-material/Build';
import GroupIcon from '@mui/icons-material/Group';
import LanguageIcon from '@mui/icons-material/Language';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Tooltip from '@mui/material/Tooltip';

import ReorderIcon from '@mui/icons-material/Reorder';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const ButtonFloat = (props: any) => {
    const { todo: {
        personDescriptionDataS,
        personDescriptionS,
        educationsDataS,
        experienceWorkDataS,
        experienceWorkFreeDataS,
        hardSkillData,
        softSkillDataS,
        lenguageDataS,
        disponibilityS,
        setPersonDescriptionDataS,
        setPersonDescriptionS,
        setEducationsDataS,
        setExperienceWorkDataS,
        setExperienceWorkFreeDataS,
        setHardSkillDatas,
        setLenguageDatas,
        setDisponibilityS,
        setSoftSkillDataS,
        gridFormatView,
        setGridFormatView
    } } = props;

    const toggleState = (setState: any) => {
        setState((prevState: any) => !prevState);
    }

    return (
        <div className={styles.FloatButton}>
            <FloatButton.Group
                className={styles.body}
                trigger="hover"
                type="primary"
                icon={

                    <div>
                        <SettingsSuggestIcon />
                    </div>}
            >
                {
                    [
                        { state: personDescriptionDataS, setState: setPersonDescriptionDataS, icon: <AccountCircleIcon />, title: "Person Description Data" },
                        { state: personDescriptionS, setState: setPersonDescriptionS, icon: <AccountCircleIcon />, title: "Person Description" },
                        { state: educationsDataS, setState: setEducationsDataS, icon: <SchoolIcon />, title: "Education" },
                        { state: experienceWorkDataS, setState: setExperienceWorkDataS, icon: <WorkIcon />, title: "Experience Work" },
                        { state: experienceWorkFreeDataS, setState: setExperienceWorkFreeDataS, icon: <SportsEsportsIcon />, title: "Experience Free Work" },
                        { state: hardSkillData, setState: setHardSkillDatas, icon: <BuildIcon />, title: "Hard Skill" },
                        { state: softSkillDataS, setState: setSoftSkillDataS, icon: <GroupIcon />, title: "Soft Skill" },
                        { state: lenguageDataS, setState: setLenguageDatas, icon: <LanguageIcon />, title: "Language" },
                        { state: disponibilityS, setState: setDisponibilityS, icon: <ScheduleIcon />, title: "Disponibility" },
                        { state: gridFormatView, setState: setGridFormatView, icon: <GridViewIcon />, title: "Gried View" },

                    ].map((item, index) => (
                        <Tooltip key={index} title={item.title} placement="left">
                            <div className={styles.icon}>
                                {item.state ?
                                    React.cloneElement(item.icon, {
                                        color: "primary",
                                        fontSize: "large",
                                        onClick: () => toggleState(item.setState)
                                    }) :
                                    React.cloneElement(item.icon, {
                                        color: "disabled",
                                        fontSize: "large",
                                        onClick: () => toggleState(item.setState)
                                    })
                                }
                            </div>
                        </Tooltip>
                    ))
                }
            </FloatButton.Group>
        </div >
    );
}

export default ButtonFloat;