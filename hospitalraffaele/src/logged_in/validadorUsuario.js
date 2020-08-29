import entities from "../controllers/entities";
const variableGuardada = [];
const role = parseInt(localStorage.getItem('r'));

const validarUsuario = (value) => {
    const menuItemValidado = [];

    if (role !== undefined && role !== null) {
        if (role === entities.idPaciente) {
            value.filter(x => {
                if (x.name === "Principal Paciente" || x.name === "Recetas paciente" || x.name === "Salir") {
                    menuItemValidado.push(x);
                }
            });
        }

        else if (role === entities.idSecretario) {
            value.filter(x => {
                if (x.name === "Principal" || x.name === "Recetas" || x.name === "Salir") {
                    menuItemValidado.push(x);
                }
            });
        }

        else if (role === entities.idDoctor) {
            value.filter(x => {
                if (x.name === "Principal" || x.name === "Recetas" || x.name === "Salir") {
                    menuItemValidado.push(x);
                }
            });
        }

        else if (role === entities.idAmin) {
            value.filter(x => {
                if (x.name === "Principal" || x.name === "Recetas" || x.name === "Usuarios" || x.name === "Salir") {
                    menuItemValidado.push(x);
                }
            });
        }

        else {
            value.filter(x => {
                if (x.name === "Salir") {
                    menuItemValidado.push(x);
                }
            });
        }

    }

    else {
        value.filter(x => {
            if (x.name === "Salir") {
                menuItemValidado.push(x);
            }
        });
    }

    return menuItemValidado;


};

const esVisible = () => {
    var visible = false;

    if (role !== null && role !== undefined) {
        if (role === entities.idDoctor || role === entities.idAmin) {
            visible = true;
        }
    }
console.log(visible);
    return visible;
};

const esVisibleSecretario = () => {
    var visible = false;

    if (role !== null && role !== undefined) {
        if (role === entities.idDoctor || role === entities.idAdmin || role === entities.idSecretario ) {
            visible = true;
        }
    }

    return visible;
};

const esVisibleAdmin = () => {
    return role !== null && role !== undefined && role === entities.idAmin;
};

const esSecretarioAdmin = (value) => {
    var visible = false;

    if (role !== null && role !== undefined) {
        if (role === entities.idAdmin || role === entities.idSecretario ) {
            visible = true;
        }
    }

    return visible;
};

export default {
    validarUsuario,
    esVisible,
    esVisibleAdmin,
    esVisibleSecretario,
    esSecretarioAdmin,
}; 