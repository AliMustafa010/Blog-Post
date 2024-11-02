import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>We are a company committed to providing the best services in the industry. Our team is dedicated to delivering high-quality products and exceptional customer support.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">Services</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <address>
                            1234 Street Name, City, Country<br />
                            Phone: (123) 456-7890<br />
                            Email: <a href="mailto:info@example.com" className="text-white">info@example.com</a>
                        </address>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
