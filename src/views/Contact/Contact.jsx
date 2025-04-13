import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qtq17vp",
      "template_88rbp1w",
      form.current,
      "ivKCp7oAgBjTaZmdx"
    ).then(
      (result) => {
        alert("Message envoyé !");
        form.current.reset();
      },
      (error) => {
        alert("Erreur lors de l'envoi : " + error.text);
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <h2 className="contact-title">Contactez-moi</h2>
        <p className="contact-subtitle">Laissez-moi un message 👇</p>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Nom" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="text" name="subject" placeholder="Sujet" className="full-width" required />
          <textarea name="message" placeholder="Votre message..." rows="6" className="full-width" required></textarea>
          <button type="submit" className="btn-submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
