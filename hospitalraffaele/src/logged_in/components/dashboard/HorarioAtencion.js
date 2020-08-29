import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import VerticalTabs from "./TabsDias"
import PropTypes from "prop-types";
import global from "../../../logged_out/components/Global.js";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import validadorUsuario from "../../validadorUsuario.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];

MultipleSelect.propTypes = {
  pushMessageToSnackbar: PropTypes.func
};

const doctores = [
  { title: 'Dc. Saporiti', year: 1994 },
  { title: 'Dc. Sarasa', year: 1994 },
  { title: 'Dc. Malio', year: 1994 },
  { title: 'Dc. Guzman', year: 1994 },
  { title: "Dc. Gargan", year: 1994 },
];

export default function MultipleSelect(props) {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      {validadorUsuario.esVisibleAdmin() &&
        <Autocomplete
          id="combo-box-demo"
          options={doctores}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Doctores" variant="outlined" />}
        />
      }
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Selecione dias de atencion</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <VerticalTabs diasHabilitados={personName} />

    </div>
  )
}