import { useEffect, useRef } from 'react'
import './portada.css'
const Portada = ()=>{
    console.log(window.screen.height, window.screen.width)
    const dados = useRef();
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            // if(window.pageYOffset >=1000)alert('que onda capo')
            // console.log(dados.current.style.backgroundPositionY)
            dados.current.style.backgroundPositionY=-(window.pageYOffset*0.3)+"px";

        })
    }, [])
    
    return(
        <section>
            <div className='portada' ref={dados}>
                <div className='flecha' style={{top:(window.screen.height - 300)+"px"}}></div>
                <img className="image" src="./assets/imagen2.png" alt="portada"  />
            </div>
        </section>
    )
}

export default Portada;