import { LoginForm } from '../../components/form/LoginForm'

function Login() {
  return (
    <>
      <div className='bg-gray-900'>
        <div className="p-10 bg-cyan-500 max-w-md border rounded-xl">
          <LoginForm/>
        </div>
      </div>
    </>
  )
}

export default Login