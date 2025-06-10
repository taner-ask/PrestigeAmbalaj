import './SparePart.css';

import image1 from '../../assets/categories/sparePart/image1.jpg';
import image2 from '../../assets/categories/sparePart/image2.jpg';
import image3 from '../../assets/categories/sparePart/image3.jpg';

const images = [
    { src: image1, text: '' },
    { src: image2, text: '' },
    { src: image3, text: '' },
]

const SparePart = () => {
    return (
        <div className='sparePart-container'>
            {
                images.map((image, index) => (
                    <div className='sparePart-card' key={index}>
                        <img src={image.src} alt={`image + ${index + 1}`} className='sparePart-image' />
                        <p className='sparePart-text'>{image.text}</p>
                    </div>

                )
                )
            }
        </div>
    );
};

export default SparePart;
