import React, { useState, useContext } from 'react'
import { Input, VStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    login,
    authDetails:{isLogedIn},

  } = useContext(AuthContext)

  

  async function HandleClick () {
    try {
      let resp = await axios({
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: {
          email,
          password
        }
      })
      login(resp.data.token)
      console.log(resp?.data?.token)

      
    } catch (error) {
      console.log(error)
    }
  }

  if(isLogedIn){
    return <Navigate to='/men'/>
  }

  return (
    <div
      style={{ margin: 'auto', backgroundColor: 'lightgrey', width: '700px' }}
    >
      <div
        style={{
          border: '1px solid lightgrey',
          margin: 'auto',
          padding: '10px',
          width: '600px',
          textAlign: 'center'
        }}
      >
        <VStack spacing={5}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '200px',
              width: '70%'
            }}
          >
            <h1 style={{ fontWeight: 'bold', fontSize: '30px', color: 'teal' }}>
              LOGIN
            </h1>
          </div>
          <br />

          <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            style={{ marginLeft: '-120px' }}
            colorScheme='teal'
            variant='outline'
            onClick={HandleClick}
          >
            LOGIN
          </Button>
        </VStack>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}