import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const currUser = async () => {
    let response = await axios.get('curruser/');
    console.log(response)
    return response
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