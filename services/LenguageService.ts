import { useSelector, useDispatch } from 'react-redux';
import {
  setLenguageData,
  addLenguageEntry,
  updateLenguageEntry,
  deleteLenguageEntry,
} from '@/redux/features/stepss/Lenguage/lenguageSlice';

const HardSkillsService = () => {
  const lenguageData = useSelector((state: any) => state.lenguage);
  const dispatch = useDispatch();

  const handleSelectChange = (newValues: any) => {
    // Implement logic for updating selected values in Redux state
    dispatch(setLenguageData({ selectedValues: newValues }));
  };

  const handleAddSelect = (newOption: any) => {
    // Implement logic for adding a new option in Redux state
    dispatch(addLenguageEntry(newOption));
  };

  const handleSaveData = () => {
    // Implement logic for saving data (if needed)
    console.log('Saved data:', lenguageData.selectedValues);
  };

  return {
    selectedValues: lenguageData.selectedValues,
    contentOptionSelect: lenguageData.contentOptionSelect,
    MAX_COUNT: lenguageData.MAX_COUNT,
    handleSelectChange,
    handleAddSelect,
    handleSaveData,
  };
};

export default HardSkillsService;