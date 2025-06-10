import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-info">
                <p><strong>Adres:</strong> 5. Organize Sanayi Bölgesi 83539 Nolu Cad<br />
                    Şehitkamil / Gaziantep / Turkey</p>

                <p><strong>Tel:</strong> +90 532 623 61 56</p>
                <p><strong>Mail:</strong> <a href="mailto:nuri.tekerekoglu@prestigeambalaj.com">nuri.tekerekoglu@prestigeambalaj.com</a></p>
            </div>
        </div>
    );
};

export default Contact;
