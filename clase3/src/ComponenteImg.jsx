import PropTypes from 'prop-types';
function ComponenteImg({ imagenUrl }) {
    return (
        <div>
            <img src={imagenUrl} alt="Lina" />
        </div>
    )
}

ComponenteImg.propTypes = {
    imagenUrl: PropTypes.string.isRequired,
};

export default ComponenteImg