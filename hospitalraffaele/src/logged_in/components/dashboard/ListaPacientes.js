import React, { useState, useCallback, forwardRef } from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  IconButton,
  Avatar,
  Box,
  Paper,
  List,
  Toolbar,
  ListItemText,
  Button,
  Divider,
  TextField,
  // Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  withStyles,
  ListItem,
} from "@material-ui/core";
import PlayCirlceOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import stableSort from "../../../shared/functions/stableSort";
import getSorting from "../../../shared/functions/getSorting";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ConfirmationDialog from "../../../shared/components/ConfirmationDialog";
import MedicalHistory from "./medicalhistory/MedicalHistory";
import { Link as LinkR, useHistory } from 'react-router-dom';
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

const rows = [
  {
    id: "icon",
    numeric: true,
    label: "",
  },
  {
    id: "name",
    numeric: false,
    label: "Nombre",
  },
  {
    id: "lastName",
    numeric: false,
    label: "Apellido",
  },
  {
    id: "phoneNumber",
    numeric: false,
    label: "Teléfono",
  },
  {
    id: "email",
    numeric: false,
    label: "Mail",
  },
  {
    id: "actions",
    numeric: false,
    label: "Acciones",
  },
];

const rowsPerPage = 25;

function CustomTable(props) {
  const { pushMessageToSnackbar,
    classes,
    targets,
    setTargets
  } = props;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(null);
  const [page, setPage] = useState(0);
  const [isDeleteTargetDialogOpen, setIsDeleteTargetDialogOpen] = useState(
    false
  );
  const [deleteTargetDialogRow, setDeleteTargetDialogRow] = useState(null);
  const [isDeleteTargetLoading, setIsDeleteTargetLoading] = useState(false);

  const handleRequestSort = useCallback(
    (__, property) => {
      const _orderBy = property;
      let _order = "desc";
      if (orderBy === property && order === "desc") {
        _order = "asc";
      }
      setOrder(_order);
      setOrderBy(_orderBy);
    },
    [setOrder, setOrderBy, order, orderBy]
  );

  const deleteTarget = useCallback(() => {
    setIsDeleteTargetLoading(true);
    setTimeout(() => {
      setIsDeleteTargetDialogOpen(false);
      setIsDeleteTargetLoading(false);
      const _targets = [...targets];
      const index = _targets.findIndex(
        (element) => element.id === deleteTargetDialogRow.id
      );
      _targets.splice(index, 1);
      setTargets(_targets);
      pushMessageToSnackbar({
        text: "Paciente elminado",
      });
    }, 1500);
  }, [
    setIsDeleteTargetDialogOpen,
    setIsDeleteTargetLoading,
    pushMessageToSnackbar,
    setTargets,
    deleteTargetDialogRow,
    targets,
  ]);

  const handleChangePage = useCallback(
    (_, page) => {
      setPage(page);
    },
    [setPage]
  );

  const handleDeleteTargetDialogClose = useCallback(() => {
    setIsDeleteTargetDialogOpen(false);
  }, [setIsDeleteTargetDialogOpen]);

  const handleDeleteTargetDialogOpen = useCallback(
    (row) => {
      setIsDeleteTargetDialogOpen(true);
      setDeleteTargetDialogRow(row);
    },
    [setIsDeleteTargetDialogOpen, setDeleteTargetDialogRow]
  );

  const toggleTarget = useCallback(
    (row) => {
      const _targets = [...targets];
      const index = _targets.findIndex((element) => element.id === row.id);
      row.isActivated = !row.isActivated;
      _targets[index] = row;
      if (row.isActivated) {
        pushMessageToSnackbar({
          text: "Linea activada",
        });
      } else {
        pushMessageToSnackbar({
          text: "Linea desactivada",
        });
      }
      setTargets(_targets);
    },
    [pushMessageToSnackbar, targets, setTargets]
  );

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
        title: 'Mail',
        field: 'mail'
      },
    ],
    data:
      targets.map(v => {
        return {
          name: v.name,
          surname: v.lastName,
          telefono: v.phoneNumber,
          mail: v.email,
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
        actions={[
          {
            icon: AssignmentIcon,
            tooltip: 'Historia clinica',
            onClick: (event, rowData) => {
              // Do save operation
              history.push("/c/historia-clinica")
            }
          }
        ]}
        localization={{ body: { editRow: { deleteText: 'Estas seguro de eliminar este paciente?' } } }}
        editable={validadorUsuario.esVisibleAdmin(global.usuarioElegido) && {
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
