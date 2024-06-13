import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { UserOutlined } from '@ant-design/icons';
import SearchIcon from '@mui/icons-material/Search';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// const names = [
//     'Oliver Hansen',
//     'Van Henry',
//     'April Tucker',
//     'Ralph Hubbard',
//     'Omar Alexander',
//     'Carlos Abbott',
//     'Miriam Wagner',
//     'Bradley Wilkerson',
//     'Virginia Andrews',
//     'Kelly Snyder',
// ];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography?.fontWeightRegular
                : theme.typography?.fontWeightMedium,
    };
}




const SelectGeneralMaterial = (props: any) => {
    console.log("🚀 ~ SelectGeneralMaterial ~ props:", props)
    const {
        todoSelect,
        data,
        setData,
        isMultiple,
        keys,
        setSelectedValues
    } = props





    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [names, setNames] = React.useState<any | any[] | undefined>()
    const [tittle, setTittle] = React.useState<any | any[] | undefined>()
    const [datas, setDatas] = React.useState<any | any[] | undefined>()



    React.useLayoutEffect(() => {
        const funtionAsync = async () => {
            // const si = await todoSelect?.map((item: any) => item.label)
            const si = await todoSelect?.map((item: any) => `${item.value}-${item.label}`);


            await setNames(si)
            await setTittle(todoSelect[0].titleModal)
        }
        funtionAsync()
    }, [])


    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        let formattedTitle = tittle.includes(' ') ? tittle.split(' ').join('_') : tittle;
        console.log('****************', { [formattedTitle]: value }, '**********')

        setSelectedValues((prevValues: any) => ({
            ...prevValues,
            [`${formattedTitle}-${keys}`]: value
        }));

    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredNames = names?.filter((name: any) => name?.toLowerCase()?.includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <FormControl sx={{ m: 1, width: '100%' }}
                size="small"
            >
                <InputLabel id="demo-multiple-chip-label">{tittle}</InputLabel>
                <Select
                    // {...props}
                    multiple={isMultiple || false}

                    size="small"
                    fullWidth
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    // multiple
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    value={personName}
                    onChange={handleChange}
                    renderValue={(selected: any[] | any) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9 }}>
                            {selected?.map((value: any) => (
                                <div key={value}>
                                    <UserOutlined />   -    {value}
                                </div>

                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    <MenuItem sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.9 }}>
                        {/* <SearchIcon
                            color="disabled"
                        /> */}
                        <TextField
                            size="small"
                            autoFocus
                            placeholder="Search..."
                            fullWidth
                            onChange={handleSearchChange}
                            defaultValue={searchTerm}
                        />
                    </MenuItem>
                    {filteredNames?.map((name: any | undefined) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            <div style={{ color: "black" }}>
                                <UserOutlined /> - {name}
                            </div>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default SelectGeneralMaterial;


//DOCUMENTATION COMPONENTE
{/* <SelectGeneralMaterial
      size="small"
      fullWidth
      labelId="demo-multiple-chip-label"
      id="demo-multiple-chip"
      multiple
      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}


/> */}




