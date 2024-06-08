import { createContext, useState } from 'react'
// 1 - create the context
export const AuthContext = createContext()
// 2 - create the provider

export function AuthContextProvider ({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isLogedIn: false,
    token: null
  })

  const login = (token) => {
    setAuthDetails({
      isLogedIn: true,
      token: token
    })
   
  }
  const logout = () => {
    setAuthDetails({
      isLogedIn: false,
      token: null
    })

   
  }

  return (
    <AuthContext.Provider
      value={{  login, logout, authDetails }}
    >
      {children}
    </AuthContext.Provider>
  )
}
