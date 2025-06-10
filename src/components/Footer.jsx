import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section company">
                    <h4>Prestige Ambalaj</h4>
                    <p>Your trusted source for quality in packaging.</p>
                </div>

                <div className="footer-section contact">
                    <h5>Contact</h5>
                    <p>📍 5. Organize Sanayi Bölgesi 83539 Nolu Cad.<br />Şehitkamil / Gaziantep / Turkey</p>
                    <p>📞 +90 532 623 61 56</p>
                    <p>📧 <a href="mailto:nuri.tekerekoglu@prestigeambalaj.com">nuri.tekerekoglu@prestigeambalaj.com</a></p>
                </div>

                <div className="footer-section copyright">
                    <p>&copy; {new Date().getFullYear()} Prestige Ambalaj</p>
                    <p>All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
