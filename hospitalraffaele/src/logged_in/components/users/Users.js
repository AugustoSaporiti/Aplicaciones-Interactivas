import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import UsersTable from "./UsersTable";
import UsersInfo from "./UsersInfo";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Users(props) {
  const {
    userList,
    classes,
    openAddUserDialog,
    selectUsers
  } = props;

  useEffect(selectUsers, [selectUsers]);

  return (
    <Paper>
      <List disablePadding>
        <UsersInfo openAddUserDialog={openAddUserDialog} />
        <Divider className={classes.divider} />
        <UsersTable userList={userList} />
      </List>
    </Paper>
  );
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectUsers: PropTypes.func.isRequired,
  openAddUserDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(Users);
