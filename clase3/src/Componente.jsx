import PropTypes from 'prop-types';
function Componente(props) {
    const userName = props.nombre
    return (
        <div>

            <div>Hola {userName}</div>
            <div>{userName}</div>

        </div>
    )
}

Componente.propTypes = {
    nombre: PropTypes.string.isRequired,
};

export default Componente