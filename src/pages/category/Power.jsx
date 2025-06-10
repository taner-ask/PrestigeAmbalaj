import image1 from '../../assets/categories/power/image1.jpg';
import image2 from '../../assets/categories/power/image2.jpg';
import image3 from '../../assets/categories/power/image3.jpeg';
import image4 from '../../assets/categories/power/image4.jpeg';

import './Power.css';

const images = [
    { src: image1, text: 'We provide an extensive range of type-tested distribution boards for low-voltage (LV) electrical systems that are suitable for residential, commercial, and industrial properties. Each unit is manufactured in accordance with IEC standards and tested in state-of-the-art laboratories to ensure consistent and effective protection against short circuits and overload ' },
    { src: image2, text: 'Solar lead-acid batteries are the longest-used battery in solar power generation. The currently widely used solar storage batteries mainly include lead-acid maintenance-free batteries and gel batteries. These two types of lead acid battery solar are ideally suited for reliable solar power generation systems owing to their characteristics of inherent maintenance-free and less environmental impact' },

    { src: image3, text: 'PANEL WIRE CABLES. High Quality Cables for Electrical Control Panels - Easy and safe installations. XLPE/PVC POWER CABLES. Electric Power Cables for industrial installations. ARMOURED CABLES. RUBBER CABLES. LSHF SAFETY CABLES. .FIRE RESISTANT CABLES. CONTROL / SCREENED CABLES. INSTRUMENTATION CABLES.' },

    { src: image4, text: 'Step-up inverters suitable for solar PV systems Electrical capacity: from 100 kVA up to 10 MVALow voltage coils: 220, 230, 240, 380, 400, 415, 570, 600, 690, 800 volts High voltage files: up to 36 kV Frequency: 50/60 HzType of conductor used in coils: copper or aluminum Cooling type: ONAN/ONAF Installation in high terrain: 1000-2000-3000 meters difference between sea level. Oil immersed transformer design: with or without spare oil tank' }
];

const Power = () => {
    return (
        <div className="power-container">
            {images.map((image, index) => (
                <div className="power-card" key={index}>
                    <img src={image.src} alt={`Power ${index + 1}`} className="power-image" />
                    <p className="power-text">{image.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Power;
