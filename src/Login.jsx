import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react";

// useState para simular capturar informacion de usuario en React
function LoginForm(){
    const [formData, setFormData] = useState({
        correo: '',
        contrasena: '',
    });


// eventHandler para onChange, capturando cada cambio del input, usando prev, el objeto previo, y actualizando la propiedad

    const manejarCambio = (e) =>{
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }));
    }

    // eventHandler para onSubmit, se imprime a la consola como simulacion de envio de datos.
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
    }
    return(
        <div>
            <div className="flex-col text-center items-center p-20">
            <h1 className="mb-10 text-6xl font-serif">login</h1>
            <form onSubmit={manejarEnvio} className="flex flex-col gap-5 items-center bg-indigo-800 rounded-xl p-10 inset-shadow-sm inset-shadow-indigo-400">
                <input required type="email" name="correo" onChange={manejarCambio} className="bg-indigo-900 rounded-xl inset-shadow-sm inset-shadow-indigo-950 p-1 text-indigo-200" placeholder="Email"></input>
                <input required type="password" name="contrasena" onChange={manejarCambio} className="bg-indigo-900 rounded-xl inset-shadow-sm inset-shadow-indigo-950 p-1 text-indigo-200" placeholder="Contraseña"></input>
                <button className="text-white rounded-full p-2 inset-shadow-sm inset-shadow-indigo-400 bg-indigo-800 hover:bg-indigo-950" type="submit">enviar</button>
            </form>
            </div>
        </div>
    )
}

function Login(){
    return (
        <div className="min-h-screen flex flex-col bg-amber-100/50">
      <Header/>
      <main className='flex-1'>
      <LoginForm/>
      </main>
      <Footer/>
    </div>
    )
};

export default Login