import { Link } from "react-router-dom"

function Header(){
    return (
        <header className="bg-black flex items-center p-4 font-sans">
            <Link to={'/'}><h1 className="text-white text-5xl border-r border-gray-600 font-serif p-2">innovatech soluciones</h1></Link>
            <h1 className="font-medium font-mono text-gray-600 text-xl p-2">soluciones para todos</h1>
            <div className="ml-auto flex gap-10">
                <button className="p-2 text-white"><Link to={'/login'}>Login</Link></button>
                <button className="text-white rounded-full p-2 inset-shadow-sm inset-shadow-indigo-400 bg-indigo-800 hover:bg-indigo-950"><Link to={'/registro'}>Registrar</Link></button>
            </div>
        </header>
    )
}

export default Header