import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import SettingsArea from "./SettingsArea";

function QuienesSomos(props) {
 
  return (
    <Fragment>
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Bienvenido!
        </Typography>
      </Box>
      <SettingsArea pushMessageToSnackbar={pushMessageToSnackbar}targets={targets} setTargets={setTargets} />
    </Fragment>
  );
}

// Dashboard.propTypes = {
//   CardChart: PropTypes.elementType,
//   statistics: PropTypes.object.isRequired,
//   toggleAccountActivation: PropTypes.func,
//   pushMessageToSnackbar: PropTypes.func,
//   targets: PropTypes.arrayOf(PropTypes.object).isRequired,
//   setTargets: PropTypes.func.isRequired,
//   isAccountActivated: PropTypes.bool.isRequired,
//   selectDashboard: PropTypes.func.isRequired,
// };

export default QuienesSomos;
