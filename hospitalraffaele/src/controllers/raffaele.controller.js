import urlWebServices from './webServices';

 export const createUser = async function(user)  {
    // url
    let url = urlWebServices.createUsers;

    let formData = new URLSearchParams();
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('role_id', user.role);
    formData.append('status', 1);

    try {
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
  
        let result = response.status; 
        let data = await response.json();

        let obj = {
            success: (response.status===200?true:false),
            response: data
        }
        return obj;
        
      } catch(e) {
        let obj = {
            success: false,
            response: e
        };
      }
}

