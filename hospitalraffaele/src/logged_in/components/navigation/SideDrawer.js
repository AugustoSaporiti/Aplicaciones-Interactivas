import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {
  Drawer,
  IconButton,
  Toolbar,
  Box,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const drawerWidth = 350;

const styles = {
  toolbar: {
    minWidth: drawerWidth
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SideDrawer(props) {

  const {
    classes,
    onClose,
    open
  } = props;

  const [state, setState] = React.useState({
    columns: [
      {
        title: '',
        field: 'name',
        editable: 'never',
      },
      {
        title: 'Datos',
        field: 'datos'
      },
    ],
    data: [
      {
        name: 'Nombre',
        datos: 'Augusto',
      },
      {
        name: 'Apellido',
        datos: 'Saporiti',
      },
      {
        name: 'DNI',
        datos: '123123312',
      },
      {
        name: 'Mail',
        datos: 'test@test.com',
      },
      {
        name: 'Telefono',
        datos: '5491100000',
      },
    ],
  });
  const history = useHistory();


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
      <MaterialTable
        icons={tableIcons}
        columns={state.columns}
        title="Datos personales"
        data={state.data}
        localization={{
          body: {
            editTooltip: 'Editar',
            editRow: {
              cancelTooltip: 'Cancelar',
              saveTooltip: 'Guardar',
            },
          },
          header: {
            actions: 'Acciones',
          },
        }}
        options={{
          search: false,
          paging: false,
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
        }}
      />
      <Button
        variant="outlined"
        color="secondary"
        onClick={
          () => {
            history.push("/c/navigation/CambiarContraseña")
            onClose()
          }
        }
      >
        Cambiar contraseña
      </Button>
    </Drawer>
  );
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(SideDrawer);
