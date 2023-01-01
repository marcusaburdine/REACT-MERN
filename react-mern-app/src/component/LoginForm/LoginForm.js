import { useState } from 'react'
import * as usersService from '../../utilities/users-service'
import styles from "./LoginForm.module.css"

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('')

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  async function handleSubmit(evt) {
  
    evt.preventDefault()
    try {
      const user = await usersService.login(credentials);
      setUser(user)
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <div className={styles.form}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label><h4>Email</h4></label>
        <div>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
        <label><h4>Password</h4></label>
        <div>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button className={styles.button} type="submit"><h4>LOG IN</h4></button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}














