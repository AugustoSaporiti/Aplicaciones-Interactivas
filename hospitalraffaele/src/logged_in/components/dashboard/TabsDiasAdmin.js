import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles , fade} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 350,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    }
  }
}));

export default function VerticalTabsAdmin(props) {
  const { diasHabilitados } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div className={classes.root}>
        
        {diasHabilitados.length > 0 && <>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {diasHabilitados.includes("Lunes") && <Tab label="Lunes" {...a11yProps(0)} />}
            {diasHabilitados.includes("Martes") && <Tab label="Martes" {...a11yProps(1)} />}
            {diasHabilitados.includes("Miercoles") && <Tab label="Miercoles" {...a11yProps(2)} />}
            {diasHabilitados.includes("Jueves") && <Tab label="Jueves" {...a11yProps(3)} />}
            {diasHabilitados.includes("Viernes") && <Tab label="Viernes" {...a11yProps(4)} />}
            {diasHabilitados.includes("Sabado") && <Tab label="Sabado" {...a11yProps(5)} />}
            {diasHabilitados.includes("Domingo") && <Tab label="Domingo" {...a11yProps(6)} />}
          </Tabs>
          <TabPanel value={value} index={0}>
            <TextField
              id="desde"
              label="Desde"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="hasta"
              label="Hasta"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="frecuencia"
              label="Frecuencia"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TextField
              id="desde"
              label="Desde"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="hasta"
              label="Hasta"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="frecuencia"
              label="Frecuencia"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TextField
              id="desde"
              label="Desde"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="hasta"
              label="Hasta"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="frecuencia"
              label="Frecuencia"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <TextField
              id="desde"
              label="Desde"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="hasta"
              label="Hasta"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="frecuencia"
              label="Frecuencia"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <TextField
              id="desde"
              label="Desde"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="hasta"
              label="Hasta"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="frecuencia"
              label="Frecuencia"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <TextField
              id="desde"
              label="Desde"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="hasta"
              label="Hasta"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="frecuencia"
              label="Frecuencia"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <TextField
              id="desde"
              label="Desde"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="hasta"
              label="Hasta"
              variant="outlined"
              color="secondary"
            />
            <TextField
              id="frecuencia"
              label="Frecuencia"
              variant="outlined"
              color="secondary"
            />
          </TabPanel></>}
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Guardar cambios admin
      </Button>
    </Fragment >
  );
}