import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const COMPETITORS_TYPE = [
    {
        id: 1,
        label: 'WellCare',
    },
    {
        id: 2,
        label: 'United HealthCare',
    },
    {
        id: 3,
        label: 'Humana',
    },
    {
        id: 4,
        label: 'HealthSpring of Florida',
    },
    {
        id: 5,
        label: 'Florida Blue',
    }
]


const PRODUCT_TYPE = [
    {
        id: 1,
        label: 'MAPD',
    },
    {
        id: 2,
        label: 'MA',
    },
    {
        id: 3,
        label: 'SNP',
    },
    {
        id: 4,
        label: 'PDP',
    },
    {
        id: 5,
        label: 'Product 4',
    }
]

const PLAN_TYPE = [
    {
        id: 1,
        label: 'PPO',
    },
    {
        id: 2,
        label: 'HMO',
    },
    {
        id: 3,
        label: 'LPPO',
    },
    {
        id: 4,
        label: 'PDP',
    },
    {
        id: 5,
        label: 'Plan 4',
    }
]

const REGION_TYPE = [
    {
        id: 1,
        label: 'North West',
    },
    {
        id: 2,
        label: 'North East',
    },
    {
        id: 3,
        label: 'Central',
    },
    {
        id: 4,
        label: 'South West',
    },
    {
        id: 4,
        label: 'South East',
    }
]

const GEOGRAPHY_TYPE = [
    {
        id: 1,
        label: 'Geography',
    },
    {
        id: 2,
        label: 'Geography 1',
    },
    {
        id: 3,
        label: 'Geography 2',
    },
    {
        id: 4,
        label: 'Geography 3',
    },
    {
        id: 5,
        label: 'Geography 4',
    }
]

const SELECT_PRESET = [
    {
        id: 1,
        label: 'Select Preset',
    },
    {
        id: 2,
        label: 'Preset 1',
    },
    {
        id: 3,
        label: 'Preset 2',
    },
    {
        id: 4,
        label: 'Preset 3',
    },
    {
        id: 5,
        label: 'Preset 4',
    }
]

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

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

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: '#414141',
        color: '#ffffff',
        paddingTop: theme.spacing.unit * 3,

    },
    textField: {
        width: 120,
    },
    formCotainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 40,
        justifyContent: 'flex-end',
        marginTop: theme.spacing.unit * 1,
        marginBottom: theme.spacing.unit * 1.5,
    },
    fieldResize: {
        fontSize: 12,
        color: theme.palette.common.white,
    },
    button: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'right'
    },
    container: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    dividerColor: {
        backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing.unit * 1.2
    },
    selectMarginRight: {
        marginLeft: theme.spacing.unit * 3
    },
    divider: {
        borderRight: '1px solid #cccccc',
        paddingRight: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
    },
    select: {
        width: 150,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: '5px 12px 5px 12px',
    },
    selectLabel: {
        zIndex: 1,
        padding: '8px',
        transform: 'translate(0, 4px) scale(1)'
    }
});
class FilterSettings extends React.Component {

