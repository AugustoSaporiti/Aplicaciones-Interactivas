import React, { Fragment } from "react";
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Divider from '@material-ui/core/Divider';
import { confirmAlert } from 'react-confirm-alert';
import validadorUsuario from "../../validadorUsuario.js";
import global from "../../../logged_out/components/Global.js";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  withStyles,
  Button
} from "@material-ui/core";

const styles = {
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '50ch',
  },
}));

function CambiarContraseña(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [valuesRepeat, setValuesRepeat] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeRepeat = (prop) => (event) => {
    setValuesRepeat({ ...valuesRepeat, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPasswordRepeat = () => {
    setValuesRepeat({ ...valuesRepeat, showPassword: !valuesRepeat.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const history = useHistory();

  const submit = () => {
    confirmAlert({
      title: 'Confirmar contraseña',
      message: 'Estas seguro de cambiar la contraseña.',
      buttons: [
        {
          label: 'Si',
          onClick: () => history.push(validadorUsuario.esVisibleSecretario() ? "/c/dashboard" : "/c/dashboardPaciente")
        },
        {
          label: 'No',
          onClick: () => history.push("/c/navigation/CambiarContraseña")
        }
      ]
    });
  };

  return (
    <div style={{ marginTop: '10%', marginLeft: '35%' }}>
      <div style={{ width: '50%' }} >
        <div style={{ textAlign: 'center' }}>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </div>
        <Divider light />
        <div style={{ textAlign: 'center' }}>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Repetir contraseña</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={valuesRepeat.showPassword ? 'text' : 'password'}
              value={valuesRepeat.password}
              onChange={handleChangeRepeat('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordRepeat}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {valuesRepeat.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </div>

        <Divider light />
        <Fragment>
          <Button style={{ float: 'right' }} color="secondary" variant="contained" onClick={submit}>
            Confirmar
        </Button>
          <Button
            style={{ float: 'right' }}
            variant="contained"
            onClick={() => history.push(validadorUsuario.esVisibleSecretario() ? "/c/dashboard" : "/c/dashboardPaciente")}>
            Atras
        </Button>
        </Fragment>
      </div>
    </div>
  );
}


export default withStyles(styles)(CambiarContraseña);
