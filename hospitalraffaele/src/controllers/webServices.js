const rutaBack = "http://localhost:8080/";

const urlWebServices = {
    listUsers: rutaBack + "api/user/list",
    createUsers: rutaBack + "api/user/create",
    updateUsers: rutaBack + "api/user/update",
    deleteUsers: rutaBack + "api/user/disable",
    findUserByEmail: rutaBack + "api/user/find/email/",
    listUsersByRole: rutaBack + "api/user/list/role/",
}

export default urlWebServices;