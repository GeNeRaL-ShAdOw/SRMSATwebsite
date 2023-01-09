import React, { useState } from 'react';

import './registration.css'

function Registration()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || email === '') {
          setError('* NAME AND EMAIL ARE REQUIRED!');
          return;
        }
        // Perform API call or other logic here
      };
    return (
    <div className="App2">
        <font size='+8' className='font-face-er-main-text-register'>R E G I S T R A T I O N</font>
        <font size='+2' className='font-face-er-smol-text-join'>J O I N I N G</font>
        <font size='+2' className='font-face-er-smol-text-space'>T H E</font>
        <font size='+2' className='font-face-er-smol-text-space'>F O R C E</font>
        <form onSubmit={handleSubmit}>
            <label >
                <font size='+3'>NAME*:</font>
                <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <br/>
            <br/>
            <br/>
            <label>
                <font size='+3'>EMAIL*:</font>
                <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br/>
            <br/>
            <br/>
            {error && <p><font className='errorfont' size='+1'>{error}</font></p>}
            <br/>
            <br/>
            <button className='button1 submitbutton' type="submit"><font size='+2'>SUBMIT</font></button>
        </form>
    </div>)
}

export default Registration;