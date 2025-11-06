import axios from 'axios'


export default function setup() {
axios.interceptors.request.use(function(config) {
  if (config.method == 'post' || config.method == 'get') {
      const auth_token = localStorage.getItem('token');
        if(auth_token) {
          config.headers.autorizacion = `Bearer ${auth_token}`;
        } 
  }
    return config;
  }, function(err) {
    return Promise.reject(err);
  });
}