const rutaBack = "http://localhost:8080/";

const urlWebServices = {
    /*
     * Users
     */ 
    createUsers: rutaBack + "api/user/create",
    updateUsers: rutaBack + "api/user/update",
    deleteUsers: rutaBack + "api/user/disable",
    listUsers: rutaBack + "api/user/list",
    loginUser: rutaBack + "api/user/login",
    findUserByEmail: rutaBack + "api/user/find/email/",
    listUsersByRole: rutaBack + "api/user/list/role/",

    /*
     * Roles
     */ 
    createRoles: rutaBack + "api/role/create",
    updateRoles: rutaBack + "api/role/update",
    listRoles: rutaBack + "api/role/list",
    findRoles: rutaBack + "api/role/find/name/",

    /*
     * Permissions
     */ 
    updatePermissions: rutaBack + "api/permission/update",
    listPermissions: rutaBack + "api/permission/list/role/",

    /*
     * Patients
     */ 
    updatePatients: rutaBack + "api/patient/update",
    listPatients: rutaBack + "api/patient/list",
    findPatients: rutaBack + "api/patient/find/dni/",

    /*
     * Availability
     */ 
    createAvailability: rutaBack + "api/availability/create",
    updateAvailability: rutaBack + "api/availability/update",
    deleteAvailability: rutaBack + "api/availability/delete",
    listAvailability: rutaBack + "api/availability/list",
    findAvailabilityByDoctor: rutaBack + "api/availability/find/doctor/",
    findAvailabilityByDate: rutaBack + "api/availability/find/doctor/:doctor/date/:date",

    /*
     * Appointments
     */ 
    createAppointment: rutaBack + "api/appointment/create",
   //updateAvailability: rutaBack + "api/availability/update",
    deleteAppointment: rutaBack + "api/appointment/delete",
    listAppointments: rutaBack + "api/appointment/list",
    findAppointmentsByDoctor: rutaBack + "api/appointment/find/doctor/",
    findAppointmentsByPatient: rutaBack + "api/appointment/find/patient/",

    /*
     * Files
     */ 
    uploadFile: rutaBack + "api/upload",
    saveFileName: rutaBack + "api/upload/save",
    listFiles: rutaBack + "api/upload/list",
    findFilesByPatient: rutaBack + "api/upload/find/patient/",
   //updateAvailability: rutaBack + "api/availability/update",
    downloadFile: rutaBack + "api/download/fileName/",

    /*
     * Historia clinica
     */ 
    createAntecedente: rutaBack + "api/historia-clinica/create-antecedentes",
    createAntecedenteFamiliar: rutaBack + "api/historia-clinica/create-antecedentes-familiares",
    createInto: rutaBack + "api/historia-clinica/create-info",
    createEnfermedades: rutaBack + "api/historia-clinica/create-enfermedades",
    createPatologia: rutaBack + "api/historia-clinica/create-patologias",
    createConsulta: rutaBack + "api/historia-clinica/create-consultas",
    updateAntecedente: rutaBack + "api/historia-clinica/update-antecedentes",
    updateAntecedenteFamiliar: rutaBack + "api/historia-clinica/update-antecedentes-familiares",
    updateInto: rutaBack + "api/historia-clinica/update-info",
    updateEnfermedades: rutaBack + "api/historia-clinica/update-enfermedades",
    updatePatologia: rutaBack + "api/historia-clinica/update-patologias",
    updateConsulta: rutaBack + "api/historia-clinica/update-consultas",
    getHistoriaClinica: rutaBack + "api/historia-clinica/find/patient/",
}

export default urlWebServices;