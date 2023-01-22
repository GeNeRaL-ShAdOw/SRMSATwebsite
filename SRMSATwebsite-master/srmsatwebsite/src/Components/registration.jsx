import React, { useState } from 'react';
import axios from 'axios';

import './registration.css'

function Registration()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || email === '') {
          setError('* NAME AND EMAIL ARE REQUIRED!');
          return;
        };
        const data={
            Name:name,
            Email:email,
            Phone:phone 
        };
        axios.post('https://sheet.best/api/sheets/1bc95c51-3c2e-4ee1-9c0f-ef90ed782b28',data).then((response)=>{
            setError('DATA RECEIVED HAS BEEN SUBMITTED SUCCESSFULLY!');
            setName('');
            setEmail('');
            setPhone('');
        });
      };


    return (
    <div className="App2">
        <font size='+8' className='font-face-er-main-text-register'>R E G I S T R A T I O N</font>
        <font size='+2' className='font-face-er-smol-text-join'>J O I N I N G</font>
        <font size='+2' className='font-face-er-smol-text-space'>T H E</font>
        <font size='+2' className='font-face-er-smol-text-space'>F O R C E</font>
        <form onSubmit={handleSubmit} className='animationforform'>
            <label >
                <font className= 'name-form' size='+3'>NAME*:</font>
                <input type="text" name="name" placeholder='THE NEXT ARYABHATTA?'  className='input-padding' value={name} onChange={(event) => setName(event.target.value.toUpperCase())} />
            </label>
            <br/>
            <br/>
            <br/>
            <label>
                <font className = 'email-form'  size='+3'>EMAIL*:</font>
                <input type="email" name="email" placeholder='SRM MAIL ID ONLY :)' className='input-padding' value={email} onChange={(event) => setEmail(event.target.value.toUpperCase())} />
            </label>
            <br/>
            <br/>
            <br/>
            <label>
                <font  className = 'phone-form' size='+3'>PHONE NUMBER:</font>
                <input type="tel" name="phone" placeholder='NOT NECESSARY' className='input-padding' value={phone} onChange={(event) => setPhone(event.target.value.toUpperCase())} />
            </label>
            <br/>
            <br/>
            <br/>
            <button className='button1 submitbutton' placeholder='Not necessary, but would be cool.' type="submit"><font size='+2'>SUBMIT</font></button>
            <br/>
            <br/>
            {error && <p><font className='errorfont' size='+1'>{error}</font></p>}
        </form>
    </div>)
}


export default Registration;