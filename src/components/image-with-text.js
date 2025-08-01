import PropTypes from 'prop-types';
import './image-with-text.css'
function ImageWithText(props){
    return(
        <>
            <div className={`image__with__text_dpl_flex ${props.cstmClass}`}>
                <div className="image__with__text__text">
                    <h2 className="image__with__text__heading">{props.heading}</h2>
                    <div className="image__with__text__description">{props.description}</div>
                    <a className="image__with__text__button" href={props.url}>{props.linkTitle}</a>
                </div>
                <div className='image__with_text_media'>
                    <img src={props.src} alt='Hanan arain' width='100%' height='auto' />
                </div>
            </div>
        </>
    )
}
export default ImageWithText;

ImageWithText.propTypes = {
    cstmClass:PropTypes.string.isRequired
}