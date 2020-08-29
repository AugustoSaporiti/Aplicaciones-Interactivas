import React, { useState, useCallback, Fragment } from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import {
  Grid,
  TablePagination,
  Divider,
  Toolbar,
  Typography,
  Button,
  Paper,
  Box,
  withStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EnhancedTableHead from "../../../../shared/components/EnhancedTableHead";
import SelfAligningImage from "../../../../shared/components/SelfAligningImage";
import HighlightedInformation from "../../../../shared/components/HighlightedInformation";
import validadorUsuario from "../../../validadorUsuario.js";
import global from "../../../../logged_out/components/Global.js";

var showButton = false;
const styles = {
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between",
  },
};

const rowsPerPage = 25;

function MedicalHistoryContent(props) {
  showButton = validadorUsuario.esVisible();
  const {
    pushMessageToSnackbar,
    //  setPosts,
    //  posts,
    openAddMedicalHistoryEntryModal,
    classes,
  } = props;
  const [page, setPage] = useState(0);
  const [isDeleteMedicalHistoryEntryDialogOpen, setIsDeleteMedicalHistoryEntryDialogOpen] = useState(false);
  const [isDeleteMedicalHistoryEntryDialogLoading, setIsDeleteMedicalHistoryEntryDialogLoading] = useState(
    false
  );

  const patient = {
    name: 'Joana Salas',
    birthday: '19/09/1992',
    osocial: 'OSDE 210',
    osocial_id: '28128793782-9'
  }

  const posts = [
    {
      date: "Numero de historia:",
      text: "4321"
    },
    {
      date: "2019-10-23 11:45",
      text: "Alignment asthma flare-up astigmatism blood glucose meter blood type contagious depression frostbite glycosylated hemoglobin test (hemoglobin a1c) gums hay fever heredity hydrocortisone laparoscopy lymph platelets prosthesis scoliosis sphenopalatineganglioneuralgia tragus urine vertebrae violence."
    },
  ];

  const rows = [
    {
      id: "date",
      numeric: false,
      label: "Fecha"
    },
    {
      id: "text",
      numeric: false,
      label: "Observacion"
    },
  ];

  const rowsPerPage = 25;

  const closeDeleteMedicalHistoryEntryDialog = useCallback(() => {
    setIsDeleteMedicalHistoryEntryDialogOpen(false);
    setIsDeleteMedicalHistoryEntryDialogLoading(false);
  }, [setIsDeleteMedicalHistoryEntryDialogOpen, setIsDeleteMedicalHistoryEntryDialogLoading]);

  /* const deletePost = useCallback(() => {
     setIsDeletePostDialogLoading(true);
     setTimeout(() => {
       const _posts = [...posts];
       const index = _posts.find((element) => element.id === deletePost.id);
       _posts.splice(index, 1);
       setPosts(_posts);
       pushMessageToSnackbar({
         text: "La receta fue eliminada exitosamente",
       });
       closeDeletePostDialog();
     }, 1500);
   }, [
     posts,
     setPosts,
     setIsDeletePostDialogLoading,
     pushMessageToSnackbar,
     closeDeletePostDialog,
   ]);*/

  const handleChangePage = useCallback(
    (__, page) => {
      setPage(page);
    },
    [setPage]
  );

  const printImageGrid = useCallback(() => {
    if (posts.length > 0) {
      return (
        <div className={classes.tableWrapper}>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead rowCount={posts.length} rows={rows}/>
            <TableBody>
              {posts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((posts, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.firstData}
                    >
                      {posts.date}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {posts.text}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      );
    }
    return (
      <Box m={2}>
        <HighlightedInformation>
          Sin observaciones. Haga click en <strong>Agregar observación</strong> para crear una entrada.
        </HighlightedInformation>
      </Box>
    );
  }, [posts, page]);

  const history = useHistory();

  return (
    <Paper>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4">Historia clínica</Typography>
        {showButton ? <Button
          variant="contained"
          color="secondary"
          onClick={openAddMedicalHistoryEntryModal}
          disableElevation
        >
          Agregar observacion
        </Button> : null}
        {showButton ? <Button
          variant="contained"
          color="primary"
          onClick={openAddMedicalHistoryEntryModal}
          disableElevation
        >
          Subir estudio
        </Button> : null}
      </Toolbar>
      <Divider className={classes.divider} />
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">ANEMESIS</Typography>
        <Typography>Ultima fecha de modificacion:</Typography>
      </Toolbar>
      <Divider className={classes.divider} />

      {printImageGrid()}
      <TablePagination
        component="div"
        count={posts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onChangePage={handleChangePage}
        classes={{
          select: classes.dNone,
          selectIcon: classes.dNone,
          actions: posts.length > 0 ? classes.dBlock : classes.dNone,
          caption: posts.length > 0 ? classes.dBlock : classes.dNone,
        }}
        labelRowsPerPage=""
      />
      <Fragment>
        <Button style={{ float: 'right' }} color="primary" variant="contained" onClick={() => history.push("/c/dashboard")}>
          Atras
      </Button>
      </Fragment>
    </Paper>
  );
}

MedicalHistoryContent.propTypes = {
  openAddPostModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  //posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  //setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles)(MedicalHistoryContent);
