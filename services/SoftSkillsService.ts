import { useSelector, useDispatch } from 'react-redux';
import {
  setSoftSkillsData,
  addSoftSkillsEntry,
  updateSoftSkillsEntry,
  deleteSoftSkillsEntry,
} from '@/redux/features/stepss/softSkill/softSkillsSlice';

const SoftSkillsService = () => {
  const softSkillsData = useSelector((state: any) => state.softSkills);
  const dispatch = useDispatch();

  const handleSelectChange = (newValues: any) => {
    // Implement logic for updating selected values in Redux state
    dispatch(setSoftSkillsData({ selectedValues: newValues }));
  };

  const handleAddSelect = (newOption: any) => {
    // Implement logic for adding a new option in Redux state
    dispatch(addSoftSkillsEntry(newOption));
  };

  const handleSaveData = () => {
    // Implement logic for saving data (if needed)
    console.log('Saved data:', softSkillsData.selectedValues);
  };

  return {
    selectedValues: softSkillsData.selectedValues,
    contentOptionSelect: softSkillsData.contentOptionSelect,
    MAX_COUNT: softSkillsData.MAX_COUNT,
    handleSelectChange,
    handleAddSelect,
    handleSaveData,
  };
};

export default SoftSkillsService;