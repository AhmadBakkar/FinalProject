import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Axios from 'axios';
import GoogleLogin from 'react-google-login'



const AdminLog = () => {

    const [usernameL, setUsername] = useState("");
    const [passwordL, setPassword] = useState("");
   
    const [loginStatus,setLoginStatus] = useState("");
  
    const history = useHistory();
  
    const responseGoogle = (response)=>{
      console.log(response);
      console.log(response.profileObj);
      
      
    }
  
    useEffect(()=>{
      setLoginStatus("")
    },[]);
  

  
    const login = () => {
      Axios.post("http://localhost:3001/login", {
        username: usernameL,
        password: passwordL
      }).then((response) => {
        console.log(usernameL,passwordL);
        if(response.data.message){
          setLoginStatus(response.data.message)
        }else{
          history.push("/allProducts");
        }
      });

      window.sessionStorage.setItem("admin",usernameL);
    }
  
    
      return (
        <div className="App">
  
          <div className="form">
            <div>
              <h1>Admin Login</h1>
              <label>Username</label>
              <input type="text" name="UserName"  onChange={(e) => { setUsername(e.target.value); }}/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="PassWord"  onChange={(e) => { setPassword(e.target.value); }} />
            </div>
            <button onClick={login}>Login</button>
            <div>

            
            <GoogleLogin 
        clientId="272938971704-benahic2rpp2u04ncqe7ea0kp26g65ir.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}   
        />
        </div>
          </div>
          
            
          <h1>{loginStatus}</h1>
        </div>
  
      );
    };
  
  
  
  
  
  export default AdminLog;