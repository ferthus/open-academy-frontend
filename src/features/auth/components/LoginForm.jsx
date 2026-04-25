import { useState } from 'react'


const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Usuario</label>
        <input
          id="username"
          name="username"
          type="text"
          className="form-control"
          value={credentials.username}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          value={credentials.password}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100"></button>
    </form>     
  )
}

export default LoginForm
