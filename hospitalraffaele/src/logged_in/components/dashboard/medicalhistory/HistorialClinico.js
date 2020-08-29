import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
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
import validadorUsuario from "../../../validadorUsuario.js";
import global from "../../../../logged_out/components/Global.js";

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


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function MedicalHistory(props) {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [personales, setPersonales] = React.useState({
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
        name: 'DNI',
        datos: '123123312',
      },
      {
        name: 'Apellido',
        datos: 'Saporiti',
      },
      {
        name: 'Nombre',
        datos: 'Augusto',
      },
      {
        name: 'Edad',
        datos: '78',
      },
      {
        name: 'Sexo',
        datos: 'Masculino',
      },
      {
        name: 'Ocupacion',
        datos: 'Estudiante',
      },
      {
        name: 'Fecha de nacimiento',
        datos: '25/8/2020',
      },
      {
        name: 'Estado civil',
        datos: 'Soltero',
      },
      {
        name: 'Nacionalidad',
        datos: 'Argentina',
      },
      {
        name: 'Residencia actual',
        datos: 'U.A.D.E.',
      },
      {
        name: 'Grado de instrucion',
        datos: 'Universitario',
      },
    ],
  });

  const [antecedentesPersonales, setAntecedentesPersonales] = React.useState({
    columns: [
      {
        title: '',
        field: 'name',
        editable: 'never',
      },
      {
        title: 'Tu',
        field: 'paciente'
      },
      {
        title: 'Padre',
        field: 'padre'
      },
      {
        title: 'Madre',
        field: 'madre'
      },
      {
        title: 'Hermanos',
        field: 'hermanos'
      },
    ],
    data: [
      {
        name: 'Hipertension arterial',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Cardiopatia',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Accidente cardiovascular',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Diabates mellitus',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Niveles altos de colesterol',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Niveles de trigliceridos',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Hiperlecemia',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Artrosis',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Enfermedad tiroidea',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Hernia',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Litasis',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Disepsia',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Gastritis',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Ulcera gastrica',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Reflujo gastroesofagico',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Nauseas y/o vomitos',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Diarrea',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Estrenimiento',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Polipos en colon o recto',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Enfermedad respiratoria cronica',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Tumor maligno',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
      {
        name: 'Alteracion psiquiatrica',
        paciente: 'Niega.',
        padre: 'Niega.',
        madre: 'Niega.',
        hermanos: 'Niega.',
      },
    ],
  });

  const [consultas, setConsultas] = React.useState({
    columns: [
      {
        title: '',
        field: 'name',
      },
    ],
    data: [
      {
        name: 'Dolor abdominal, vomitos y nauseas.',
      },
      {
        name: 'Dolor abdominal, vomitos y nauseas. Por las noches',
      },
      {
        name: 'Dolor abdominal, vomitos y nauseas. Por las noches y por las mañanas',
      },
      {
        name: 'Dolor abdominal, vomitos y nauseas. Todo el dia',
      },
    ],
  });

  const [enfermedadesActuales, setEnfermedadesActuales] = React.useState({
    columns: [
      {
        title: '',
        field: 'name',
      },
    ],
    data: [
      {
        name: 'Paciente, sexo femenino, 55 años de edad con antecedentes de Hipertension Arterial, desde 2012, tratada con enlapril 10 mg/dia sin dieta dash, ingresa a la guardia en martes 04/11/2014 a las 19:00 PM  por un dolor en abdomen de inicio subito, caracter colico, intesidad 10/10 , se irradia en forma hemicenturon, que no cede al uso de antiespasmodicos (Buscapina) automedicado en su casa, donde el dolor se agranda por ingesta de alimentos grasos, y alivia en posicion decubito lateral.',
      },
      {
        name: 'Paciente, sexo femenino, 55 años de edad con antecedentes de Hipertension Arterial, desde 2012, tratada con enlapril 10 mg/dia sin dieta dash, ingresa a la guardia en martes 04/11/2014 a las 19:00 PM  por un dolor en abdomen de inicio subito, caracter colico, intesidad 10/10 , se irradia en forma hemicenturon, que no cede al uso de antiespasmodicos (Buscapina) automedicado en su casa, donde el dolor se agranda por ingesta de alimentos grasos, y alivia en posicion decubito lateral.',
      },
    ],
  });

  const [antecedentesHeredofamiliares, setAntecedentesHeredofamiliares] = React.useState({
    columns: [
      {
        title: '',
        field: 'name',
      },
    ],
    data: [
      {
        name: 'Padre e madre muertes por falla cardiaca.',
      },
      {
        name: 'Abuelos con problemas cardiacos tempranos.',
      },
    ],
  });

  const [patologicos, setPatologicos] = React.useState({
    columns: [
      {
        title: '',
        field: 'name',
        editable: 'never',
      },
      {
        title: 'Datos',
        field: 'datos',
      },
    ],
    data: [
      {
        name: 'Respiratorio',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Gastrointestinales',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Nefrourologicos',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Neurologicos',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Hematologicos',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Infectologicos',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Endocrinologicos',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Quirurgicos',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Traumatologicos',
        datos: 'Sin datos patolicos aparentes.',
      },
      {
        name: 'Alergicos',
        datos: 'Paciente relata tener alergia a plantas.',
      },
    ],
  });

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Datos personales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialTable
            icons={tableIcons}
            columns={personales.columns}
            title="Datos personales"
            data={personales.data}
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
            }}
            editable={validadorUsuario.esVisible() && {
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setPersonales((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Antecedentes personales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialTable
            icons={tableIcons}
            columns={antecedentesPersonales.columns}
            title="Habitos toxicos"
            data={antecedentesPersonales.data}
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
            }}
            editable={validadorUsuario.esVisible() && {
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setAntecedentesPersonales((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Consultas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialTable
            icons={tableIcons}
            columns={consultas.columns}
            title="Consultas"
            data={consultas.data}
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
            }}
            editable={validadorUsuario.esVisible() && {
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setConsultas((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setConsultas((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Enfermedades actuales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialTable
            icons={tableIcons}
            columns={enfermedadesActuales.columns}
            title="Enfermedades actuales"
            data={enfermedadesActuales.data}
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
            }}
            editable={validadorUsuario.esVisible() && {
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setEnfermedadesActuales((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setEnfermedadesActuales((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Antecedentes heredofamiliares</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialTable
            icons={tableIcons}
            columns={antecedentesHeredofamiliares.columns}
            title="Antecedentes heredofamiliares"
            data={antecedentesHeredofamiliares.data}
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
            }}
            editable={validadorUsuario.esVisible() && {
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setAntecedentesHeredofamiliares((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setAntecedentesHeredofamiliares((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Patologias</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialTable
            icons={tableIcons}
            columns={patologicos.columns}
            title="Patologias"
            data={patologicos.data}
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
            }}
            editable={validadorUsuario.esVisible() && {
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setPatologicos((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
            }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

MedicalHistory.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  // posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  // setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired,
};

export default MedicalHistory;
