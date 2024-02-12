import React, { useEffect, useLayoutEffect, useState } from 'react';
import style from './PersonalInformationStep.module.css'; // Adjust path if needed
import { Button, Flex, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { readLocalStorage } from '@/services/storage.services';
import { UserCVDataSelected, preloadUserCVData } from '@/redux/features/stepss/personalnformation/personalnformationSlice';
import Selectscomponent from '@/components/Selects/Selects';
import { Input } from '@mui/material';




const PersonalInformationStep = (props: any) => {
  const [dataPersonalInformationSelector, setPersonalInformationSelector] = useState<any | any[]>()
  const dataPersonStorage: any | any[] = useSelector((state: any) => state);
  const personalInformationSelector: any | any[] = useSelector((state: any) => state?.personalInformation);



  const [personalInformation, setPersonalInformation] = useState<any[]>()
  const [openForProfessional, SetOpenForProfessional] = useState<any>(false)
  const [options, setoptions] = useState<any[]>()
  const [dataGeneralUser, setDataGeneralUser] = useState<any[]>()



  const dispatch = useDispatch();
  const {

    onAddPersonalInformationEntry,
    onSave,
    onDeletePersonalInformationEntry,
    handleAddSelect,
    onUpdatePersonalInformationEntry,
    insertInformationDataofDataFilter,
    dataFilter,
    setFilteredData,
    isAdmin,
    setIsAdmin
  } = props;

  const dataSearch: any[] = [
    "name_role",
    "admins",
    "Score",
    "birthday",
    "createdAt",
    "email",
    "fullname",
    "id",
    "phone",
    "status_user",
    "updatedAt"
  ]



  useEffect(() => {
    const { personalInformation: { personalInformationData } } = dataPersonStorage
    setPersonalInformation(personalInformationData)
  }, [dataPersonStorage])

  useEffect(() => {

    const { contentOptionSelect, peopleForCv } = personalInformationSelector
    const dataAsync = async () => {
      await setDataGeneralUser(peopleForCv[0])
      await setoptions(contentOptionSelect[0])
    }
    dataAsync()
  }, [personalInformationSelector, dataPersonStorage])


  useLayoutEffect(() => {

    dispatch(preloadUserCVData());
    dispatch(UserCVDataSelected());

  }, [!dataFilter]);




  useEffect(() => {
    const todoR = async () => {
      const {
        name_role,
        admins,
        Score,
        birthday,
        email,
        fullname,
        id,
        phone,
        status_user,
        updatedA
      } = await readLocalStorage(dataSearch);

      if (name_role === "Administrador" && admins) setIsAdmin(true);


      if (name_role !== "Administrador" && !admins && typeof (dataFilter) !== 'object') {

        console.log("***103**", Array.isArray(dataFilter))
        setFilteredData(
          [{
            Score,
            birthsday: birthday,
            email,
            fullname,
            id,
            phone,
            status_user,
            updatedA
          }]
        )
      }
    };

    todoR();
  }, []);


  useEffect(() => {
    const dataSend = async () => {
      if (dataFilter) await insertInformationDataofDataFilter(dataFilter)
    }
    dataSend()
  }, [dataFilter])


  const handleChange = (index: any, field: any, value: any) => {
    // onUpdatePersonalInformationEntry(index, field, value); // Actualiza la fuente de datos subyacente

    const updatedData = [...dataFilter]; // Crea una copia del array
    updatedData[index] = { ...updatedData[index], [field]: value }; // Actualiza el elemento específico

    setFilteredData(updatedData);

  };

  const handleClick = () => {
    SetOpenForProfessional(!openForProfessional)
  };



  return (
    <div className={style.body}>
      <h3>{props.title}</h3>

      <div className={style.body}>
        {
          isAdmin ?


            <Selectscomponent
              options={options}
              dataGeneralUser={dataGeneralUser}
              dataFilter={dataFilter}
              setFilteredData={setFilteredData}
            />
            : ""
        }

        {
          dataFilter !== undefined ?


            dataFilter?.map((entry: any, index: any) => (
              <div>

                <div key={index} className={style.inputsData}>
                  <div className={style.inputsData}>
                    <Input
                      className={style.inputs}
                      placeholder="fullname"
                      name="fullname"
                      type="text"
                      value={entry.fullname || ''}
                      onChange={(e) => handleChange(index, 'fullname', e.target.value)}
                    />
                    <Input
                      className={style.inputs}
                      placeholder="email"
                      name="email"
                      type="email"
                      value={entry.email || ''}
                      onChange={(e) => handleChange(index, 'email', e.target.value)}
                    />
                    <Input
                      className={style.inputs}
                      placeholder="phone"
                      name="phone"
                      type="text"
                      value={entry.phone || ''}
                      onChange={(e) => handleChange(index, 'phone', e.target.value)}
                    />
                    <label htmlFor="" className={style.inputs}> birthsday: </label>
                    <Input
                      className={style.inputs}
                      placeholder="birthsday"
                      name="birthsday"
                      type="date"
                      value={entry.birthsday || ''}
                      onChange={(e) => handleChange(index, 'birthsday', e.target.value)}
                    />

                  </div>
                  {
                    openForProfessional ?
                      <div className={style.inputsData}>
                        <Input
                          className={style.inputs}
                          placeholder="linkedin"
                          name="linkedin"
                          type="text"
                          value={entry.linkedin || ''}
                          onChange={(e) => handleChange(index, 'linkedin', e.target.value)}
                        />
                        <Input
                          className={style.inputs}
                          placeholder="Repository"
                          name="repository"
                          type="text"
                          value={entry.repository || ''}
                          onChange={(e) => handleChange(index, 'repository', e.target.value)}
                        />
                        <Input
                          className={style.inputs}
                          placeholder="Folder Profile"
                          name="folderprofile"
                          type="text"
                          value={entry.folderprofile || ''}
                          onChange={(e) => handleChange(index, 'folderprofile', e.target.value)}
                        />
                      </div>

                      : ""
                  }

                </div>
                <div className={style.createInputs}>
                  <Button
                    type="primary"
                    block
                    color="primary"
                    size="small"
                    onClick={handleClick}
                  >
                    if you professional ?
                  </Button>
                </div>
                <div className={style.deletes}>
                </div>
              </div>
            ))
            : ""
        }
        <div>
        </div>
      </div>



    </div>
  );
};

export default PersonalInformationStep;
