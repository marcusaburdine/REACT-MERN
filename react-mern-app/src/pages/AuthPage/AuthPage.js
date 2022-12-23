import LoginForm from "../../component/LoginForm/LoginForm"
import SignUpForm from "../../component/SignUpForm/SignUpForm"

export default function AuthPage ({setUser}) {
  return (
    <main>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </main>
  )
}