import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function RoleInfo(props) {
  const {
    classes,
    openAddRoleDialog
  } = props;
  
  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Roles" />
      <Button
        variant="contained"
        color="secondary"
        // onClick={openAddRoleDialog}
        disableElevation
      >
        Crear nuevo
      </Button>
    </Toolbar>
  );
}

RoleInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  // openAddRoleDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(RoleInfo);
