import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
}));

export default function VerticalTabs(props) {
  const { diasHabilitados } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState(7);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div className={classes.root}>
        {diasHabilitados.length >= 0 && <>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {diasHabilitados.includes("Lunes") && <Tab label="Lunes" value={0} {...a11yProps(0)} />}
            {diasHabilitados.includes("Martes") && <Tab label="Martes" value={1} {...a11yProps(1)} />}
            {diasHabilitados.includes("Miercoles") && <Tab label="Miercoles" value={2} {...a11yProps(2)} />}
            {diasHabilitados.includes("Jueves") && <Tab label="Jueves" value={3} {...a11yProps(3)} />}
            {diasHabilitados.includes("Viernes") && <Tab label="Viernes" value={4} {...a11yProps(4)} />}
            {diasHabilitados.includes("Sabado") && <Tab label="Sabado" value={5} {...a11yProps(5)} />}
            {diasHabilitados.includes("Domingo") && <Tab label="Domingo" value={6} {...a11yProps(6)} />}
            <Tab label="Dias deshabilitados" value={7} {...a11yProps(7)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Desde"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Hasta"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <TextField
              id="frecuencia"
              label="Frecuencia turnos(min)"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Desde"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Hasta"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <TextField
              id="frecuencia"
              label="Frecuencia turnos(min)"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Desde"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Hasta"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <TextField
              id="frecuencia"
              label="Frecuencia turnos(min)"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Desde"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Hasta"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <TextField
              id="frecuencia"
              label="Frecuencia turnos(min)"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Desde"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Hasta"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <TextField
              id="frecuencia"
              label="Frecuencia turnos(min)"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Desde"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Hasta"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <TextField
              id="frecuencia"
              label="Frecuencia turnos(min)"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Desde"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label="Hasta"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
            <TextField
              id="frecuencia"
              label="Frecuencia turnos(min)"
              variant="outlined"
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Desde"
                type="date"
                defaultValue="2020-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Hasta"
                type="date"
                defaultValue="2020-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </TabPanel></>}
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Guardar cambios
      </Button>
    </Fragment >
  );
}