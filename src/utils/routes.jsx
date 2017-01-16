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
    }).then((response)=>{
      console.log("sucessfully logged in response")
        this.setState({
          loggedIn: true,
          logMessage: "Successfully Logged In!"
        });
    }).catch((error)=>{
        this.setState({
          logMessage: "Username and Password not Valid"
        })
    })
}
export function getSession(){
  console.log("is this running? ")
  axios({
    method: 'get',
    url: '/session'
  }).then((response)=>{
    console.log("response ", response);
    if(response.data){
      this.setState({
      loggedIn : true
    });  
    }
  
    return response; 
  }).catch((error)=>{
    console.log('error', error)
    return error; 
  }) 
}

export function logout(){
  
    return axios({
      method: 'get',
      url: '/logout'
      
    }).then((response)=>{
      console.log("success for logout route");
        this.setState({
          loggedIn: false,
          logMessage: "Successfully Logged Out!"
        });
    }).catch((error)=>{
      console.log("fail for logout route")
        this.setState({
          logMessage: "A System Error Occured"
        })
    })
}

  
 
  
