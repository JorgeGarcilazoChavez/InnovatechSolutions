import { useState } from "react"

// Componente de carousel, en este componente cambiamos el nombre del array a slides y utilizamos el array creado en MainContent
//Usamos useState para renderizar cada imagen con el indice de current.
function Carousel({ children: slides }){
    const [current, setCurr] = useState(0)
    //Funciones para calcular el indice a base de onClick de los botones. Si la imagen es la primera en el array, cicla hacia el final del array.
    const prev = () => {
        setCurr(current => current === 0 ? slides.length - 1 : current - 1)
    }

    //Misma funcion que prev, pero si la imagen es la ultima en el arreglo, se cicla hacia la primera
    const next = () => {
        setCurr(current => current === slides.length - 1 ? 0 : current + 1)
    }



    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${current * 100}%)`}}>{slides}</div> {/* transform  y translateX usados para simular un slide */}

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev}>
                    <i className='text-white text-6xl bx  bxs-caret-big-left'></i> 
                </button>

                <button onClick={next}>
                    <i className='text-white text-6xl bx  bxs-caret-big-right'></i> 
                </button>
            </div>
        </div>
    )
}

export default Carousel