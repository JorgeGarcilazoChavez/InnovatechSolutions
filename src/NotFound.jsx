import { Link } from "react-router-dom"

function NotFoundPage(){
    return(
        <>
        <div className="min-h-screen bg-amber-100/50 font-[Helvetica] flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center">
            <h1 className="font-bold text-5xl border-r border-gray-300 p-2">innovatech soluciones</h1>
            <h1 className="font-medium text-gray-400 text-xl p-2">page not found</h1>
        </div>
        <Link to={'/'} className="rounded-full p-3 hover:shadow"><button>regresar a inicio</button></Link>
        </div>
        </>
    )
}

export default NotFoundPage