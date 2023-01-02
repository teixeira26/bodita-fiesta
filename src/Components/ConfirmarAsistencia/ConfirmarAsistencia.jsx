import Button from "../Buttons/Button";
import './confirmarAsistencia.css'

const ConfirmarAsistencia =()=>{
    return(
        <section>
            <div className="asistenciaContainer">
            <h4>CONFIRMACIÓN DE ASISTENCIA</h4>
            <p>Esperamos que seas parte de este gran día para nosotros.</p>
                <p>Al finalizar la ceremonia realizaremos un compartir comunitário, te invitamos que te sumes y colabores con algo rico.</p>
            <Button template='verde' texto='CONFIRMAR ASISTENCIA' url='https://docs.google.com/forms/d/e/1FAIpQLSfRrAI9JJBuhBUM1KKov3qNDilaXA6yHW_mEdLRRtVFLPb6ag/viewform?usp=sf_link'></Button>
            </div>
        </section>
    )
}

export default ConfirmarAsistencia;
