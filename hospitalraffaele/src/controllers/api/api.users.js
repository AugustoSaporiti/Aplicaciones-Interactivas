import urlWebServices from '../webServices';

 export const createUser = async function(user)  {
    // url
    let url = urlWebServices.createUsers;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('role_id', user.role);
    formData.append('status', 1);

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'application/x-www-form-urlencoded'
          },
          body: formData
        });
  
        let data = await response.json();

        let result = {
            success: (response.status === 200 ? true : false),
            response: data
        }

        return result;
        
      } catch(e) {
        let result = {
            success: false,
            response: e
        };

        return result;
      }
}

export const loginUser = async function(user)  {
  // url
  let url = urlWebServices.loginUser;
  // Genero formulario con datos a pasar
  let formData = new URLSearchParams();
  formData.append('email', user.email);
  formData.append('password', user.password);

  try {
      // Hago llamada al endpoint
      let response =  await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/x-www-form-urlencoded',
          'Origin': 'http://localhost:3000/',
          'Content-type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });

      let data = await response.json();

      if(response.status === 200)
      {
        console.log(data.token);
        localStorage.setItem("x", data.token);
      }
      let result = {
          success: (response.status === 200 ? true : false),
          response: response
      }
      console.log(result);
      return result;
      
    } catch(e) {
      let result = {
          success: false,
          response: e
      };
      console.log("chau "+result);
      return result;
    }
}

export const updateUser = async function(user)  {
    // url
    let url = urlWebServices.updateUsers;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    
    for(let key in user) {
        formData.append(key, user[key]);
    }

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'application/x-www-form-urlencoded'
          },
          body: formData
        });
  
        let data = await response.json();

        let result = {
            success: (response.status === 200 ? true : false),
            response: data
        }

        return result;
        
      } catch(e) {
        let result = {
            success: false,
            response: e
        };

        return result;
      }
}

export const deleteUser = async function(userId)  {
    // url
    let url = urlWebServices.deleteUsers;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('user_id', userId);
    formData.append('status', 0);

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'application/x-www-form-urlencoded'
          },
          body: formData
        });
  
        let data = await response.json();

        let result = {
            success: (response.status === 200 ? true : false),
            response: data
        }

        return result;
        
      } catch(e) {
        let result = {
            success: false,
            response: e
        };

        return result;
      }
}

export const listUsers = async function(user)  {
    // url
    let url = urlWebServices.listUsers;

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'application/x-www-form-urlencoded'
          }
        });
  
        let data = await response.json();

        let result = {
            success: (response.status === 200 ? true : false),
            response: data
        }

        return result;
        
      } catch(e) {
        let result = {
            success: false,
            response: e
        };

        return result;
      }
}

export const findUserByEmail = async function(userEmail)  {
    // url
    let url = urlWebServices.findUserByEmail;

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url + userEmail, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'application/x-www-form-urlencoded'
          }
        });
  
        let data = await response.json();

        let result = {
            success: (response.status === 200 ? true : false),
            response: data
        }

        return result;
        
      } catch(e) {
        let result = {
            success: false,
            response: e
        };

        return result;
      }
}

export const listUsersByRole = async function(roleId)  {
    // url
    let url = urlWebServices.listUsersByRole;

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url + roleId, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'application/x-www-form-urlencoded'
          }
        });
  
        let data = await response.json();

        let result = {
            success: (response.status === 200 ? true : false),
            response: data
        }
        
        return result;
        
      } catch(e) {
        let result = {
            success: false,
            response: e
        };

        return result;
      }
}