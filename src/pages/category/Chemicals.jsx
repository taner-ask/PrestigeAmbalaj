import './Chemicals.css';

import image1 from '../../assets/categories/chemicals/image1.jpeg';
import image2 from '../../assets/categories/chemicals/image2.jpeg';
import image3 from '../../assets/categories/chemicals/image3.jpeg';

const images = [
    { src: image1, text: '' },
    { src: image2, text: '' },
    { src: image3, text: '' },
]

const Chemicals = () => {
    return (
        <div className='chemicals-container'>
            {
                images.map((image, index) => (
                    <div className='chemicals-card' key={index}>
                        <img src={image.src} alt={`image + ${index + 1}`} className='chemicals-image' />
                        <p className='chemicals-text'>{image.text}</p>
                    </div>

                )
                )
            }
        </div>
    );
};

export default Chemicals;
