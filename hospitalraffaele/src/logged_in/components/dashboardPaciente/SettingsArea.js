import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Settings1 from "./Turnos";
import { Tab, Tabs, Box, Typography } from "@material-ui/core"
import MedicalHistory from "../dashboard/medicalhistory/HistorialClinico"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function SettingsArea(props) {

  const {
    targets,
    setTargets,
  } = props;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const { pushMessageToSnackbar } = props;

  return (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
       <Tab label="Sacar turno" />
       <Tab label="Historia clinica" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Settings1 pushMessageToSnackbar={pushMessageToSnackbar} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MedicalHistory/>
      </TabPanel>

    </Fragment>
  );
}

SettingsArea.propTypes = {
  pushMessageToSnackbar: PropTypes.func
};

export default SettingsArea;
