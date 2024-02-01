import { useSelector, useDispatch } from 'react-redux';
import {
  setDisponibilityData,
  addDisponibilityEntry,
  updateDisponibilityEntry,
  deleteDisponibilityEntry,
} from '@/redux/features/stepss/disponibility/disponibilitySlice';

const DisponibilityService = () => {
  const disponibility = useSelector((state: any) => state.disponibility);
  const dispatch = useDispatch();

  const handleSelectChange = (newValues: any) => {
    // Implement logic for updating selected values in Redux state
    dispatch(setDisponibilityData({ selectedValues: newValues }));
  };

  const handleAddSelect = (newOption: any) => {
    // Implement logic for adding a new option in Redux state
    dispatch(addDisponibilityEntry(newOption));
  };

  const handleSaveData = () => {
    // Implement logic for saving data (if needed)
    console.log('Saved data:***************', disponibility.selectedValues);
  };

  return {
    selectedValues: disponibility.selectedValues,
    contentOptionSelect: disponibility.contentOptionSelect,
    MAX_COUNT: disponibility.MAX_COUNT,
    handleSelectChange,
    handleAddSelect,
    handleSaveData,
  };
};

export default DisponibilityService;