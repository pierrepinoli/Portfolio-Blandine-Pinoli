"use client";

import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from 'emailjs-com';


import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      // Vérifie si form.current est défini
    if (!form.current) {
        console.error("form.current is not defined");
        return;
  }
    setSendingMail(true);
    emailjs
      .sendForm(
        // Remplacez les paramètres suivants par les vôtres
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message envoyé avec succès !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Une erreur s'est produite !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:text-left text-center animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-semibold mb-5">Entrons en contact</h2>
            <p className="text-lg mb-5">
              Je suis enthousiaste à l'idée d'explorer de nouveaux projets et de relever des défis de conception.  
              Je suis ouvert à toute discussion et disponible pour des entretiens.
              N'hésitez pas à partager autant d'informations que possible afin que nous puissions tirer le meilleur parti de notre première réunion. 
              <br />
              Le formulaire de contact est à votre disposition pour me joindre.
            </p>
            <h3 className="text-lg font-semibold">Mon adresse :</h3>
            <address className="text-base">
              1298 route du Mouriol, 07100, Boulieu-lès-Annonay.
            </address>
            <h3 className="text-lg font-semibold">Téléphone :</h3>
            <p className="text-base">06 32 75 60 35</p>
            <h3 className="text-lg font-semibold">Mon adresse mail :</h3>
            <p className="text-base mb-0">
              <a className="text-white" href="mailto:pinoli.pierre@live.fr">
                pinoli.pierre@live.fr
              </a>
            </p>
          </div>
          <div className="lg:mt-5 lg:ml-auto lg:w-2/3 animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <h2 className="text-3xl font-semibold mb-5 text-center lg:text-left">Contactez-moi :</h2>
            {/* Contact Form */}
            <form
              id="contact-form"
              className="border rounded-lg p-4"
              method="post"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block font-semibold" htmlFor="name">
                    Votre nom :
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    className="form-input py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold" htmlFor="email">
                    Votre adresse mail :
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    className="form-input py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold" htmlFor="message">
                    Votre message :
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea py-2"
                    rows={4}
                    required
                  />
                </div>
                <div className="text-center lg:text-left">
                  <button
                    id="submit-btn"
                    className="btn bg-primary text-white py-2 px-6 rounded-lg"
                    type="submit"
                  >
                    {sendingMail ? (
                      <>
                        <span
                          role="status"
                          aria-hidden="true"
                          className="animate-spin inline-block h-4 w-4 mr-2"
                        ></span>
                        Envoyé ...
                      </>
                    ) : (
                      <>
                        Envoyer{" "}
                        <span className="ml-2">
                          <i className="fas fa-arrow-right" />
                        </span>
                      </>
                    )}
                  </button>
                </div>
                <ToastContainer />
              </div>
            </form>
            {/* Contact Form end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
