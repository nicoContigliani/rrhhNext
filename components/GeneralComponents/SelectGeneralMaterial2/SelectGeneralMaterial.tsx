import React, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UserOutlined } from '@ant-design/icons';
import { Box, InputAdornment, TextField } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

function getStyles(name: string, selectDataArray: readonly string[], theme: Theme) {
    return {
        fontWeight:
            selectDataArray?.indexOf(name) === -1
                ? theme.typography?.fontWeightRegular
                : theme.typography?.fontWeightMedium,
    };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 350,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const SelectGeneralMaterial = (props: any) => {
    const {
        isMultiple = true, // Set default to true for multiple selection
        todoSelect,
        size,
        isfullWidth,
        defaultValueSelect = [], // Ensure defaultValueSelect is an array
        setSelectedValues,
    } = props;

    const theme = useTheme();
    const [selectDataArray, setSelectDataArray] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>('');





    const handleChange = (event: SelectChangeEvent<typeof selectDataArray>) => {
        const {
            target: { value },
        } = event;
        const newValue = typeof value === 'string' ? value.split(',') : value;

        // Prevent removing all selections when in multiple mode
        if (isMultiple && newValue.length === 0) {
            return;
        }

        setSelectDataArray(newValue);
        if (setSelectedValues) {
            setSelectedValues(newValue);
        }
    };

    useEffect(() => {
        const funtionAsync = async () => {
            await setSelectDataArray(defaultValueSelect);
        }
        funtionAsync()
    }, [defaultValueSelect]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchTerm(event.target.value);
    };

    // const filteredData = names?.filter((name: any) => name?.toLowerCase()?.includes(searchTerm.toLowerCase()));
    const filteredData = todoSelect?.filter((name: any) => name?.toLowerCase()?.includes(searchTerm.toLowerCase()));


    return (
        <div>



            <FormControl sx={{ m: 1, width: '100%' }} size="small">
                <Select
                    label="Vacancy"
                    multiple={isMultiple || false}
                    size="small"
                    fullWidth
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    value={selectDataArray}
                    onChange={handleChange}
                    renderValue={(selected: any[] | any) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9 }}>
                            {selected?.map((value: any) => (
                                <div key={value}>
                                    <UserOutlined /> - {value}
                                </div>
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    <MenuItem disableRipple>
                        <TextField
                            sx={{ m: 1, width: '100%' }}
                            size="small"
                            autoFocus
                            placeholder="Search..."
                            fullWidth
                            onChange={handleSearchChange}
                            defaultValue={searchTerm}
                            onClick={(event) => event.stopPropagation()}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </MenuItem>
                    {filteredData?.map((name: any | undefined) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, selectDataArray, theme)}
                        >
                            <div style={{ color: "black" }}>
                                <UserOutlined /> - {name}
                            </div>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectGeneralMaterial;
