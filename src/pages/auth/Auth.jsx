import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../components/context/AppContext";


const Auth = () => {
    const [ login, setLogin ] = useState('');
    const [ pass, setPass ] = useState('');
    const { setUser, useData } = useAppContext();
    const useInfo = useData;

    const navigate = useNavigate(); 

    const signIn = () => {
        if(login === useInfo.login && pass === useInfo.pass) {
            const user = {
                name: 'Admin',
                login,
                pass,
            };
            setUser(user);
            navigate('/');
        } else {
            alert("Incorect Data Login or Password");
        };
    };
   
  return (       
    <div className="container"  style={{width: 300, margin: "0 auto", alignItems: "center"}}>

     <div>
        <input onChange={(e) => {
               setLogin(e.target.value)
            }} value={login}
               type="text"
               placeholder='email'/>
    </div>

     <div>
        <input
               onChange={(e) => {
               setPass(e.target.value)}} 
               value={pass} 
               type="password" 
               placeholder='password'/>
    </div>

    <button className="btn btn-primary" onClick={signIn}>Continue</button>

    </div>
  );
};

export default Auth;

