import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import MaterialTable from 'material-table';
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
import validadorUsuario from "../../validadorUsuario.js";
import { Paper, withStyles } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useHistory } from 'react-router-dom';
import global from "../../../logged_out/components/Global.js";

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

const styles = (theme) => ({
  tableWrapper: {
    overflowX: "auto",
  },
  alignRight: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
  },
  blackIcon: {
    color: theme.palette.common.black,
  },
  avatar: {
    width: 28,
    height: 28,
  },
  firstData: {
    paddingLeft: theme.spacing(3),
  },
  iconButton: {
    padding: theme.spacing(1),
  },
  dBlock: {
    display: "block",
  },
  dNone: {
    display: "none",
  },
});

function CustomTable(props) {
  const { targets } = props;
  
  

  const [state, setState] = React.useState({
    columns: [
      {
        title: 'Nombre',
        field: 'name'
      },
      {
        title: 'Apellido',
        field: 'surname'
      },
      {
        title: 'Telefono',
        field: 'telefono',
      },
      {
        title: 'DNI',
        field: 'dni'
      },
    ],
    data:
      targets.map(v => {
        return {
          name: v.nombre,
          surname: v.apellido,
          telefono: v.telefono,
          dni: v.dni,
        }
      })
  });
  const history = useHistory();

  return (
    <Paper>
      <MaterialTable
        icons={tableIcons}
        title="Pacientes"
        columns={state.columns}
        data={state.data}
        options={{ actionsColumnIndex: -1 }}
        localization={{
          body: {
            emptyDataSourceMessage: 'No hay datos por mostrar',
            addTooltip: 'Añadir',
            deleteTooltip: 'Eliminar',
            editTooltip: 'Editar',
            editRow: {
              deleteText: '¿Segura(o) que quiere eliminar este paciente?',
              cancelTooltip: 'Cancelar',
              saveTooltip: 'Guardar',
            },
          },
          header: {
            actions: 'Acciones',
          },
          toolbar: {
            searchPlaceholder: 'Buscar',
            searchTooltip: 'Buscar',
          },
          pagination: {
            firstAriaLabel: 'Primera página',
            firstTooltip: 'Primera página',
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsPerPage: 'Filas por página:',
            labelRowsSelect: 'filas',
            lastAriaLabel: 'Ultima página',
            lastTooltip: 'Ultima página',
            nextAriaLabel: 'Pagina siguiente',
            nextTooltip: 'Pagina siguiente',
            previousAriaLabel: 'Pagina anterior',
            previousTooltip: 'Pagina anterior',
          },
        }}
        actions={[
          {
            icon: AssignmentIcon,
            tooltip: 'Historia clinica',
            onClick: (event, rowData) => {
              history.push("/c/historia-clinica")
            }
          }
        ]}
        editable={validadorUsuario.esVisibleAdmin() && {
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
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </Paper>
  );
}

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(CustomTable);
