import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

//Obsoleto desde React 19
// GifItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
// }