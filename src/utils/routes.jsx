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
    }).then((resp)=>{
      console.log(resp)
      console.log("here")
      if(resp.data !== 'already in database'){
        this.setState({
          message: "Signup Successful!"
        });
      }else{
        this.setState({
          message: "Error Username in Database"
        });
      }
      
    }).catch((err)=>{
      console.log(err)
      this.setState({
        message: "Error in Signup",
        error: err
      });
    });
  }else{
      return "Passwords Do Not Match"; 
    } 	
}

export function addDay(date, weight, alcohol, coffee, miles, workoutNotes, foodNotes, id, method){

    return axios({
      method: method,
      url: '/addDay',
      data: {
        'date': date,
        'weight': weight,
        'alcohol': alcohol,
        'coffee': coffee, 
        'miles' : miles, 
        'workoutNotes' : workoutNotes, 
        'foodNotes': foodNotes, 
        'id': id
      }
    }).then((response)=>{
    }).catch((error)=>{
      console.log("this is err ", error);
    }); 
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
      console.log("response ", response);
        if(response.data === "no username in database"){
          this.setState({
            loggedIn: true,
            message: "No username in database"
          })
        }else if(response.data ==="incorrect password"){
          
          this.setState({
            message: "password is incorrect"
        });
        }else{
          this.props.successLog(response.data._id, username);
          this.setState({
          loggedIn: true,
          message: "Successfully Logged In!"
        });
        }
    }).catch((error)=>{
      console.log("error ", error);
        this.setState({
          message: "an error occured"
        });
    });
}
export function getSession(){
  axios({
    method: 'get',
    url: '/session'
  }).then((response)=>{
    if(response.data){

      this.setState({
      loggedIn : true,
      id: response.data._id
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
        this.setState({
          loggedIn: false,
          message: '',
          logMessage: "Successfully Logged Out!"
        });
    }).catch((error)=>{
        this.setState({
          logMessage: "A System Error Occured"
        })
    })
}

export function getRecords(userId){
  var id = userId;
  axios({
    method: 'post',
    url: '/days',
    data: {
      'id': id
    }
    }).then((days)=>{
        this.setState({
          records: days.data,
          loggedIn: id ? true:false,
          id: id
        });
    }).catch((error) => {
      this.setState({
        logMessage: "A System Error Occured"
      });
    });  
}

export function postAlready(userId){
  
  var id = userId; 
  var date = new Date();
  var today = date.getMonth() + 1 + '/' + date.getDate() + "/" + date.getFullYear();
  axios({
    method: 'post',
    url: '/today',
    data: {
      'id': id, 
      'date': today
    }
  }).then((info)=>{
    
    if(info.data.length > 0){
      this.setState({
        posted: true
      }); 
    }else{
      this.setState({
        posted: false
      });
    }
  });    
}




  
 
  
