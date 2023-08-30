
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faPaypal } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1 className="logo-text">DOGWOAH</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/productos" className="footer-link">Produtos</a></li>
            <li><a href="/Contact" className="footer-link">Contato</a></li>
          </ul>
        </div>
        <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a> 
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="far fa-envelope"></i></a>
       </div>

      </div>
      <div className="footer-payment">
        <p>Formas de pagamento</p>
        <div className="payment-icons">
          <FontAwesomeIcon icon={faCcVisa} className="payment-icon" />
          <FontAwesomeIcon icon={faCcMastercard} className="payment-icon" />
          <FontAwesomeIcon icon={faPaypal} className="payment-icon" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DOGWOAH.</p>
      </div>
    </footer>
  );
};
