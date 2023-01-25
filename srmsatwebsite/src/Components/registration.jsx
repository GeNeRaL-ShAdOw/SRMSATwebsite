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
                <font><p>NAME*:</p></font>
                <input type="text" name="name" placeholder='ARYABHATTA?' className='input-padding' value={name} onChange={(event) => setName(event.target.value.toUpperCase())} />
            </label>
            <br/>
            <br/>
            <br/>
            <label>
                <font><p>EMAIL*:</p></font>
                <input type="email" name="email" placeholder='SRM MAIL ID ONLY PLEASE.' className='input-padding' value={email} onChange={(event) => setEmail(event.target.value.toUpperCase())} />
            </label>
            <br/>
            <br/>
            <br/>
            <label>
                <font><p>PHONE NUMBER:</p></font>
                <input type="tel" name="phone" placeholder='PREFERABLE' className='input-padding' value={phone} onChange={(event) => setPhone(event.target.value.toUpperCase())} />
            </label>
            <br/>
            <br/>
            <br/>
            <button className='button1 submitbutton' type="submit"><font><p>SUBMIT</p></font></button>
            <br/>
            <br/>
            {error && <p><font className='errorfont'>{error}</font></p>}
        </form>
    </div>)
}

export default Registration;