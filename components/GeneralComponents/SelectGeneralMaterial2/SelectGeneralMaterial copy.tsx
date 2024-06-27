

import React, { useEffect, useState } from 'react';
import { Autocomplete, Chip } from '@mui/material';
import TextField from '@mui/material/TextField';

interface SelectGeneralMaterialProps {
    todoSelect: any[]; // Replace 'any' with the actual type of your options
    defaultValueSelect?: string | number | any; // Specify the expected type for single value
    size?: 'small' | 'medium';
    isfullWidth?: boolean;
    labelId?: string;
    id?: string;
    setSelectedValues?: (value: any) => void; // Update if needed for single value
    isMultiple: boolean;
}

const SelectGeneralMaterial: React.FC<SelectGeneralMaterialProps> = ({
    isMultiple, // Set default to false for single selection
    todoSelect,
    size,
    isfullWidth,
    defaultValueSelect,
    setSelectedValues,
}) => {
    const [selectedValues, setSelectedValuesState] = useState<any | undefined>(
        defaultValueSelect
    );

    useEffect(() => {
        // Update state only if defaultValueSelect changes
        setSelectedValuesState(defaultValueSelect);
    }, [defaultValueSelect]);

    const handleSelectionChange = (event: any, value: any) => {
        setSelectedValuesState(value);
        if (setSelectedValues) {
            setSelectedValues(value);
        }
    };

    return (
        <div>

            <Autocomplete
                multiple={isMultiple} // Set to false for single selection
                sx={{ width: 300 }}
                size={size}
                fullWidth={isfullWidth}
                id="tags-standard"
                options={todoSelect}
                getOptionLabel={(option) => option.title} // Change 'title' to the appropriate property
                value={selectedValues} // Single value expected
                onChange={handleSelectionChange}

                
                renderInput={(params) => (

                    <TextField
                        {...params}
                        variant="outlined"
                        label="Select options"
                        placeholder="Select"
                    />
                )}
            />

        </div>
    );
};

export default SelectGeneralMaterial;