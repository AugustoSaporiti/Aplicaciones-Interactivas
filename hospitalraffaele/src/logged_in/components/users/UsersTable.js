import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import React, { forwardRef, useState, useEffect } from "react";
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
import { Paper, withStyles } from "@material-ui/core";
import { listUsers } from '../../../controllers/api/api.users'
import { updateUser, deleteUser } from '../../../controllers/api/api.users'

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

function UsersTable(props) {
  const { classes } = props;

  const [userList, setUserList] = useState([])
  useEffect(() => {
    obtenerUsuarios()
  }, [])

  const obtenerUsuarios = async () => {
    await listUsers()
      .then(v => setUserList(v.response))
  }

  const [state, setState] = React.useState({
    columns: [
      {
        title: 'Nombre',
        field: 'name',
        validate: ({ name }) => name?.trim().length > 2
      },
      {
        title: 'Apellido',
        field: 'surname',
        validate: ({ surname }) => surname?.trim().length > 2
      },
      {
        title: 'ID',
        field: 'id',
        validate: ({ dni }) =>
          !isNaN(dni) && dni?.trim().length > 5
      },
      {
        title: 'Rol',
        field: 'role',
        validate: ({ role }) => role?.trim().length > 0
      },
      {
        title: 'Mail',
        field: 'mail'
      },
    ],
    data:
      userList.map(v => {
        return {
          name: v.name,
          surname: v.surname,
          id: v.id,
          role: v.role_id,
          mail: v.email,
        }
      })
  });

  useEffect(() => setState(
    {
      columns: [
        {
          title: 'Nombre',
          field: 'name',
          validate: ({ name }) => name?.trim().length > 2
        },
        {
          title: 'Apellido',
          field: 'surname',
          validate: ({ surname }) => surname?.trim().length > 2
        },
        {
          title: 'ID',
          field: 'id',
          editable: 'never',
        },
        {
          title: 'Rol',
          field: 'role',
        },
        {
          title: 'Mail',
          field: 'mail'
        },
      ],
      data:
        userList.map(v => {
          return {
            name: v.nombre,
            surname: v.apellido,
            id: v.id,
            role: v.role_id,
            mail: v.email,
          }
        })
    }
  ), [userList])

  if (userList.length > 0) {
    return (
      <Paper>
        <MaterialTable
          icons={tableIcons}
          title="Usuarios"
          columns={state.columns}
          data={state.data}
          options={{ actionsColumnIndex: -1 }}
          localization={{
            body: {
              emptyDataSourceMessage: 'No hay datos por mostrar',
              deleteTooltip: 'Eliminar',
              editTooltip: 'Editar',
              editRow: {
                deleteText: '¿Segura(o) que quiere eliminar este usuario?',
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
          editable={{
            isEditHidden: rowData => rowData.role === 4,
            onRowUpdate: (newData, oldData) =>
              updateUser(
                {
                  role_id: newData.role,
                  email: newData.mail,
                  nombre: newData.name,
                  apellido: newData.surname,
                  user_id: newData.id,
                }
              ).then(() => {
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                };
              }),
            onRowDelete: (oldData) =>
              deleteUser(oldData.id)
                .then(() => {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }),
          }}
        />
      </Paper>
    );
  }
  return (
    <div className={classes.contentWrapper}>
      <HighlightedInformation>
        No hay usuarios creados.
      </HighlightedInformation>
    </div>
  );
}

UsersTable.propTypes = {
  classes: PropTypes.object.isRequired,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(UsersTable);
