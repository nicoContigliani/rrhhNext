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
    dispatch(setSoftSkillsData({ selectedValues: newValues }));
  };

  const handleAddSelect = (newOption: any) => {
    dispatch(addSoftSkillsEntry(newOption));
  };

  const handleSaveData = () => {
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