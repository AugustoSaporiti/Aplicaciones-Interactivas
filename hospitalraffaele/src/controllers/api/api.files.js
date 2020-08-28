import urlWebServices from '../webServices';

 export const uploadFile = async function(file)  {

    // url
    let url = urlWebServices.uploadFile;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('file', file);

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'Content-Type: multipart/form-data; boundary='
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
        console.log(result);
        return result;
      }
}

export const downloadFile = async function(fileName)  {
    // url
    let url = urlWebServices.downloadFile;

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url + fileName, {
          method: 'GET',
          mode: 'cors',
          headers: {
         //   'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'Content-Type: multipart/form-data; boundary=---WebKitFormBoundary7MA4YWxkTrZu0gW'
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
/*
export const listByPatient = async function(patient)  {
    // url
    let url = urlWebServices.findFilesByPatient;

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url + patient, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'multipart/related'
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
}*/