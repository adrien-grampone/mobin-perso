import { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Input, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: '1em',
        minWidth: 200,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: "1em",
    },
    inputLabel: {
        fontSize: '15px'
    },
    grid: {
        textAlign: 'center'
    }
}));

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

const RegionFilters = ({ departments = [], onChangeMainDepartementSelected }) => {
    const [mainDepartementSelected, setMainDepartmentSelected] = useState([]);
    const classes = useStyles();
    const getStyles = (departement, mainDepartementSelected) => {
        return {
            fontWeight:
                mainDepartementSelected.indexOf(departement) === -1
                    ? "normal"
                    : "bold",
        };
    }

    const handleChangeDepartment = (event) => {
        setMainDepartmentSelected(event.target.value);
    };

    return (
        <Grid container>
            <Grid item xs={12} md={4} className={classes.grid}>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.inputLabel}>Département</InputLabel>
                    <Select
                        multiple
                        value={mainDepartementSelected}
                        onChange={handleChangeDepartment}
                        input={<Input />}
                        MenuProps={MenuProps}
                    >
                        {departments.map((dep, index) => (
                            <MenuItem key={index} value={dep.nom_departement} style={getStyles(dep.nom_departement, mainDepartementSelected)}>
                                {dep.nom_departement}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>

            </Grid>
        </Grid>
    )
}

export default RegionFilters