    state = {
        competitors: 1,
        region: 1,
        productType: 1,
        geography: 1,
        planType: 1,
        presetType: 1,
    }
    render() {
        const {
            classes, globalFilters, selectedGlobalFilter, globalActionFilter } = this.props;
        const {
            org,
            region,
            planType,
            product
        } = globalFilters;
        return (
            <div className={classes.root}>
                <Divider className={classes.dividerColor} />
                <div className={classes.container}>
                    <div className={classes.divider}>
                        <div>
                            <form className={classes.formCotainer} noValidate>
                                <TextField
                                    id="fromDate"
                                    type="date"
                                    className={classes.textField}
                                    InputProps={{
                                        classes: {
                                            input: classes.fieldResize,
                                        },
                                    }}
                                />
                                <TextField
                                    id="toDate"
                                    type="date"
                                    className={classes.textField}
                                    InputProps={{
                                        classes: {
                                            input: classes.fieldResize,
                                        },
                                    }}
                                />
                            </form>
                        </div>
                        <FormControl>
                            {selectedGlobalFilter.org.length === 0 ? (
                                <InputLabel className={classes.selectLabel} htmlFor="org-checkbox">Organisation</InputLabel>
                            ) : null}

                            <Select className={classes.select}
                                style={{
                                    marginTop: 0,

                                }}
                                multiple
                                input={<Input id="org-checkbox" />}
                                value={selectedGlobalFilter.org}
                                onChange={(e) => {
                                    globalActionFilter('org', e.target.value)
                                }}
                                renderValue={selected => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {org && org.map(item => (
                                    <MenuItem key={item} value={item}>
                                        <Checkbox checked={selectedGlobalFilter.org.indexOf(item) > -1} />
                                        <ListItemText primary={item} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className={classes.selectMarginRight}>
                            {selectedGlobalFilter.region.length === 0 ? (
                                <InputLabel className={classes.selectLabel} htmlFor="region-checkbox">Region</InputLabel>
                            ) : null}

                            <Select className={classes.select}
                                style={{
                                    marginTop: 0,
                                }}
                                multiple
                                input={<Input id="region-checkbox" />}
                                value={selectedGlobalFilter.region}
                                onChange={(e) => {
                                    globalActionFilter('region', e.target.value)
                                }}
                                renderValue={selected => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {region && region.map(item => (
                                    <MenuItem key={item} value={item}>
                                        <Checkbox checked={selectedGlobalFilter.region.indexOf(item) > -1} />
                                        <ListItemText primary={item} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className={classes.selectMarginRight}>
                            {selectedGlobalFilter.product.length === 0 ? (
                                <InputLabel className={classes.selectLabel} htmlFor="product-checkbox">Product</InputLabel>
                            ) : null}

                            <Select className={classes.select}
                                style={{
                                    marginTop: 0,
                                }}
                                multiple
                                input={<Input id="product-checkbox" />}
                                value={selectedGlobalFilter.product}
                                onChange={(e) => {
                                    globalActionFilter('product', e.target.value)
                                }}
                                renderValue={selected => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {product && product.map(item => (
                                    <MenuItem key={item} value={item}>
                                        <Checkbox checked={selectedGlobalFilter.product.indexOf(item) > -1} />
                                        <ListItemText primary={item} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                       
                        <FormControl className={classes.selectMarginRight}>
                            {selectedGlobalFilter.planType.length === 0 ? (
                                <InputLabel className={classes.selectLabel} htmlFor="planType-checkbox">Plan Type</InputLabel>
                            ) : null}

                            <Select className={classes.select}
                                style={{
                                    marginTop: 0,
                                }}
                                multiple
                                input={<Input id="planType-checkbox" />}
                                value={selectedGlobalFilter.planType}
                                onChange={(e) => {
                                    globalActionFilter('planType', e.target.value)
                                }}
                                renderValue={selected => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {planType && planType.map(item => (
                                    <MenuItem key={item} value={item}>
                                        <Checkbox checked={selectedGlobalFilter.planType.indexOf(item) > -1} />
                                        <ListItemText primary={item} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Select
                            className={classes.selectMarginRight}
                            input={<BootstrapInput />}
                            value={this.state.geography}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {GEOGRAPHY_TYPE.map(item => <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>)}
                        </Select>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" >
                                Filter
                        </Button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>

                        <FormControlLabel
                            classes={{
                                color: '#ffffff'
                            }}
                            labelPlacement="start"
                            control={
                                <Switch color="primary" />
                            }
                            label={<Typography style={{ color: 'white' }}>Preset Filters</Typography>}
                        />
                        <br />

                        <Select
                            input={<BootstrapInput />}
                            value={this.state.presetType}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {SELECT_PRESET.map(item => <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>)}
                        </Select>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" >
                                <EditIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(FilterSettings);