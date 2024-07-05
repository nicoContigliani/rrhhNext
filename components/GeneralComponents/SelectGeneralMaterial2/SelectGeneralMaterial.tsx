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

const SelectGeneralMaterial = (props: any) => {
    console.log("🚀 ~ SelectGeneralMaterial ~ props:", props)
    const {
        isMultiple = true,
        todoSelect,
        size,
        isfullWidth,
        defaultValueSelect = [] || undefined,
        setSelectedValues,
        label,
        selectedValues,
        name
    } = props;

    const theme = useTheme();
    const [selectDataArray, setSelectDataArray] = useState<string[] | any | undefined>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [filteredDatas, setFilteredData] = useState<string[] | any | undefined>();

    const handleChange = (event: SelectChangeEvent<typeof selectDataArray>) => {
        try {
            const {
                target: { value },
            } = event;
            const newValue = typeof value === 'string' ? value.split(',') : value;

            if (isMultiple && newValue.length === 0) {
                return;
            }

            setSelectDataArray(newValue);

            if (setSelectedValues) {
                setSelectedValues({
                    ...selectedValues,
                    [name]: newValue,
                });
            }
        } catch (error) {
            console.log("🚀 ~ handleChange ~ error:", error)
        }
    };

    useEffect(() => {
        const functionAsync = async () => {
            await setSelectDataArray(defaultValueSelect);
        }
        functionAsync()
    }, [defaultValueSelect]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const filteredData = todoSelect?.filter((name: any) => name?.toLowerCase()?.includes(searchTerm.toLowerCase()));
        setFilteredData(filteredData)
    }, [todoSelect, searchTerm]);

    return (
        <div>
            <FormControl sx={{ m: 1, width: '92%', color: 'black' }} size="small" >
                <Select
                    label={label}
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
                            {Array.isArray(selected) && selected.map((value: any) => (
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
                    {filteredDatas?.map((name: any | undefined) => (
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
