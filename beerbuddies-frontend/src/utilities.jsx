import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const currUser = async () => {
    let response = await axios.get('/curruser/');
    console.log(response.data)
    // return response.data.curr_user.fields.handle
    return response.data.curr_user.fields

}

export const signOut = async (setUser)  => {
    let response = await axios.post('signout/');
    console.log(response)
    setUser(null)
    return response
}

export const signIn = async(handle, password, setUser) => {
    console.log(handle)
    console.log(password)
    let response = await axios.post('signin/', {
        'handle':handle,
        'password':password
    });
    console.log(response.data.success)

    if(response.data.success) {
        setUser(handle)
    }

    return response;
}

export const signUp = async(email, handle, password) => {
    console.log(email)
    console.log(handle)
    console.log(password)
    let response = await axios.post('signup/', {
        'email':email,
        'handle':handle,
        'password':password
    });
    console.log(response);    
}

export const getCookie = () => {
    let name = 'csrftoken';
    let cookieValue
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  
  export const incrementToken = async (userHandle) => {
    try {
        const response = await axios.post('increment_token/', { 
            "user_handle" : userHandle 
        });
        if (response.status === 200) {
          return true; // Token amount incremented successfully
        } else {
          return false; // Error occurred while incrementing token amount
        }
      } catch (error) {
        console.error('An error occurred:', error);
        return false; // Error occurred while making the API call
      }
  }

  export const purchaseBeer = async (userHandle, beerName) => {
    try {
        const response = await axios.post('purchaseBeer/', { 
            "user_handle" : userHandle,
            "beer_name" : beerName,
        });
        if (response.status === 200) {
          return true; // Token amount decremented successfully
        } else {
          return false; // Error occurred while decrementing token amount
        }
      } catch (error) {
        console.error('An error occurred:', error);
        return false; // Error occurred while making the API call
      }
  }

  export const updateUserPreferences = async (userHandle, preferences) => {
    try {
      const response = await axios.post(`update_user_preferences/`, {
        "user_handle": userHandle,
        "preferences": preferences
      })
      return response.data;
    } catch (error) {
        console.error('An error occurred:', error);
        return false; // Error occurred while making the API call
    }
  }