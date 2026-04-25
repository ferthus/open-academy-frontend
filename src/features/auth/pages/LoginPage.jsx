import LoginForm from "../components/LoginForm";


const LoginPage = () => {
    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="card p-4">
                <h4 className="mb-4 text-center">Iniciar sesión</h4>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}
export default LoginPage;
