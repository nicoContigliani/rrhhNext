import { useSelector, useDispatch } from 'react-redux';
import {
  setTittleCVData,
  addTittleCVEntry,
  updateTittleEntry,
  deleteTittleCVEntry,
} from '@/redux/features/stepss/tittleCV/tittleCVSlice';

const TittleCVService = () => {
  const tittleCVData = useSelector((state: any) => state.tittleCV);
  const dispatch = useDispatch();

  const handleSelectChange = (newValues: any) => {
    // Implement logic for updating selected values in Redux state
    dispatch(setTittleCVData({ selectedValues: newValues }));
  };

  const handleAddSelect = (newOption: any) => {
    // Implement logic for adding a new option in Redux state
    dispatch(addTittleCVEntry(newOption));
  };

  const handleSaveData = () => {
    // Implement logic for saving data (if needed)
    console.log('Saved data:', tittleCVData.selectedValues);
  };

  return {
    selectedValues: tittleCVData.selectedValues,
    contentOptionSelect: tittleCVData.contentOptionSelect,
    MAX_COUNT: tittleCVData.MAX_COUNT,
    handleSelectChange,
    handleAddSelect,
    handleSaveData,
  };
};

export default TittleCVService;