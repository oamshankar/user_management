import React, { useState } from "react";
import "./Createuser.css";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { CiPhone } from 'react-icons/ci';
import { BiLock } from 'react-icons/bi';
import image from "./image/20547283_6310507.jpg"
export default function Createuser() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate("");
    const isValidate=()=>{
        let isproceed=true;
        let errormessage='Please fill the values in ';
        if(username==null || username=='' ){
            isproceed=false;
            errormessage+='username';
        }
        if(password==null || password=='' ){
            isproceed=false;
            errormessage+=' password';
        }
        if(email==null || email=='' ){
            isproceed=false;
            errormessage+=' email';
        }
        if(mobile==null || mobile=='' ){
            isproceed=false;
            errormessage+=' phone number';
        }
        if(!isproceed){
            toast.warning(errormessage);
        }else{
            if( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){

            }
            else{
                isproceed=false;
                toast.warning("Please enter valid email")
            }
        }
        return isproceed;
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        let obj = {username,email,mobile,password};
        console.log(obj);
        if (isValidate()){
            fetch("http://localhost:3000/posts",{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(obj)
            })
            .then(data=>{
                toast.success("Registered Successfully",{
                    position:toast.POSITION.TOP_RIGHT,
                });
                Navigate('/')
                console.log("Registered Successfully");
            })
            .catch((err) => {
                toast.error("Failed:"+err.message);
                console.error("Failed: "+err.message);
            });
        }
    }
    return (
        <main className="main">
            <div className="login-box">

                <div className="login-1">
                    <form onSubmit={handlesubmit}>
                    <div className="title">
                        <b className="heading">Create New Account</b>
                        <p>We are glad to see you here with us </p>
                    </div>
                    <div className="box">
                        <span><AiOutlineUser /></span><input value={username} onChange={e => setUsername(e.target.value)} className="box-1" type="text" placeholder='Username' />
                        <span><MdOutlineEmail /></span><input value={email} onChange={e => setEmail(e.target.value)} className="box-1" type="email" placeholder='Email' />
                    </div>
                    <div className="box">
                        <span><CiPhone /></span><input value={mobile} onChange={e => setMobile(e.target.value)} className="box-1" type="text" placeholder='Phone Number' />
                        <span><BiLock /></span><input value={password} onChange={e => setPassword(e.target.value)} className="box-1" type="password" placeholder='Password' />
                    </div>
                    <button type="submit" className="next box-1">CREATE</button>
                    </form>
                    
                </div>
                <div className="login-2">
                    <img src={image} />
                </div>
            </div>
        </main>
    )
}