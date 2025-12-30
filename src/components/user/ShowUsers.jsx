import React from 'react';
import {  useNavigate } from 'react-router';
import { Link } from 'react-router';


const ShowUsers = ({ singelUsers }) => {
  let { company, name, website, id } = singelUsers;
  let navigate = useNavigate()
  let useNavigatehandle = () => {
    navigate(`/users/${id}`)
  }


  return (
    <div className='bg-amber-600 text-center p-3 rounded-2xl text-amber-50 cursor-pointer'>
      <h2>Name:{name}</h2>
      <p>Company Name: {company.name}</p>
      <p>Website: {website}</p>
      <button onClick={useNavigatehandle} className='bg-amber-50 px-2 text-[#000] cursor-pointer rounded'>More</button>
      <Link to={`/users/${id}`}> <button className='bg-amber-50 px-2 text-[#000] cursor-pointer rounded'>Details</button></Link>
    </div>
  );
};

export default ShowUsers;