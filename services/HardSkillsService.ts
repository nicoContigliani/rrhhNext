import { useSelector, useDispatch } from 'react-redux';
import {
  setHardSkillsData,
  addHardSkillsEntry,
  updateHardSkillsEntry,
  deleteHardSkillsEntry,
} from '@/redux/features/stepss/hardSkill/hardSkillsSlice';

const HardSkillsService = () => {
  const hardSkillsData = useSelector((state: any) => state.hardSkills);
  const dispatch = useDispatch();

  const handleSelectChange = (newValues: any) => {
    // Implement logic for updating selected values in Redux state
    dispatch(setHardSkillsData({ selectedValues: newValues }));
  };

  const handleAddSelect = (newOption: any) => {
    // Implement logic for adding a new option in Redux state
    dispatch(addHardSkillsEntry(newOption));
  };

  const handleSaveData = () => {
    // Implement logic for saving data (if needed)
    console.log('Saved data:', hardSkillsData.selectedValues);
  };

  return {
    selectedValues: hardSkillsData.selectedValues,
    contentOptionSelect: hardSkillsData.contentOptionSelect,
    MAX_COUNT: hardSkillsData.MAX_COUNT,
    handleSelectChange,
    handleAddSelect,
    handleSaveData,
  };
};

export default HardSkillsService;