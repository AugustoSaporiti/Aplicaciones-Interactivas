const variableGuardada = [];

const validarUsuario = (value, role) => {
    const menuItemValidado = [];

    if (role !== undefined && role !== null) {
        if (role[0].role === "Paciente") {
            value.filter(x => {
                if (x.name === "Dashboard Paciente" || x.name === "Recetas paciente" || x.name === "Salir") {
                    menuItemValidado.push(x);
                }
            });
        }

        else if (role[0].role === "Secretario") {
            value.filter(x => {
                if (x.name === "Dashboard" || x.name === "Recetas" || x.name === "Salir") {
                    menuItemValidado.push(x);
                }
            });
        }

        else if (role[0].role === "Doctor") {
            value.filter(x => {
                if (x.name === "Dashboard" || x.name === "Recetas" || x.name === "Salir") {
                    menuItemValidado.push(x);
                }
            });
        }

        else if (role[0].role === "Admin") {
            value.filter(x => {
                if (x.name === "Dashboard" || x.name === "Recetas" || x.name === "Usuarios" || x.name === "Salir") {
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
    // if (role[0].role === "Paciente") {
    //     for (let elemento of value) {
    //         if(elemento.name === "Dashboard Paciente" || elemento.name === "Posts" || elemento.name === "Salir")
    //         {
    //             menuItemValidado.push(elemento);
    //         }            
    //     }
    // }


};

const esVisible = (value) => {
    var visible = false;

    console.log("variable",value)
    if (value !== null && value !== undefined) {
            if (value[0].role === "Doctor" || value[0].role === "Admin") {
                visible = true;
            }
    }

    return visible;
};

const esVisibleAdmin = (value) => {
    var visible = false;

    if (value !== null && value !== undefined) {
            if (value[0].role === "Admin") {
                visible = true;
            }
    }

    return visible;
};


export default {
    validarUsuario,
    esVisible,
    esVisibleAdmin
}; 