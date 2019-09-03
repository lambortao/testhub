import React, { useState, useEffect } from 'react'
import { Input } from 'antd'

function Login() {
  const [userName, setUserName] = useState('ss');

  return (
    <div className='login'>
      <Input 
      onChange={ (e) => setUserName( e.target.value ) }
      value={ userName } />
      { userName }
    </div>
  )
}

export default Login