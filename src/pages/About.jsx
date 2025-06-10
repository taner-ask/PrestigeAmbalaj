import './About.css';
import image1 from '../assets/about/image.jpeg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">Our Company</h1>
                <p className="about-text">
                    Prestige Ambalaj was established in 2018 as a solution-oriented company to supply electrical transformers, UPS power supplies, energy panels, machine spare parts, packaging materials, and PET Reisin for preform factoring abroad.
                </p>
            </div>
            <img src={image1} alt="Company" className="companyImage" />
        </div>
    );
};

export default About;
