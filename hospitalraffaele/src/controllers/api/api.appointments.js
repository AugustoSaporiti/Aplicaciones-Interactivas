import urlWebServices from '../webServices';

 export const createAppointment = async function(appointment)  {
    // url
    let url = urlWebServices.createAppointment;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('doctor_id', appointment.doctor);
    formData.append('date', appointment.date);
    formData.append('time', appointment.time);
    formData.append('patient_id', appointment.patient);

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
        console.log(result);
        return result;
      }
}

export const deleteAppointment = async function(appointment)  {
    // url
    let url = urlWebServices.deleteAppointment;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('doctor_id', appointment.doctor);
    formData.append('date', appointment.date);
    formData.append('patient_id', appointment.patient);

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

export const findAppointmentsByDoctor = async function(doctorId)  {
    // url
    let url = urlWebServices.findAppointmentsByDoctor;

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url + doctorId, {
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

export const findAppointmentsByPatient = async function(patientId)  {
    // url
    let url = urlWebServices.findAppointmentsByPatient;

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url + patientId, {
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

export const listAppointments = async function()  {
  // url
  let url = urlWebServices.listAppointments;

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
console.log(result);
      return result;
      
    } catch(e) {
      let result = {
          success: false,
          response: e
      };

      return result;
    }
}