export default function isAuth() {
    // Get the JWT token from localStorage
    const jwt = localStorage.token;
  
    if (!jwt) {
      return false; // Token is not present
    }
  
    // Send a request to the server to validate the token
    return fetch('/api/validateToken', {
      method: 'POST', // Adjust the HTTP method as needed
      headers: {
        'Authorization': jwt,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return jwt; // Token is valid
        } else {
          return false; // Token is not valid
        }
      })
      .catch((error) => {
        return false; // Error occurred, treat as if token is not valid
      });
  }
  