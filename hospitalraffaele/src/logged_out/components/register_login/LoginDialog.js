import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import {
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
import global from "../Global.js";
import { loginUser } from "../../../controllers/api/api.users";
import entities from "../../../controllers/entities";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

function LoginDialog(props) {
  const {
    setStatus,
    history,
    classes,
    onClose,
    openChangePasswordDialog,
    status,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const loginEmail = useRef();
  const loginPassword = useRef();

  const login = useCallback(() => {
    setIsLoading(true);
    setStatus(null);

    let loginData = {
      email: loginEmail.current.value,
      password: loginPassword.current.value
    };

    loginUser(loginData)
      .then(response => {
        if (response.success) {
          if(response.response.user.role_id === entities.idPaciente) {
            history.push("/c/dashboardPaciente");
          } else {
            history.push("/c/dashboard");
          }

        } else {
          
          setTimeout(() => {
            setStatus("invalidCredentials");
            setIsLoading(false);
          }, 1500);
        }
      });

  }, [setIsLoading, loginEmail, loginPassword, history, setStatus]);

  return (
    <Fragment>
      <FormDialog
        open
        onClose={onClose}
        loading={isLoading}
        onFormSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        hideBackdrop
        headline="Login"
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              error={status === "invalidCredentials"}
              required
              fullWidth
              label="Mail"
              inputRef={loginEmail}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={() => {
                if (status === "invalidCredentials") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidEmail" &&
                "Este mail no esta asociado a ninguna cuenta."
              }
              FormHelperTextProps={{ error: true }}
            />
            <VisibilityPasswordTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={status === "invalidCredentials"}
              label="Contraseña"
              inputRef={loginPassword}
              autoComplete="off"
              onChange={() => {
                if (status === "invalidCredentials") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidCredentials" ? (
                  <span>
                    Credenciales erróneas. Intente nuevamente, o haga click en
                    <b>&quot;Te olvidaste la contraseña?&quot;</b> para resetear.
                  </span>
                ) : (
                  ""
                )
              }
              FormHelperTextProps={{ error: true }}
              onVisibilityChange={setIsPasswordVisible}
              isVisible={isPasswordVisible}
            />
            <FormControlLabel
              className={classes.formControlLabel}
              control={<Checkbox color="primary" />}
              label={<Typography variant="body1">Recordarme</Typography>}
            />
            {status === "verificationEmailSend" ? (
              <HighlightedInformation>
                Te enviamos al mail las intruciones para restear la
                contraseña
              </HighlightedInformation>
            ) : (
              <HighlightedInformation>
                Paciente: <b>susana@test.com</b> || Pass: <b>paciente</b>
                <br />
                Medico: <b>sandro@test.com</b> || Pass:<b>doctor</b>
                <br />
                Secretario: <b>lauro@test.com</b> || Pass:<b>secretario</b>
                <br />
                Admin: <b>pepita@test.com</b> || Pass:<b>admin</b>
                <br />
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
              color="secondary"
              disabled={isLoading}
              size="large"
            >
              Login
              {isLoading && <ButtonCircularProgress />}
            </Button>
            <Typography
              align="center"
              className={classNames(
                classes.forgotPassword,
                isLoading ? classes.disabledText : null
              )}
              color="primary"
              onClick={isLoading ? null : openChangePasswordDialog}
              tabIndex={0}
              role="button"
              onKeyDown={(event) => {
                // For screenreaders listen to space and enter events
                if (
                  (!isLoading && event.keyCode === 13) ||
                  event.keyCode === 32
                ) {
                  openChangePasswordDialog();
                }
              }}
            >
              Te olvidaste la contraseña?
            </Typography>
          </Fragment>
        }
      />
    </Fragment>
  );
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

export default withRouter(withStyles(styles)(LoginDialog));
