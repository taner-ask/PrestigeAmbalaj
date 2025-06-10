import './Construction.css';

import image1 from '../../assets/categories/construction/image1.jpg';
import image2 from '../../assets/categories/construction/image2.jpg';
import image3 from '../../assets/categories/construction/image3.jpg';
import image4 from '../../assets/categories/construction/image4.jpg';
import image5 from '../../assets/categories/construction/image5.jpg';
import image6 from '../../assets/categories/construction/image6.jpg';

const images = [
    { src: image1, text: '' },
    { src: image2, text: '' },
    { src: image3, text: '' },
    { src: image4, text: '' },
    { src: image5, text: '' },
    { src: image6, text: '' },
]

const Construction = () => {
    return (
        <div className='construction-container'>
            {
                images.map((image, index) => (
                    <div className='construction-card' key={index}>
                        <img src={image.src} alt={`image + ${index + 1}`} className='construction-image' />
                        <p className='construction-text'>{image.text}</p>
                    </div>

                )
                )
            }
        </div>
    );
};

export default Construction;
