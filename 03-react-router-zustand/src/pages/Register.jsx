import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function RegisterPage(){
    const { login } = useAuthStore()
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        if(!name || !email || !password) return;

        login();
        navigate('/')
    }

    return (
        <section className="max-w-2xl mx-auto my-0 px-4 py-8">
            <div className="bg-[#191923cc] rounded-2xl p-8 shadow-md shadow-shadow">
                <h1 className="mb-4 text-3xl font-bold text-text-primary text-center">Registrate</h1>
                <p className="text-text-muted text-center mb-4">Crea tu nueva cuenta para aplicar a ofertas de trabajo</p>
                <form onSubmit={handleRegister} className="flex flex-col gap-8 mb-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-text-muted text-sm" htmlFor="name">Nombre Completo</label>
                        <input className="bg-input-bg rounded-lg shadow-lg shadow-shadow p-3" type="text" name="name" id="name" placeholder="Leonardo Di Caprio" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-text-muted text-sm" htmlFor="email">Correo Electronico</label>
                        <input className="bg-input-bg rounded-lg shadow-lg shadow-shadow p-3" type="email" name="email" id="email" placeholder="usuario@ejemplo.com" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-text-muted text-sm" htmlFor="password">Contraseña</label>
                        <input className="bg-input-bg rounded-lg shadow-lg shadow-shadow p-3" type="password" name="password" id="password" placeholder="Usuario1234" required />
                    </div>
                    <button 
                        className="w-full bg-primary-light text-white border-none font-semibold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer text-base whitespace-nowrap hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-[#0088e6] focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:bg-[#666] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#666] sm:w-auto"
                        type="submit"
                    >
                        Registrarse
                    </button>
                </form>
                <NavLink className="underline text-text-secondary hover:text-primary-light" to="/login">Tienes cuenta? Inicia Sesión</NavLink>
            </div>
        </section>
    )
}