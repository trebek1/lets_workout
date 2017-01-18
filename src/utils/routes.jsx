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
          logMessage: "Successfully Logged Out!"
        });
    }).catch((error)=>{
        this.setState({
          logMessage: "A System Error Occured"
        })
    })
}

export function getRecordsAndSession(){
  
  axios.get('/session').then((data)=>{
    var id = data.data._id
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
          })
      })  
  }).catch(error => console.log(error));
}

export function getSessionAndPostCheck(){
  
  axios.get('/session').then((data)=>{
    if(data){
      var id = data.data._id;
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
            posted: true,
            loggedIn: true,
            id: id
          }); 
        }else{
          this.setState({
            posted: false,
            loggedIn: true,
            id: id
          });
        }
      });    
    }else{
      this.setState({
        loggedIn: false
      });
    }
    
  }).catch(error => console.log(error));
}




  
 
  
