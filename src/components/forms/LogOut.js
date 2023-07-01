import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const LogOut = (props) => {
  const navigate = useNavigate();
  useEffect(()=> {
    sessionStorage.clear();
    props.sendLogStatus(false);
    navigate('/');
  })
  return (
    <div>LogOut</div>
  )
}
