import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  FormHelperText,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";
import {createUser} from '../../../controllers/api/api.users'

const styles = (theme) => ({
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
});

const roles = [
  {
    label: 'Admin',
    value: 0
  },
  {
    label: 'Medico',
    value: 1
  },
  {
    label: 'Secretario',
    value: 2
  },
  {
    label: 'Paciente',
    value: 3
  }
];

function AddUserDialog(props) {
  const { setStatus, theme, onClose, status, classes, open } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerPassword = useRef();
  const registerPasswordRepeat = useRef();

  const register = useCallback(() => {
    if (
      registerPassword.current.value !== registerPasswordRepeat.current.value
    ) {
      setStatus("passwordsDontMatch");
      return;
    }
    setStatus(null);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [
    setIsLoading,
    registerPassword,
    registerPasswordRepeat,
  ]);

  return (
    <FormDialog
      loading={isLoading}
      onClose={onClose}
      open={open}
      headline="Nuevo usuario"
      onFormSubmit={(e) => {
        e.preventDefault();
        register();
      }}
      hideBackdrop
      hasCloseIcon
      content={
        <Fragment>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nombre"
            autoFocus
            autoComplete="off"
            type="text"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Apellido"
            autoFocus
            autoComplete="off"
            type="text"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={status === "invalidEmail"}
            label="Mail"
            autoComplete="off"
            type="email"
            onChange={() => {
              if (status === "invalidEmail") {
                setStatus(null);
              }
            }}
            FormHelperTextProps={{ error: true }}
          />
          <TextField
            fullWidth
            select
            required
            variant="outlined"
            label="Rol"
          // onChange={handleChange}
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="DNI"
            autoFocus
            autoComplete="off"
            type="text"
          />
          <VisibilityPasswordTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={
              status === "passwordTooShort" || status === "passwordsDontMatch"
            }
            label="Contraseña"
            inputRef={registerPassword}
            autoComplete="off"
            onChange={() => {
              if (
                status === "passwordTooShort" ||
                status === "passwordsDontMatch"
              ) {
                setStatus(null);
              }
            }}
            helperText={(() => {
              if (status === "passwordTooShort") {
                return "La contraseña debe tener al menos 6 caracteres.";
              }
              if (status === "passwordsDontMatch") {
                return "Las contraseñas son distintas.";
              }
              return null;
            })()}
            FormHelperTextProps={{ error: true }}
            isVisible={isPasswordVisible}
            onVisibilityChange={setIsPasswordVisible}
          />
          <VisibilityPasswordTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={
              status === "passwordTooShort" || status === "passwordsDontMatch"
            }
            label="Repetir contraseña"
            inputRef={registerPasswordRepeat}
            autoComplete="off"
            onChange={() => {
              if (
                status === "passwordTooShort" ||
                status === "passwordsDontMatch"
              ) {
                setStatus(null);
              }
            }}
            helperText={(() => {
              if (status === "passwordTooShort") {
                return "La contraseña debe tener al menos 6 caracteres.";
              }
              if (status === "passwordsDontMatch") {
                return "Las contraseñas son distintas.";
              }
            })()}
            FormHelperTextProps={{ error: true }}
            isVisible={isPasswordVisible}
            onVisibilityChange={setIsPasswordVisible}
          />
          {status === "accountCreated" ? (
            <HighlightedInformation>
              La cuenta ha sido creada.
            </HighlightedInformation>
          ) : (
              <HighlightedInformation>
                Todavia no se puede registrar.
              </HighlightedInformation>
            )}
        </Fragment>
      }
      actions={
        <Fragment>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="secondary"
            disabled={isLoading}
          >
            Crear
          {isLoading && <ButtonCircularProgress />}
          </Button>
        </Fragment>
      }
    />
  );
}

AddUserDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AddUserDialog);
