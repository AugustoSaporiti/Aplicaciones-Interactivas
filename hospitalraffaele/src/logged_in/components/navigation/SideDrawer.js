import React from "react";
import PropTypes from "prop-types";
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {
  Drawer,
  IconButton,
  Toolbar,
  Divider2,
  Typography,
  Box,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const drawerWidth = 240;

const styles = {
  toolbar: {
    minWidth: drawerWidth
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SideDrawer(props) {
  const { classes, onClose, open } = props;
  const classes2 = useStyles();
  return (
    <Drawer anchor="right" open={open} variant="temporary" onClose={onClose}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Box
          pl={3}
          pr={3}
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Typography variant="h6">Datos personales</Typography>
          <IconButton
            onClick={onClose}
            color="primary"
            aria-label="Close Sidedrawer"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
      <List component="nav" className={classes2.root} aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Nombre" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Apellido" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Mail" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Obra social" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Nueva Contraseña" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary=" Repetir contraseña nueva" />
        </ListItem>
        <Divider light />
      </List>
      <IconButton>
        <EditIcon />
      </IconButton>
    </Drawer>
  );
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(SideDrawer);
