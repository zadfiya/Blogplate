export const getRequest = async (obj) => {
    try {
        const {url, headers, serviceInstance} = obj
        const config = {
            headers: {...headers},
        };
    
        const response = await serviceInstance.get(url, config);
        return response.data; // Return the response data
    } catch (error) {
        console.error('GET request error:', error);
        return error; // Throw the error for the caller to handle
    }
  };
  
  // Function to handle POST requests
  export const postRequest = async (obj) => {
    try {
        const {url, headers, serviceInstance, data} = obj
        const config = {
        headers: {...headers},
        };
  
        const response = await serviceInstance.post(url, data, config);
        return response.data; 
    } catch (error) {
        console.error('POST request error:', error);
        return error; 
    }
  };