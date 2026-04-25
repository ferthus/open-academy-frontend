import { createContext, useState } from 'react'
import axiosInstance from '../../../shared/utils/axiosInstance'


const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (credentials) => {
    const { data } = await axiosInstance.post('/api/token/', credentials)
    sessionStorage.setItem('access_token', data.access)
    setUser(data.user)
  }

  const logout = async () => {
    await axiosInstance.post('/api/logout/')
    sessionStorage.removeItem('access_token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };
