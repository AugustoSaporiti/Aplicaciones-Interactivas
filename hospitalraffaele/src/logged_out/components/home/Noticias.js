import React from "react";
import { Grid, Typography, Card} from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import calculateSpacing from "./calculateSpacing";
import noticia1 from "../../dummy_data/images/Noticias/noticia1.jpg"
import noticia2 from "../../dummy_data/images/Noticias/noticia2.jpg"
import noticia3 from "../../dummy_data/images/Noticias/noticia3.jpg"
import noticia4 from "../../dummy_data/images/Noticias/noticia4.jpg"
import noticia5 from "../../dummy_data/images/Noticias/noticia5.jpg"
import noticia6 from "../../dummy_data/images/Noticias/noticia6.jpg"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    media: {
        display: 'block',
      height: 0,
      paddingTop: '50%'     
    },

    posicion: {
      paddingLeft: '10%'     
    }
  }));

function Noticias(props) {
  const { width } = props;
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
        Últimas noticias
        </Typography>

     
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}  className={classes.posicion}>
          <Card style={{ width: '22rem' }}>
          <CardMedia
        className={classes.media}
        image={noticia1}
        title="Paella dish"
      />
        <CardContent>            
        <Typography gutterBottom variant="h5" component="h2">
        ELA: un posible nuevo enfoque terapéutico
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Los investigadores de San Raffaele han asociado por primera vez un mal funcionamiento del complejo Retromer con ALS y han desarrollado una posible diana terapéutica.
        </Typography>
      </CardContent>
        </Card>
            <Card style={{ width: '22rem' }}>
          <CardMedia
        className={classes.media}
        image={noticia2}
        title="Paella dish"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Ansiedad y depresión en pacientes post-COVID-19
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Un estudio de San Raffaele muestra por primera vez las repercusiones a medio plazo que el COVID-19 puede dejar en los pacientes desde el punto de vista psiquiátrico.
        </Typography>
      </CardContent>
        </Card>

        <Card style={{ width: '22rem' }}>
          <CardMedia
        className={classes.media}
        image={noticia3}
        title="Paella dish"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Lentes de contacto: consejos útiles para el verano
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Consejos y trucos para llevar lentillas de forma segura durante las vacaciones.
        </Typography>
      </CardContent>
        </Card>

        <Card style={{ width: '22rem' }}>
          <CardMedia
        className={classes.media}
        image={noticia4}
        title="Paella dish"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Qué hacer para prevenir y tratar la insolación
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Uno de los riesgos para la salud relacionados con el calor es el golpe de calor: evaluamos los síntomas y los remedios con el experto del Hospital San Raffaele.
        </Typography>
      </CardContent>
        </Card>

        <Card style={{ width: '22rem' }}>
          <CardMedia
        className={classes.media}
        image={noticia5}
        title="Paella dish"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Día Mundial de la Hepatitis: hagamos un balance de la hepatitis B
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Con motivo del Día Mundial de la Hepatitis 2020, hacemos balance con el prof. Guidotti sobre el tratamiento y la investigación de la hepatitis B crónica, una de las enfermedades virales más extendidas en el mundo.
        </Typography>
      </CardContent>
        </Card>

        <Card style={{ width: '22rem' }}>
          <CardMedia
        className={classes.media}
        image={noticia6}
        title="Paella dish"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Ayuno intermitente: beneficios y contraindicaciones de la dieta
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Un día magro a la semana y algunas reglas simples para recuperar el bienestar. 
        </Typography>
      </CardContent>
        </Card>
        
          </Grid>
        </div>
      </div>
    </div>
  );
}


export default Noticias;
