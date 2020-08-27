const rutaBack = "http://localhost:8080/";

const urlWebServices = {
    /*
     * Users
     */ 
    createUsers: rutaBack + "api/user/create",
    updateUsers: rutaBack + "api/user/update",
    deleteUsers: rutaBack + "api/user/disable",
    listUsers: rutaBack + "api/user/list",
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
}

export default urlWebServices;