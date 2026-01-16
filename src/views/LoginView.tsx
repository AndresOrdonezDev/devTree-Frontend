import { Link } from 'react-router-dom'
export default function LoginView() {
    return (
        <>
           <h1 className="text-white text-3xl font-bold">Iniciar Sesión</h1>
            <nav className="mt-10">
                <Link
                    className="text-white text-center text-lg block"
                    to="/auth/register"
                >no tienes una cuenta? Crear Cuenta</Link>
            </nav>
        </>
    )
}