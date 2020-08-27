import urlWebServices from '../webServices';

 export const updatePermissions = async function(permission)  {
    // url
    let url = urlWebServices.updatePermissions;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    for(let key in permission) {
        formData.append(key, permission[key]);
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

export const listPermissions = async function(roleId)  {
    // url
    let url = urlWebServices.listPermissions;

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