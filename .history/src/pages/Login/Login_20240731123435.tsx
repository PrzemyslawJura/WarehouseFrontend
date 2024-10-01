import { LoginForm } from '../../components/form/LoginForm'
import image from '../../assets/log-in-window.jpg'

function Login() {
  return (
    <>
    <div className="h-screen w-screen">
      <div className=" flex items-center justify-center h-screen bg-center bg-cover" style={{backgroundImage: `url(${image})`}}>
        <div className=" p-10 bg-white border rounded-xl">
          <LoginForm/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login