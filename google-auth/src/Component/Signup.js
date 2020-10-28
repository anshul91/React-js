import React, { useState } from 'react'
import { fb_obj } from '../Firebase/FirebaseConn'
import firebase from 'firebase';

const Signup = () => {
    const [user,setuser] = useState({username:'', password:''});
    const [err,seterr] = useState({errmsg:''});
    
    const handleChange = (e) => {
        setuser({...user, [e.target.name]:e.target.value});
    }

    const submitHandler = () => {
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(user.username,user.password);

        promise.then(data=>{
            var err ="Welcome "+data.email;
            auth.database().ref('/user'+data.uid).set({
                email : data.email
            });
            seterr({errmsg:err});
        });
        // .catch(e => {
        //     var err = e.message; 
        // });
        // seterr({errmsg:err});
    }
    return (
        <div>
            <table>
                <thead>
                    <tr><th>Signup</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>username</td>
                        <td><input type="text" name="username" id="username" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" name="password" id="password" onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button onClick={submitHandler}>Add User</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Signup;
