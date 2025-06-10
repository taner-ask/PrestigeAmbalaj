import './PetReisin.css';

import image1 from '../../assets/categories/petReisin/image1.jpg';
import image2 from '../../assets/categories/petReisin/image2.png';
import image3 from '../../assets/categories/petReisin/image3.png';
import image4 from '../../assets/categories/petReisin/image4.png';

const images = [
    { src: image1, text: '' },
    { src: image2, text: '' },
    { src: image3, text: '' },
    { src: image4, text: '' },

]

const PetReisin = () => {
    return (
        <div className='petReisin-container'>
            {
                images.map((image, index) => (
                    <div className='petReisin-card' key={index}>
                        <img src={image.src} alt={`image + ${index + 1}`} className='petReisin-image' />
                        <p className='petReisin-text'>{image.text}</p>
                    </div>

                )
                )
            }
        </div>
    );
};

export default PetReisin;
