import axios from 'axios'

export const fetchUserInfoAPI = async (token) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/profile',
          {},
          {
            headers : {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
          }
        );
       return response.data.body
        
    } catch (error) {
        console.log('error' , error);
    }
}

export const fetchUserLogin = async (token) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login',
          {},
          {
            headers : {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
          }
        );
       return response.data.body
        
    } catch (error) {
        console.log('error' , error);
    }
}