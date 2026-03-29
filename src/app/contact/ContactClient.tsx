"use client";

import { useState } from "react";
import { MapPin, Clock, Mail, Phone, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const INPUT_CLASS =
  "rounded-xl border border-gray-200 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-or/50 focus:border-or transition bg-white text-bleu-dark placeholder:text-gray-400";

const LABEL_CLASS = "block text-sm font-medium text-bleu-dark mb-1";

export function ContactClient() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-bleu-dark py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.h1
            className="font-playfair text-4xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nous contacter
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Une question, une visite, une inscription&nbsp;? On est la.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16">
        {/* Left — Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-playfair text-2xl text-bleu mb-6">
            Envoyez-nous un message
          </h2>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="flex items-center gap-3 rounded-2xl bg-green-50 border border-green-200 px-6 py-5 text-green-700"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="w-6 h-6 shrink-0" />
                <span className="font-medium">
                  Merci&nbsp;! Nous vous repondrons sous 24h.
                </span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Nom */}
                <div>
                  <label htmlFor="nom" className={LABEL_CLASS}>
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    type="text"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Marie Dupont"
                    className={INPUT_CLASS}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={LABEL_CLASS}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marie@exemple.fr"
                    className={INPUT_CLASS}
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="telephone" className={LABEL_CLASS}>
                    Telephone{" "}
                    <span className="text-gray-400 font-normal">(optionnel)</span>
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className={INPUT_CLASS}
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label htmlFor="sujet" className={LABEL_CLASS}>
                    Sujet
                  </label>
                  <select
                    id="sujet"
                    required
                    value={sujet}
                    onChange={(e) => setSujet(e.target.value)}
                    className={INPUT_CLASS}
                  >
                    <option value="" disabled>
                      Choisissez un sujet
                    </option>
                    <option value="visite">Visiter les espaces</option>
                    <option value="formation">S'inscrire a une formation</option>
                    <option value="location">Location de salle</option>
                    <option value="adhesion">Adhesion au Collectif</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={LABEL_CLASS}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Dites-nous en plus..."
                    className={INPUT_CLASS}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-or text-bleu-dark rounded-xl py-3.5 font-semibold hover:-translate-y-0.5 transition-all hover:shadow-[0_8px_30px_rgba(255,202,0,0.4)]"
                >
                  Envoyer le message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right — Info pratiques */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="font-playfair text-2xl text-bleu mb-6">
            Informations pratiques
          </h2>

          {/* Cards */}
          <div className="space-y-4 mb-8">
            <div className="rounded-2xl bg-fond p-5 flex gap-4 items-start">
              <MapPin className="w-5 h-5 text-or shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-bleu-dark text-sm">Adresse</p>
                <p className="text-gris text-sm mt-0.5">
                  12 rue de la Forge, 68600 Andolsheim (Haut-Rhin)
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-fond p-5 flex gap-4 items-start">
              <Clock className="w-5 h-5 text-or shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-bleu-dark text-sm">Horaires</p>
                <p className="text-gris text-sm mt-0.5">
                  Lun&ndash;Ven&nbsp;: 8h&ndash;19h &middot; Sam&nbsp;: sur rendez-vous
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-fond p-5 flex gap-4 items-start">
              <Mail className="w-5 h-5 text-or shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-bleu-dark text-sm">Email</p>
                <a
                  href="mailto:contact@collectiforducommun.org"
                  className="text-gris text-sm mt-0.5 hover:text-bleu transition-colors block"
                >
                  contact@collectiforducommun.org
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-fond p-5 flex gap-4 items-start">
              <Phone className="w-5 h-5 text-or shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-bleu-dark text-sm">Telephone</p>
                <a
                  href="tel:+33389000000"
                  className="text-gris text-sm mt-0.5 hover:text-bleu transition-colors block"
                >
                  03 89 XX XX XX
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2672.0!2d7.378!3d48.042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917b1f7e7b4b1f%3A0x1!2s12+Rue+de+la+Forge%2C+68600+Andolsheim!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du Collectif Or du Commun"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
