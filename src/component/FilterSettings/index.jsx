import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const PRODUCT_TYPE = [
    {
        id: 1,
        label: 'Product Type',
    },
    {
        id: 2,
        label: 'Product 1',
    },
    {
        id: 3,
        label: 'Product 2',
    },
    {
        id: 4,
        label: 'Product 3',
    },
    {
        id: 5,
        label: 'Product 4',
    }
]

const PLAN_TYPE = [
    {
        id: 1,
        label: 'Plan Type',
    },
    {
        id: 2,
        label: 'Plan 1',
    },
    {
        id: 3,
        label: 'Plan 2',
    },
    {
        id: 4,
        label: 'Plan 3',
    },
    {
        id: 5,
        label: 'Plan 4',
    }
]

const GRAPH_TYPE = [
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
        paddingLeft:  theme.spacing.unit * 3,
        paddingRight:  theme.spacing.unit * 3,    
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
        paddingRight:  theme.spacing.unit * 2,
        marginRight:  theme.spacing.unit * 2,  
    }
});
class FilterSettings extends React.Component {

    state={
        productType: 1,
        graphType: 1,
        planType: 1,
        presetType: 1,
    }
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Divider className={classes.dividerColor}/>
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
                        <Select
                            input={<BootstrapInput/>}
                            value={this.state.productType}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {PRODUCT_TYPE.map(item => <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>)}
                        </Select>

                        <Select
                        className={classes.selectMarginRight}
                            input={<BootstrapInput/>}
                            value={this.state.planType}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {PLAN_TYPE.map(item => <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>)}
                        </Select>

                        <Select
                        className={classes.selectMarginRight}
                            input={<BootstrapInput/>}
                            value={this.state.graphType}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {GRAPH_TYPE.map(item => <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>)}
                        </Select>
                        <div className={classes.button}>
                        <Button variant="contained" color="primary" >
                            Filter
                        </Button>
                        </div>
                    </div>
                    <div style={{textAlign: 'right'}}>

                        <FormControlLabel
                            classes={{
        
                                    color: '#ffffff'
                              }}
                            labelPlacement="start"
                            control={
                            <Switch color="primary" />
                            }
                            label={<Typography style={{color: 'white'}}>Preset Filters</Typography>}
                        />
                        <br />

                        <Select
                            input={<BootstrapInput/>}
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