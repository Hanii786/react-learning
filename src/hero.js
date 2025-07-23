import Banner from './media-gallery/t-shirt/image8.jpg';
import './hero.css'

export default function Hero(){
    return(
        <>
            <div className='hero__banner_main'>
                <div className='hero__media'>
                    <img src={Banner} alt='Banner'/>
                </div>
                <div className='hero__text'>
                    <h2 className='hero__heading'>
                        Welcome To React Learning Series
                    </h2>
                    <div className='hero__content'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        </>
    )
}