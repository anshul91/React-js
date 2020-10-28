import React, { useState } from 'react'
import { fb_obj } from '../Firebase/FirebaseConn'
import firebase from 'firebase';

const Login = () => {
    const [user, setuser] = useState({username:'', password:''})
    const [err, seterr] = useState({errmsg : ''});
    const submitHandler = () => {
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(user.username,user.password);

        promise.then(dat=>{
            seterr({errmsg:"Logged in successfully!"+dat.user.email});
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
        })
        .catch(e => {
            var err = e.message;
            seterr({errmsg:err})
        })
    }
    const signup = () => {
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(user.username,user.password);
        var err;
        promise.then(data=>{
            let email = data.user.email;
            err ="Welcome "+email;
            firebase.database().ref('user/'+data.user.uid).set({
                email : data.user.email
            });
            seterr({errmsg:err});
            console.log(err);
        }).catch(e=>{
            seterr({errmsg:e.message});
        });
        seterr({errmsg:err});

    }

    const logout = () => {
        firebase.auth().signOut();
        console.log("inside logout");
        var lout = document.getElementById('logout');
        lout.classList.add('hide');
    }

    const handleChange = (e) => {
        setuser({...user, [e.target.name]:e.target.value});
        console.log(user);
    }
    return (
        <div>
            {err.errmsg}
            <table border="1">
                <thead>

                <tr>
                    <th colSpan="2">Login</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Username</td>
                    <td><input type="text" name="username" id="username" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="text" name="password" id="password" onChange={handleChange} /></td>
                </tr>
                
                <tr>
                    <td colSpan="2">
                        <button onClick={submitHandler}>Login</button>
                        <button onClick={signup}>Signup</button>
                        <button id="logout" onClick={logout} className="hide">Logout</button>
                    </td>
                </tr>
                </tbody>
            </table> 
        </div>
    )
}

export default Login;
