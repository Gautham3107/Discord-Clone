import { Button } from '@material-ui/core';
import { auth,provider } from '../firebase';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error)=> alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__img">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/1206px-Discord_logo.svg.png" 
                alt="discord" />
            </div>

            <Button onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
