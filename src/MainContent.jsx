import image1 from './assets/image-1.jpg'
import image2 from './assets/image-2.jpg'
import image3 from './assets/image-3.jpg'
import image4 from './assets/image-4.jpg'
import Carousel from './Carousel'

import logo1 from './assets/logo-1.svg'
import logo2 from './assets/logo-2.svg'
import logo3 from './assets/logo-3.svg'
import logo4 from './assets/logo-4.svg'
import logo5 from './assets/logo-5.svg'
import logo6 from './assets/logo-6.svg'
import logo7 from './assets/logo-7.svg'
import logo8 from './assets/logo-8.svg'
import logo9 from './assets/logo-9.svg'
import logo10 from './assets/logo-10.svg'
import { useEffect, useState } from 'react'

// Arrays con imagenes, logos y de mensajes corporativos
const image = [image1, image2, image3, image4]
const logos = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10]
const imageMessage = ['nos encargamos de los numeros para dejar a tu equipo brillar', 'servicios de finanzas y bases de datos de nivel mundial', 'cuenta con nuestros servicios de consultoria y soporte para ayudar a tu negocio', 'te ayudamos a enfocarte en lo que importa']


//Componente de pagina de inicio
function MainContent(){
// useState usado para renderizar el mensaje corporativo
    const [index, setIndex] = useState(0);
// useEffect utilizado para iniciar un setInterval para cambiar el mensaje coporativo
    useEffect(()=>{
        const timer = setInterval(()=>{
        setIndex(i => (i + 1) % imageMessage.length);
        }, 12000);

        return ()=> clearInterval(timer);
    }, []);

    return(
    <div className=" flex flex-col grow font-[Helvetica] font-medium flex-1">
        <div className="m-20">
            <h2 className='font-mono font-light text-5xl mb-2'>{imageMessage[index]}</h2>
            <div> {/*Usar metodo de map para crear un array de elementos React de etiqueta de imagen por cada imagen en el image array*/}
            <Carousel>
            {image.map((i)=>(
                <img className="w-full h-full object-cover" key={i} src={i}/>
            ))}
            </Carousel>
            </div>
        </div>
        <div className="bg-indigo-800 m-20 rounded-xl p-5 inset-shadow-sm inset-shadow-indigo-400 overflow-hidden">
            <div className='flex gap-10'>
            <div>
            <h1 className="text-white text-6xl font-serif">2m+</h1>
            <p className="text-white font-sans font-light">de usuarios que usan nuestros productos</p>
            </div>

            <div>
            <h1 className="text-white text-6xl font-serif">10m+</h1>
            <p className="text-white font-sans font-light">de valor agregado a negocios</p>
            </div>

            <div>
            <h1 className="text-white text-6xl font-serif">24</h1>
            <p className="text-white font-sans font-light">horas de servicio de soporte técnico mundial</p>
            </div>

            <div className='flex gap-5 animate-pulse'> {/*Usar metodo de map para crear una etiqueta por logo*/}
                {logos.map((i)=>{
                    return <img className="h-30" key={i} src={i}/>
                })}
            </div>
            </div>        
        </div>

        <div className='flex gap-10 m-20 mt-0 justify-center items-center'>  {/*Lista de productos, usando tailwind css para animar hover scale*/}
            <div className='font-serif text-5xl p-2 border-b-5 border-gray-400'>
                nuestros productos
            </div>
            <div className='ml-auto flex gap-10 text-white'>
            <div className='bg-rose-700 outline rounded-xl p-5 inset-shadow-sm inset-shadow-rose-400 transition-transform duration-400 ease-out hover:scale-110'>
                <h2 className='font-serif text-4xl text-center'>recursos humanos</h2>
                <p className='mb-5 font-light'>nuestros productos de recursos humanos</p>
                <p className='font-serif'>innovatechEmployees</p>
                <p className='mb-5 font-light'>manejo de atraccion de talento</p>
                <p className='font-serif'>innovatechHR</p>
                <p className='mb-5 font-light'>manejo de RH de empresas</p>
            </div>

            <div className='bg-green-800 outline font-sans rounded-xl p-5 inset-shadow-sm inset-shadow-green-400 transition-transform duration-300 ease-out hover:scale-110'>
                <h2 className='font-serif text-4xl text-center'>finanzas</h2>
                <p className='mb-5 font-light'>nuestros productos financieros</p>
                <p className='font-serif'>innovatechPay</p>
                <p className='mb-5 font-light'>manejo de finanzas corporativas</p>
                <p className='font-serif'>innovatechInvest</p>
                <p className='mb-5 font-light'>manejo de portafolio corporativo</p>
            </div>

            <div className='bg-blue-800 outline rounded-xl p-5 inset-shadow-sm inset-shadow-blue-400 transition-transform duration-300 ease-out hover:scale-110'>
                <h2 className='font-serif text-4xl text-center'>bases de datos</h2>
                <p className='mb-5 font-light'>nuestros productos de bases de datos</p>
                <p className='font-serif'>innovatechDB</p>
                <p className='mb-5 font-light'>bases de datos relacionales</p>
                <p className='font-serif'>innovatechNoSQL</p>
                <p className='mb-5 font-light'>bases de datos no relacionales</p>
            </div>

            <div className='bg-orange-700 outline rounded-xl p-5 inset-shadow-sm inset-shadow-orange-400 transition-transform duration-300 ease-out hover:scale-110'>
                <h2 className='font-serif text-4xl text-center mb-5'>consultoria</h2>
                <p className='font-serif'>agenda nuestros servicios</p>
            </div>
            </div>

        </div>
    </div>
    )
};

export default MainContent