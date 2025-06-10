import './Home.css';

import image1 from '../assets/home/image1.jpg';
import image2 from '../assets/home/image2.jpeg';
import image3 from '../assets/home/image3.jpeg';
import image4 from '../assets/home/image4.jpeg';
import image5 from '../assets/home/image5.JPG';
import image6 from '../assets/home/image6.jpg';
import image7 from '../assets/home/image7.JPG';
import image8 from '../assets/home/image8.png';
import image9 from '../assets/home/image9.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <h1 className="home-title">Welcome!</h1>
                <p className="home-text">
                    Welcome to the official website of Prestige Packaging.
                    <br />
                    We offer the best quality products at the most affordable prices.
                </p>
            </div>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} className="home-image" />
                ))}
            </div>
        </div>
    );
};

export default Home;
