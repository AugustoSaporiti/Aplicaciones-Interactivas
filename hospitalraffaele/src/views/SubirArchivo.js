import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../logged_in/components/posts/upload/Grid/GridContainer.js";
import GridItem from "../logged_in/components/posts/upload/Grid/GridItem.js";
import Card from "../logged_in/components/posts/upload/Card/Card.js";
import CardHeader from "../logged_in/components/posts/upload/Card/CardHeader.js";
import CardBody from "../logged_in/components/posts/upload/Card/CardBody.js";
import CardFooter from "../logged_in/components/posts/upload/Card/CardFooter.js";
import CustomInput from "../logged_in/components/posts/upload/CustomInput/CustomInput.js";
import Button from "../logged_in/components/posts/upload/CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CustomFileInput from "../logged_in/components/posts/upload/CustomFileInput/CustomFileInput.js";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'

import Select from "@material-ui/core/Select";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import {guardarImgUser,uploadFile} from "../controllers/api/api.upload.js";

//import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";

//import city from "assets/img/largada.webp";
//import imgFolletoModal from "assets/img/contactUsInvertida.webp";

//import selectStyles from "assets/jss/material-kit-pro-react/customSelectStyle.js";
//import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";

//const useStyles = makeStyles(contactsStyle);
//const useMStyles = makeStyles(modalStyle);
//const selectUseStyles = makeStyles(selectStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function SubirArchivos({ ...rest }) {
  const [dni,setDni]=React.useState("");
  const [modal, setModal] = React.useState(false);
  const [imgAux,setImgAux]= React.useState('');
  
  //Estilos
  //const classes = useStyles();
  //const mClasses = useMStyles(); 
  const guardarImagenUser = async function ()
  {
    //Subir Imagen
    let files=[];
    let nombres=[];
    let archivoImagen = '';
    
    if (imgAux!=='')
    {
      files.push(imgAux);
      //buscar extension archivo
      let archivoOrig = imgAux.name;
      let posExt = archivoOrig.indexOf('.');
      let extension = archivoOrig.substring(posExt,archivoOrig.length);
      let aleatorio = Math.random().toString().substring(2,15);
      nombres.push("imgPago"+dni+"_"+aleatorio+extension);
      //subir archivo a servidor
      archivoImagen = await uploadFile(files,nombres);
      //Si la imagen se subio bien registro el pago
      if (archivoImagen.ok)
      {
        //grabar pago en base de datos
        let pago = {
          dni: dni, 
          nombreImg:nombres[0]
        }
        let rdo = await guardarImgUser(pago);
        console.log('resultado', rdo);
        if (rdo==='Ok')
        {
          setModal(true);
        }
        if (rdo==='Error')
        {
          alert("Ha ocurrido un error al grabar la imagen");
        } 
      }
      else
      {
        alert ("Ocurrio un error al subir tu imagen al servidor. Intenta mas tarde.")
      } 
    }
  }
 
  const validarFormulario= ()=>{
    //console.log(dni,"+",codigoMP)
    if (dni!=="" && imgAux!=='')
    {
        guardarImagenUser();        
      
    }
    else
    {
      alert("Debes completar los campos"); 
    }
  }
  return (
    <div>
      <div
        //className={classes.contacts + " " + classes.sectionFolleto}
        style={{           
            //backgroundImage: `url(${city})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }
        }
      >
        <div /*className={classes.container}*/>
          <GridContainer>
            
            <GridItem xs={12} sm={12} md={5} /*className={classes.mlAuto}*/>
              <Card /*className={classes.card1}*/>
                <form>
                  <CardHeader
                    contact
                    color= "warning"
                   // className={classes.textCenter}
                  >
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          inputProps={{
                            value:dni,
                            onChange: (event) => setDni(event.target.value)                                                    
                            }}
                          formControlProps={{
                            fullWidth: true
                            }}
                          labelText="Ingresa tu DNI.Sin espacios ni puntos."
                          id="first"
                        />
                      </GridItem>
                      <GridItem md={12} sm={12} xs={12}>
                        <CustomFileInput
                          //className={classes.footerButtons}
                          formControlProps={{
                            fullWidth: true
                          }}
                          getImagen={(i)=>setImgAux(i)}
                          inputProps={{ 
                            placeholder: "Ingresa la imagen del pago.Tamaño maximo 3MB."  
                            }}
                          endButton={{
                            buttonProps: {
                            round: true,
                            color: "warning",
                            justIcon: true,
                            fileButton: true
                            },
                          icon: <AddAPhotoIcon />
                          }}
                          />
                      </GridItem>
                    </GridContainer>                   
                  </CardBody>
                  <CardFooter /*className={classes.justifyContentBetween}*/>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Button 
                        variant="contained"
                        color="secondary"
                        onClick={validarFormulario}
                        target="_blank"
                       // className={classes.pullRight}
                        >
                        Subir archivo
                      </Button>
                      <Dialog
                    /*    classes={{
                          root: mClasses.center,
                          paper: mClasses.modal
                        }}*/
                        open={modal}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => setModal(false)}
                        aria-labelledby="modal-slide-title"
                        aria-describedby="modal-slide-description"
                      >
                      <div
                          style={{
                            //backgroundImage: `url(${imgFolletoModal})`,
                            backgroundSize: "contain",
                            backgroundRepeat:"no-repeat",
                            opacity: "0.9"
                          }}
                      >
                        <DialogTitle
                          id="classic-modal-slide-title"
                          disableTypography
                       //   className={mClasses.modalHeader}
                        >
                          <IconButton
                          //  className={mClasses.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setModal(false)}
                          >
                            <Close /*className={mClasses.modalClose}*/ />
                          </IconButton>
                        </DialogTitle>
                        <DialogContent
                          id="modal-slide-description"
                          //className={mClasses.modalBody}
                        >
                          <h6>Imagen recibida</h6>
                         
                        </DialogContent>
                        
                        </div>
                      </Dialog>
                    </GridItem>
                  </GridContainer>    
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
            <GridItem xs={1} sm={1} md={1}></GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
