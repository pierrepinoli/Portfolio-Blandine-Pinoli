"use client";

import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
          <div
            className="lg:mt-5 lg:ml-auto lg:w-2/3 animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
          >
            <h2 className="text-3xl font-semibold mb-5 text-center lg:text-left">
              Contactez-moi :
            </h2>
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
