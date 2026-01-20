import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
// useState para capturar datos en un objeto formData
function RegistroForm(){
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contrasena: '',
        confirmarContrasena: ''
    });

    // useState para renderizar mensaje de contrasena cuando se selecciona el input de Contrasena
    const [focus, setFocus] = useState(false);

    // condiciones de password length y matching passwords
    const passwordLength = formData.contrasena !== '' && formData.contrasena.length >= 8;
    const passwordMatch = formData.contrasena !== '' && formData.contrasena === formData.confirmarContrasena;
    
// Actualizar el objeto de formData, old es el objeto viejo y se actualiza con cada input box
    function handleEventChange(e){
        const { name, value} = e.target
        setFormData(old=>({
            ...old,
            [name]: value
        }))
    }

    // onSubmit funcion que revisa si ambas condiciones son verdaderas para poder console.log la informacion registrada.
    function handleSubmission(e){
        e.preventDefault()
        if(!passwordMatch || !passwordLength){
            return;
        }
        console.log(formData)
    }

    return(
        <div className=" text-center p-20">
        <h1 className="mb-10 text-6xl font-serif">registro</h1>
        <form onSubmit={handleSubmission} className="flex flex-col gap-5 items-center bg-indigo-800 rounded-xl p-10 inset-shadow-sm inset-shadow-indigo-400">
            <input required onChange={handleEventChange} className="bg-indigo-900 rounded-xl inset-shadow-sm inset-shadow-indigo-950 p-1 text-indigo-200" name="nombre" placeholder="Nombre"></input>
            <input required onChange={handleEventChange} className="bg-indigo-900 rounded-xl inset-shadow-sm inset-shadow-indigo-950 p-1 text-indigo-200"name="apellido" placeholder="Apellido"></input>
            <input required type="email" onChange={handleEventChange} className="bg-indigo-900 rounded-xl inset-shadow-sm inset-shadow-indigo-950 p-1 text-indigo-200" name="correo" placeholder="Email"></input>
            <input required type="password" onFocus={()=>{setFocus(true)}} onBlur={()=> setFocus(false)} onChange={handleEventChange} className="bg-indigo-900 rounded-xl inset-shadow-sm inset-shadow-indigo-950 p-1 text-indigo-200" name="contrasena" placeholder="Contraseña"></input>
            {focus && <p className="text-red-500 text-sm">La contraseña tiene que tener mas de 8 caracteres</p>}
            <input required type="password" onChange={handleEventChange} className="bg-indigo-900 rounded-xl inset-shadow-sm inset-shadow-indigo-950 p-1 text-indigo-200" name="confirmarContrasena" placeholder="Confirmar Contraseña"></input>
            {formData.confirmarContrasena !== '' && !passwordMatch && <p className="text-red-500 text-sm">Las contraseñas no coinciden</p>}
            {formData.contrasena !== '' && !passwordLength && <p className="text-red-500 text-sm">Las contraseña es menor de 8</p>}
            <button className="text-white rounded-full p-2 inset-shadow-sm inset-shadow-indigo-400 bg-indigo-800 hover:bg-indigo-950" type="submit"> registrar </button>
        </form>
        </div>
    )
};

function Registro(){
    return (
        <div className="min-h-screen flex flex-col bg-amber-100/50">
      <Header/>
      <main className='flex-1'>
      <RegistroForm/>
      </main>
      <Footer/>
    </div>
    )
};

export default Registro