import { useAuthStore } from '../store/authStore'

export default function ProfilePage() {
  const { logout } = useAuthStore()

  return (
    <section className='max-w-7xl mx-auto my-0 px-4 py-8'>
      <div className="bg-[#191923cc] rounded-2xl p-8 shadow-md shadow-shadow">
        <div className="text-center pb-8 border-b border-solid border-border mb-8">
          <div className="size-30 mt-0 mx-auto mb-4 bg-linear-[135deg,#667eea_0%,#764ba2_100%] rounded-full flex items-center justify-center text-white">
            <svg
                className='size-16'
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-2">Usuario Demo</h1>
          <p className="text-text-muted text-base">usuario@ejemplo.com</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Información Personal</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-text-muted text-sm font-medium">Nombre completo</span>
              <span className="text-text-primary text-base">Usuario Demo</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-text-muted text-sm font-medium">Email</span>
              <span className="text-text-primary text-base">usuario@ejemplo.com</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-text-muted text-sm font-medium">Teléfono</span>
              <span className="text-text-primary text-base">+34 123 456 789</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-text-muted text-sm font-medium">Ubicación</span>
              <span className="text-text-primary text-base">Madrid, España</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Experiencia</h2>
          <div className="mb-6 pb-6 border-b border-solid border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Desarrollador Frontend</h3>
            <p className="text-text-secondary mb-2">Empresa XYZ • 2021 - Presente</p>
            <p className="text-text-muted">
              Desarrollo de aplicaciones web con React, TypeScript y Next.js
            </p>
          </div>
          <div className="mb-6 pb-6 border-b border-solid border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Desarrollador Junior</h3>
            <p className="text-text-secondary mb-2">Startup ABC • 2019 - 2021</p>
            <p className="text-text-muted">
              Mantenimiento y desarrollo de features en aplicaciones legacy
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[rgba(9,159,255,0.1)] border border-solid border-[rgba(9,159,255,0.3)] text-primary-light py-2 px-4 text-sm font-medium">React</span>
            <span className="bg-[rgba(9,159,255,0.1)] border border-solid border-[rgba(9,159,255,0.3)] text-primary-light py-2 px-4 text-sm font-medium">TypeScript</span>
            <span className="bg-[rgba(9,159,255,0.1)] border border-solid border-[rgba(9,159,255,0.3)] text-primary-light py-2 px-4 text-sm font-medium">Node.js</span>
            <span className="bg-[rgba(9,159,255,0.1)] border border-solid border-[rgba(9,159,255,0.3)] text-primary-light py-2 px-4 text-sm font-medium">CSS</span>
            <span className="bg-[rgba(9,159,255,0.1)] border border-solid border-[rgba(9,159,255,0.3)] text-primary-light py-2 px-4 text-sm font-medium">Git</span>
            <span className="bg-[rgba(9,159,255,0.1)] border border-solid border-[rgba(9,159,255,0.3)] text-primary-light py-2 px-4 text-sm font-medium">Next.js</span>
            <span className="bg-[rgba(9,159,255,0.1)] border border-solid border-[rgba(9,159,255,0.3)] text-primary-light py-2 px-4 text-sm font-medium">REST APIs</span>
            <span className="bg-[rgba(9,159,255,0.1)] border border-solid border-[rgba(9,159,255,0.3)] text-primary-light py-2 px-4 text-sm font-medium">SQL</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-solid border-border sm:flex-row">
          <button className="flex-1 bg-primary-light text-white border-none font-semibold p-3 rounded-lg text-base cursor-pointer transition-colors duration-200 hover:bg-[#0088e6]">
            Editar Perfil
          </button>
          <button className="flex-1 bg-[rgba(255,255,255,0.5)] text-primary border border-solid border-border font-semibold p-3 rounded-lg text-base cursor-pointer transition-colors duration-200 hover:bg-border hover:border-[rgba(255,255,255,0.2)]" onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </section>
  )
}