import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute ({ children }) {

    const {authDetails:{isLogedIn, token}} = useContext(AuthContext)
    console.log(isLogedIn,token)  

    if(!isLogedIn){
        return <Navigate to="/login"/>
       
    }
  return children;
  }