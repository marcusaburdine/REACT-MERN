import LoginForm from "../../component/LoginForm/LoginForm"
import SignUpForm from "../../component/SignUpForm/SignUpForm"
import "../../App.css"
import style from "./AuthPage.module.css"

export default function AuthPage({ setUser }) {

  return (
    <>
      <div className="auth-container">
        <div className={style.header}>
          <h1>LOG IN</h1>
          <LoginForm setUser={setUser} />
          <h1>SIGN UP</h1>
          <SignUpForm setUser={setUser} />
        </div>
      </div>
    </>
  )
}