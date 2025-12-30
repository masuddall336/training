import React, { useState } from 'react';
import useCustomHook from './customHook';

const From = () => {
  let fromHandle = (e) => {
    e.preventDefault();
    // console.log('submit the form');
    console.log(e.target.name.value);
  }
  // let formAction = (getDatas) => {
  //   console.log(getDatas.get('name'));
  //   console.log(getDatas.get('email'));
  //   console.log(getDatas.get('password'));
  // }
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');

  let onChane = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6 || password.length > 6) {
      setError('Name must be getter then six caracter');
    } else {
      setError('')
    }
  }

  let stoppevent = (e) => {
    e.preventDefault();
    console.log("Click");
    console.log(e.target.password.value);
  }
  let [pass, setPass] = useState('');
  let setPassInState = (e) => {
    setPass(e.target.value);
    console.log(e.target.value);

  }





  // Custom hook
  let cutophookStopPrevent = (e) => {
    e.preventDefault();
    console.log("Submited Custom Hook Form");
    console.log(e.target.name.value);
    console.log(e.target.password.value);

  }
  let [value, setValue] = useCustomHook('123')
  let [passwo, setpasswo] = useCustomHook('123456')

  return (
    <>
      <div className='w-4/12 mx-auto border-1 border-amber-700 rounded p-5 mt-5 mb-5'>
        <h2 className='text-center pb-3 text-xl font-bold'>Email Form</h2>
        <form onSubmit={fromHandle} className="flex flex-col gap-2" >
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' type="text" name="name" placeholder='Name' />
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' type="email" name="email" placeholder='Email' />
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' type="password" name="password" onChange={onChane} defaultValue={password} placeholder='Password' />
          <input className='bg-amber-700 text-amber-50 font-bold py-1 rounded cursor-pointer' type="submit" name="" value='Submit' />
        </form>
        <p>{error}</p>
      </div>


      <div className='w-4/12 mx-auto border-1 border-amber-700 rounded p-5 mt-5 mb-5'>
        <h2 className='text-center pb-3 text-xl font-bold'>Email Form</h2>
        <form onSubmit={stoppevent} className="flex flex-col gap-2" >
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' type="text" name="name" placeholder='Name' />
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' type="email" name="email" placeholder='Email' />
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' onChange={setPassInState} defaultValue={pass} type="password" name="password" placeholder='Password' />
          <input className='bg-amber-700 text-amber-50 font-bold py-1 rounded cursor-pointer' type="submit" name="" value='Submit' />
        </form>
        <p>{error}</p>
      </div>


      <div className='w-4/12 mx-auto border-1 border-amber-700 rounded p-5 mt-5 mb-5'>
        <h2 className='text-center pb-3 text-xl font-bold'>Email Form</h2>
        <form onSubmit={cutophookStopPrevent} className="flex flex-col gap-2" >
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' type="text" name="name" placeholder='Name' onChange={setValue} defaultValue={value} />
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' type="email" name="email" placeholder='Email' />
          <input className='bg-amber-700 outline-none p-1 rounded text-amber-50' type="password" name="password" placeholder='Password' onChange={setpasswo} defaultValue={passwo} />
          <input className='bg-amber-700 text-amber-50 font-bold py-1 rounded cursor-pointer' type="submit" name="" value='Submit' />
        </form>
        <p>{error}</p>
      </div>

    </>
  );
};

export default From;