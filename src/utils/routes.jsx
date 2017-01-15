import axios from 'axios'; 

export function test(){
	return axios.get('/api');
}

export function signup(username, password, confirm){

  if(password === confirm){
    return axios({
      method: 'post',
      url: '/signup',
      data: {
        'username': username,
        'password': password,
        'confirm': confirm
      }
    }); 
  }else{
      return "Passwords Do Not Match"; 
    } 	
}

export function login(username, password){
  
    return axios({
      method: 'post',
      url: '/login',
      data: {
        'username': username,
        'password': password
      }
    }); 
  
}
