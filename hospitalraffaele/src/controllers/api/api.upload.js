import urlWebServices from '../webServices.js';
import {findPatientByDNI} from './api.patients';

export const uploadFile= async function(files,nombres)
{
     //url webservices
     let url = urlWebServices.uploadFile;
  
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                //'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000'
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}

export const guardarImgUser = async function(message)
{
    //url webservices
    let url = urlWebServices.saveFileName;


    try {
        let patient = await findPatientByDNI(message.dni);

        if(patient.success) {
            let token = localStorage.getItem('x');

            const formData = new URLSearchParams();

            formData.append('patient_id', patient.response.id);
            formData.append('fileName',message.nombreImg);

            let response = await fetch(url,{
                method: 'POST', // or 'PUT'
                mode: "cors",
                headers:{
                    'Accept':'application/x-www-form-urlencoded',
                    'Origin':'http://localhost:3000',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-access-token': token
                },
                body:formData
            });

            if (response.status===200)
            {
                return 'Ok';
            }
            else
            {
                return 'Error'; 
            }
        } else {
            return 'Error';
        }
        
    } catch(e) {
        console.log("error",e);
        return false;
    }
}



export const listFiles = async function()
{
     //url webservices
     let url = urlWebServices.listFiles;
    
    try
    {
        let response = await fetch(url,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                //'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000'
                //'Content-Type': 'application/form-data'
            }
        });
    
        let result = await response.json()
        console.log('respuestaUpload', result);
        
        return result;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}