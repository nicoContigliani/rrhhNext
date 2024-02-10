import React, { useEffect, useLayoutEffect, useState } from 'react';
import style from './PersonalInformationStep.module.css'; // Adjust path if needed
import { Button, Flex, Select } from 'antd';
import Input from '@mui/material/Input';
import { useSelector, useDispatch } from 'react-redux';
import { readLocalStorage } from '@/services/storage.services';
import { UserCVDataSelected, preloadUserCVData } from '@/redux/features/stepss/personalnformation/personalnformationSlice';
import Selectscomponent from '@/components/Selects/Selects';




const PersonalInformationStep = (props: any) => {
  const [dataPersonalInformationSelector, setPersonalInformationSelector] = useState<any | any[]>()
  const dataPersonStorage: any | any[] = useSelector((state: any) => state);
  const personalInformationSelector: any | any[] = useSelector((state: any) => state?.personalInformation);



  const [personalInformation, setPersonalInformation] = useState<any[]>()
  const [openForProfessional, SetOpenForProfessional] = useState<any>(false)
  const [options, setoptions] = useState<any[]>()
  const [dataGeneralUser, setDataGeneralUser] = useState<any[]>()
  const [dataFilter, setFilteredData] = useState<any[] | any | undefined>()



  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const dispatch = useDispatch();


  const dataSearch: any[] = [
    "name_role",
    "admins",
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
  }, [personalInformationSelector])


  useEffect(() => {
    const todoR = async () => {
      const { name_role, admins } = await readLocalStorage(dataSearch);
      if (name_role === "Administrador" && admins) setIsAdmin(true);
    };

    todoR();
  }, [window,props]);

  useLayoutEffect(() => {
    dispatch(preloadUserCVData());
    dispatch(UserCVDataSelected());
  }, [dispatch]);





  const {

    onAddPersonalInformationEntry,
    onUpdatePersonalInformationEntry,
    onSave,
    onDeletePersonalInformationEntry,

    selectedValues,
    contentOptionSelect,
    MAX_COUNT,
    handleSelectChange,
    handleAddSelect,

  } = props;
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };


  const handleChange = (index: any, field: any, value: any) => {
    // onUpdatePersonalInformationEntry(index, field, value);
  };

  const handleClick = () => {
    // onAddPersonalInformationEntry();
    SetOpenForProfessional(!openForProfessional)
  };

  const handleSaveData = () => {
    onSave(personalInformation);
  };

  return (
    <div className={style.body}>
      <h3>{props.title}</h3>

      {/* {
        isAdmin ? "si" : "no"
      } */}


      <div className={style.body}>
        <h3>{props.title}</h3>


        <Selectscomponent
          options={options}
          dataGeneralUser={dataGeneralUser}
          dataFilter={dataFilter}
          setFilteredData={setFilteredData}
        />

        {dataFilter?.map((entry: any, index: any) => (
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
                  type="tel"
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
              <Button
                block
                color="primary"
                size="small"
                danger
                ghost
                onClick={() => onDeletePersonalInformationEntry(index)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}








        <div>
          {/* <Input
            type="text"
            name="addSelect"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add"
            className={style.input}
          /> */}

          <Button
            type="primary"
            block
            color="primary"
            size="small"
            onClick={() => handleAddSelect({ value: inputValue, label: inputValue })}
          >
            Add
          </Button>
        </div>
        <div className={style.deletes}>
          <Button
            size="small"
            block
            onClick={handleSaveData}
          >
            Guardar Datos
          </Button>
        </div>
      </div>



    </div>
  );
};

export default PersonalInformationStep;
