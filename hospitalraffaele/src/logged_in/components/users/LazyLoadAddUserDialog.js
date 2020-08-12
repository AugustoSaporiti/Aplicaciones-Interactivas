import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

function LazyLoadAddUserDialog(props) {
  const { open, onClose, onSuccess } = props;
  const [AddUserDialog, setAddUserDialog] = useState(null);
  const [hasFetchedAddUserDialog, setHasFetchedAddUserDialog] = useState(false);

  useEffect(() => {
    if (open && !hasFetchedAddUserDialog) {
      setHasFetchedAddUserDialog(true);
      import("./AddUserDialog").then(Component => {
        setAddUserDialog(() => Component.default);
      });
    }
  }, [open, hasFetchedAddUserDialog, setHasFetchedAddUserDialog, setAddUserDialog]);

  return (
    <Fragment>
      {AddUserDialog && (
        <AddUserDialog
          open={open}
          onClose={onClose}
          onSuccess={onSuccess}
        ></AddUserDialog>
      )}
    </Fragment>
  );

}

LazyLoadAddUserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default LazyLoadAddUserDialog;
