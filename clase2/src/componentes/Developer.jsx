import PropTypes from 'prop-types';
import '../hojas-de-estilos/Developer.css'


function Developer(props) {
    const programa = 'Full stak developer'
    return (
        <div>
            <div className='saludo-decripcion' >
                <h2>Hola {props.nombre}</h2>
                <h3>{props.empresa}</h3>
                <h4>{programa}</h4>

            </div>
            <div className='contenedor-stak'>
                <span>{props.skill1}</span>
                <span>{props.skill2}</span>
                <span>{props.skill3}</span>
                <span>{props.skill4}</span>
            </div>

        </div>
    )
}

Developer.propTypes = {
    nombre: PropTypes.string.isRequired,
    empresa: PropTypes.string.isRequired,
    skill1: PropTypes.string.isRequired,
    skill2: PropTypes.string.isRequired,
    skill3: PropTypes.string.isRequired,
    skill4: PropTypes.string.isRequired,
};

export default Developer


