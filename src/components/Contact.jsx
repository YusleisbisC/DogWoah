import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <h2>Contato</h2>
        <p>
          Estamos aqui para ajudá-lo! Você pode entrar em contato conosco das
          seguintes maneiras:
        </p>

        <h3>Informação de contato:</h3>
        <ul>
          <li>Teléfono: +1 123-456-7890</li>
          <li>Email: info@example.com</li>
          <li>Endereço: Rua Principal, 123, Cidade-sp</li>
        </ul>

        <h3>Horário de atenção:</h3>
        <p>
          Nossa equipe está disponível de segunda a sexta, das 9h00 às 17h00. às
          17h00
        </p>

        <div className="contact-form">
          <h3>Seria ótimo saber sua opinião. Envie-nos uma mensagem</h3>

          <form
            method="POST"
            action="https://formspree.io/f/xbjvylak"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
