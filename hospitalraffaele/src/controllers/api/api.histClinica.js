import urlWebServices from '../webServices';

 export const createAntecedente = async function(antecedente)  {
    // url
    let url = urlWebServices.createAntecedente;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('patient_id', antecedente.patient_id);
    formData.append('doctor_id', antecedente.doctor_id);
    formData.append('type', antecedente.type);
    formData.append('is_patient', antecedente.is_patient);
    formData.append('is_father', antecedente.is_father);
    formData.append('is_mother', antecedente.is_mother);
    formData.append('is_siblings', antecedente.is_siblings);

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

export const createAntecedenteFamiliar = async function(input)  {
    // url
    let url = urlWebServices.createAntecedenteFamiliar;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('patient_id', input.patient_id);
    formData.append('doctor_id', input.doctor_id);
    formData.append('comments', input.comments);

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

export const createPatologia = async function(input)  {
    // url
    let url = urlWebServices.createPatologia;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('patient_id', input.patient_id);
    formData.append('doctor_id', input.doctor_id);
    formData.append('type', input.type);
    formData.append('comments', input.comments);

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

export const createConsulta = async function(input)  {
    // url
    let url = urlWebServices.createConsulta;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('patient_id', input.patient_id);
    formData.append('doctor_id', input.doctor_id);
    formData.append('comments', input.comments);

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

export const createEnfermedades = async function(input)  {
    // url
    let url = urlWebServices.createEnfermedades;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('patient_id', input.patient_id);
    formData.append('doctor_id', input.doctor_id);
    formData.append('comments', input.comments);

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

export const createInfo = async function(input)  {
    // url
    let url = urlWebServices.createInfo;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('patient_id', input.patient_id);
    formData.append('doctor_id', input.doctor_id);
    formData.append('exercise_frequency', input.exercise);
    formData.append('drinking_frequency', input.drinking);
    formData.append('smoking_frequency', input.smoking);
    formData.append('pregnancies', input.pregnancies);
    formData.append('diet', input.diet);

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

// Updates

export const updateAntecedente = async function(input)  {
    // url
    let url = urlWebServices.updateAntecedente;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    for(let key in input) {
        formData.append(key, input[key]);
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

export const updateAntecedenteFamiliar = async function(input)  {
    // url
    let url = urlWebServices.updateAntecedenteFamiliar;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    for(let key in input) {
        formData.append(key, input[key]);
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

export const updatePatologia = async function(input)  {
    // url
    let url = urlWebServices.updatePatologia;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    for(let key in input) {
        formData.append(key, input[key]);
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

export const updateConsulta = async function(input)  {
    // url
    let url = urlWebServices.updateConsulta;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    for(let key in input) {
        formData.append(key, input[key]);
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

export const updateEnfermedades = async function(input)  {
    // url
    let url = urlWebServices.updateEnfermedades;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    for(let key in input) {
        formData.append(key, input[key]);
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

export const updateInfo = async function(input)  {
    // url
    let url = urlWebServices.updateInfo;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    for(let key in input) {
        formData.append(key, input[key]);
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


export const getHistoriaClinica = async function(patientId)  {
    // url
    let url = urlWebServices.getHistoriaClinica;

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
