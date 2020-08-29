import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  FormHelperText,
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

function RegisterDialog(props) {
  const { setStatus, theme, onClose, openTermsDialog, openLoginDialog, status, classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [hasTermsOfServiceError, setHasTermsOfServiceError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerTermsCheckbox = useRef();
  const registerPassword = useRef();
  const mail = useRef();
  const dni = useRef();
  const registerPasswordRepeat = useRef();
  const userControler = require("../../../controllers/api/api.users");


  function ActionLink() {
    alert("hola");
   }
   
  const register = useCallback(() => {
    const usuario ={
      email: mail.current.value,
      password:  registerPassword.current.value,
      dni: dni.current.value,
      role: 3
    };

    if (!registerTermsCheckbox.current.checked) {
      setHasTermsOfServiceError(true);
      return;
    }
    if (
      registerPassword.current.value !== registerPasswordRepeat.current.value
    ) {
      setStatus("passwordsDontMatch");
      return;
    }

    userControler.createUser(usuario);
    onClose(true);
    setStatus(null);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [
    setIsLoading,
    setStatus,
    setHasTermsOfServiceError,
    registerPassword,
    registerPasswordRepeat,
    registerTermsCheckbox,
  ]);

  return (
    <FormDialog
      loading={isLoading}
      onClose={onClose}
      open
      headline="Registrarse"
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
            error={status === "invalidEmail"}
            label="Mail"
            autoFocus
            autoComplete="off"
            type="email"
            inputRef={mail}
            onChange={() => {
              if (status === "invalidEmail") {
                setStatus(null);
              }
            }}
            FormHelperTextProps={{ error: true }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={dni}
            required
            fullWidth
            label="DNI"
            inputRef={dni}
            onChange={(e) => {   
              console.log(e.target.value);
              if (isNaN(e.target.value)) {
                e.target.value = "";
              }

             else if (e.target.value.length > 5) {
                e.target.value = e.target.value.substring(0,5);
              }
            }}
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
                return "Crea una contrseña de al menos un largo de 6 caracteres";
              }
              if (status === "passwordsDontMatch") {
                return "Tus contraseñas no concuerdan";
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
                return "Crea una contrseña de al menos un largo de 6 caracteres";
              }
              if (status === "passwordsDontMatch") {
                return "Tus contraseñas no concuerdan";
              }
            })()}
            FormHelperTextProps={{ error: true }}
            isVisible={isPasswordVisible}
            onVisibilityChange={setIsPasswordVisible}
          />
          <FormControlLabel
            style={{ marginRight: 0 }}
            control={
              <Checkbox
                color="primary"
                inputRef={registerTermsCheckbox}
                onChange={() => {
                  setHasTermsOfServiceError(false);
                }}
              />
            }
            label={
              <Typography variant="body1">
                Estoy de acuerdo con
                <span
                  className={classes.link}
                  onClick={isLoading ? null : openTermsDialog}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(event) => {
                    // For screenreaders listen to space and enter events
                    if (
                      (!isLoading && event.keyCode === 13) ||
                      event.keyCode === 32
                    ) {
                      openTermsDialog();
                    }
                  }}
                >
                  {" "}
                  terminos y condiciones
                </span>
              </Typography>
            }
          />
          {hasTermsOfServiceError && (
            <FormHelperText
              error
              style={{
                display: "block",
                marginTop: theme.spacing(-1),
              }}
            >
              Para poder crear una cuenta, tiene que aceptar
              los terminos y condiciones
            </FormHelperText>
          )}
          {status === "accountCreated" ? (
            <HighlightedInformation>
              La cuenta ha sido creada, porfavor ingrese desde
              el mail que se le envio.
            </HighlightedInformation>
          ) : (
            <HighlightedInformation>
              No se puede registrar aun.
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
          Registrar
          {isLoading && <ButtonCircularProgress />}
        </Button>
        <Typography
          align="center"
          className={classNames(
            classes.link,
            isLoading ? classes.disabledText : null
          )}
          color="primary"
          onClick={isLoading ? null : openLoginDialog}
          tabIndex={0}
          role="button"
          onKeyDown={(event) => {
              // For screenreaders listen to space and enter events
              if (
                (!isLoading && event.keyCode === 13) ||
                event.keyCode === 32
              ) {
                openLoginDialog();
              }
            }
          }
        >
          Ya estás registrado? Ingresa aquí. 
        </Typography>
      </Fragment>
      }
    />
  );
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  //openLoginDialog: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles, { withTheme: true })(RegisterDialog);
