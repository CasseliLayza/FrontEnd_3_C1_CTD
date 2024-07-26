import PropTypes from 'prop-types';
import '../hojas-de-estilos/ImgAvatar.css'
function ImgAvatar({ imagenUrl }) {
    return (
        <div className="">
            <img
                className='contenerdor-imagen'
                src={imagenUrl}
                alt="Foto Developer" />
        </div>
    )
}



ImgAvatar.propTypes = {
    imagenUrl: PropTypes.string.isRequired,
};

export default ImgAvatar

