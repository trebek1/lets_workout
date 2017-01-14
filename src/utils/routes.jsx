import axios from 'axios'; 

export function test(){
	return axios.get('/api');
}

export function test2(username, password, confirm){
	console.log("before requewst ", username, password, confirm);
	return axios({
  method: 'post',
  url: '/signup',
  data: {
    'username': username,
    'password': password,
    'confirm': confirm
  }
});
}

