import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  User,
  Phone,
  Calendar,
  Clock,
  Users,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  MapPin,
} from "lucide-react";

// Simulation des translations
type Translation = {
  reservation: {
    title: string;
    description: string;
    successMessage: string;
    errorMessage: string;
    form: {
      name: string;
      namePlaceholder: string;
      nameRequired: string;
      phone: string;
      phonePlaceholder: string;
      phoneRequired: string;
      date: string;
      dateRequired: string;
      time: string;
      timeRequired: string;
      people: string;
      peoplePlaceholder: string;
      peopleRequired: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
  };
  location: {
    title: string;
    contactInfo: string;
    address: string;
    phone: string;
    hours: string;
    days: {
      mondayFriday: string;
      saturday: string;
      sunday: string;
    };
    closed: string;
  };
};

const translations: Record<"fr" | "en", Translation> = {
  fr: {
    reservation: {
      title: "Réserver une Table",
      description:
        "Réservez votre table pour une expérience culinaire inoubliable.",
      successMessage: "Votre réservation a été envoyée avec succès !",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom complet",
        nameRequired: "Le nom est obligatoire",
        phone: "Téléphone",
        phonePlaceholder: "+32 XXX XXX XXX",
        phoneRequired: "Le téléphone est obligatoire",
        date: "Date",
        dateRequired: "La date est obligatoire",
        time: "Heure",
        timeRequired: "L'heure est obligatoire",
        people: "Nombre de personnes",
        peoplePlaceholder: "Ex: 4",
        peopleRequired: "Le nombre de personnes est obligatoire",
        message: "Message (optionnel)",
        messagePlaceholder: "Demandes spéciales, allergies...",
        submit: "Envoyer la Réservation",
        submitting: "Envoi en cours...",
      },
    },
    location: {
      title: "Nous Trouver",
      contactInfo: "Informations de Contact",
      address: "Adresse",
      phone: "Téléphone",
      hours: "Horaires d'Ouverture",
      days: {
        mondayFriday: "Lun - Ven",
        saturday: "Samedi",
        sunday: "Dimanche",
      },
      closed: "Fermé",
    },
  },
  en: {
    reservation: {
      title: "Book a Table",
      description:
        "Reserve your table for an unforgettable culinary experience.",
      successMessage: "Your reservation has been sent successfully!",
      errorMessage: "An error occurred. Please try again.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        nameRequired: "Name is required",
        phone: "Phone",
        phonePlaceholder: "+32 XXX XXX XXX",
        phoneRequired: "Phone is required",
        date: "Date",
        dateRequired: "Date is required",
        time: "Time",
        timeRequired: "Time is required",
        people: "Number of people",
        peoplePlaceholder: "Ex: 4",
        peopleRequired: "Number of people is required",
        message: "Message (optional)",
        messagePlaceholder: "Special requests, allergies...",
        submit: "Send Reservation",
        submitting: "Sending...",
      },
    },
    location: {
      title: "Find Us",
      contactInfo: "Contact Information",
      address: "Address",
      phone: "Phone",
      hours: "Opening Hours",
      days: {
        mondayFriday: "Mon - Fri",
        saturday: "Saturday",
        sunday: "Sunday",
      },
      closed: "Closed",
    },
  },
};

// Hook de formulaire avec validation réelle
const useForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const register = (name: string) => ({
    name,
    value: formData[name as keyof typeof formData] || "",
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    onBlur: () => {},
  });

  const handleSubmit =
    (fn: (data: SubmittedData) => void | Promise<void>) =>
    (e: React.FormEvent) => {
      e.preventDefault();

      const newErrors: Record<string, string> = {};

      if (!formData.name.trim()) {
        newErrors.name = "Le nom est obligatoire";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Le téléphone est obligatoire";
      } else if (!/^[+]?[\d\s\-()]+$/.test(formData.phone)) {
        newErrors.phone = "Format de téléphone invalide";
      }
      if (!formData.date) {
        newErrors.date = "La date est obligatoire";
      }
      if (!formData.time) {
        newErrors.time = "L'heure est obligatoire";
      }
      if (!formData.people || parseInt(formData.people) < 1) {
        newErrors.people = "Le nombre de personnes est obligatoire";
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        fn({
          ...formData,
          people: parseInt(formData.people),
        });
      }
    };

  const reset = () => {
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      people: "",
      message: "",
    });
    setErrors({});
  };

  const watch = (field: string) => {
    return formData[field as keyof typeof formData] || "";
  };

  return {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  };
};

interface ReservationLocationProps {
  language: "fr" | "en";
}

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  message: string;
}
interface SubmittedData {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: number;
  message: string;
}
const ReservationLocation: React.FC<ReservationLocationProps> = ({
  language = "fr",
}) => {
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: SubmittedData) => {
    // Changer ReservationFormInputs -> SubmittedData
    setIsSubmitting(true);
    setIsError(false);

    try {
      console.log("Données de réservation:", data);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réservation:", error);
      setIsSubmitting(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

  // Watch values for WhatsApp link
  const name = watch("name");
  const phone = watch("phone");
  const date = watch("date");
  const time = watch("time");
  const people = watch("people");
  const msg = watch("message");

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je souhaite faire une réservation au restaurant O CONTINENG.\nNom: ${
      name || ""
    }\nTéléphone: ${phone || ""}\nDate: ${date || ""}\nHeure: ${
      time || ""
    }\nPersonnes: ${people || ""}\nMessage: ${msg || ""}`
  );

  return (
    <>
      {/* Import de Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>

      <section
        id="reservation"
        className="relative py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* Effets de fond subtils */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-black/3 to-gray-800/3 rounded-full blur-2xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
                {t.reservation.title}
              </span>
            </motion.h2>
            <p
              className="max-w-2xl mx-auto text-gray-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t.reservation.description}
            </p>
            {/* Ligne décorative */}
            <motion.div
              className="h-0.5 w-16 mx-auto mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne 1: Formulaire de réservation */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Messages de succès/erreur */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">
                      {t.reservation.successMessage}
                    </span>
                  </motion.div>
                )}

                {isError && (
                  <motion.div
                    className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">
                      {t.reservation.errorMessage}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Nom */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center text-sm font-medium text-gray-700 mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <User className="w-4 h-4 text-yellow-500 mr-2" />
                    {t.reservation.form.name}{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <motion.input
                    {...register("name")}
                    id="name"
                    type="text"
                    className={`w-full p-3 border rounded-lg bg-gray-50/50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white transition-all duration-200 ${
                      errors.name
                        ? "border-red-300 focus:border-red-400 focus:ring-red-400/20"
                        : "border-gray-200"
                    }`}
                    placeholder={t.reservation.form.namePlaceholder}
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.name && (
                    <motion.p
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Téléphone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center text-sm font-medium text-gray-700 mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Phone className="w-4 h-4 text-yellow-500 mr-2" />
                    {t.reservation.form.phone}{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <motion.input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    className={`w-full p-3 border rounded-lg bg-gray-50/50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white transition-all duration-200 ${
                      errors.phone
                        ? "border-red-300 focus:border-red-400 focus:ring-red-400/20"
                        : "border-gray-200"
                    }`}
                    placeholder={t.reservation.form.phonePlaceholder}
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.phone && (
                    <motion.p
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>

                {/* Date & Heure */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="date"
                      className="flex items-center text-sm font-medium text-gray-700 mb-1"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <Calendar className="w-4 h-4 text-yellow-500 mr-2" />
                      {t.reservation.form.date}{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <motion.input
                      {...register("date")}
                      id="date"
                      type="date"
                      min={tomorrowFormatted}
                      className={`w-full p-3 border rounded-lg bg-gray-50/50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white transition-all duration-200 ${
                        errors.date
                          ? "border-red-300 focus:border-red-400 focus:ring-red-400/20"
                          : "border-gray-200"
                      }`}
                      disabled={isSubmitting}
                      whileFocus={{ scale: 1.01 }}
                    />
                    {errors.date && (
                      <motion.p
                        className="text-red-500 text-xs mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.date}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="flex items-center text-sm font-medium text-gray-700 mb-1"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <Clock className="w-4 h-4 text-yellow-500 mr-2" />
                      {t.reservation.form.time}{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <motion.input
                      {...register("time")}
                      id="time"
                      type="time"
                      className={`w-full p-3 border rounded-lg bg-gray-50/50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white transition-all duration-200 ${
                        errors.time
                          ? "border-red-300 focus:border-red-400 focus:ring-red-400/20"
                          : "border-gray-200"
                      }`}
                      disabled={isSubmitting}
                      whileFocus={{ scale: 1.01 }}
                    />
                    {errors.time && (
                      <motion.p
                        className="text-red-500 text-xs mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.time}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Personnes */}
                <div>
                  <label
                    htmlFor="people"
                    className="flex items-center text-sm font-medium text-gray-700 mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Users className="w-4 h-4 text-yellow-500 mr-2" />
                    {t.reservation.form.people}{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <motion.input
                    {...register("people")}
                    id="people"
                    type="number"
                    min="1"
                    max="20"
                    className={`w-full p-3 border rounded-lg bg-gray-50/50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white transition-all duration-200 ${
                      errors.people
                        ? "border-red-300 focus:border-red-400 focus:ring-red-400/20"
                        : "border-gray-200"
                    }`}
                    placeholder={t.reservation.form.peoplePlaceholder}
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.people && (
                    <motion.p
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.people}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center text-sm font-medium text-gray-700 mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <MessageSquare className="w-4 h-4 text-yellow-500 mr-2" />
                    {t.reservation.form.message}
                  </label>
                  <motion.textarea
                    {...register("message")}
                    id="message"
                    rows={3}
                    className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50/50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white transition-all duration-200 resize-none"
                    placeholder={t.reservation.form.messagePlaceholder}
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Boutons */}
                <div className="flex flex-col gap-3 pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative group w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 disabled:opacity-50"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <span>{t.reservation.form.submitting}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.reservation.form.submit}</span>
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-full"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>

                  <motion.a
                    href={`https://wa.me/32484925191?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-full"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                </div>
              </form>
            </motion.div>

            {/* Colonne 2: Informations de contact et carte */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Carte Google Maps */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.392455504523!2d4.292924477142434!3d50.82389417166596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c69bd4a38a03%3A0x12122ad9a38ec443!2sChauss%C3%A9e%20de%20Mons%201081%2C%201070%20Anderlecht!5e0!3m2!1sfr!2sbe!4v1749638312823!5m2!1sfr!2sbe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant O-Contineng location"
                />
              </div>

              {/* Informations de contact */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50">
                <motion.h3
                  className="text-xl font-bold mb-5 flex items-center space-x-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="p-1.5 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                  <span className="text-gray-800">
                    {t.location.contactInfo}
                  </span>
                </motion.h3>

                <div className="space-y-4">
                  {/* Adresse */}
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors mr-3 mt-0.5"
                      whileHover={{ scale: 1.1 }}
                    >
                      <MapPin
                        size={18}
                        className="text-yellow-600 flex-shrink-0"
                      />
                    </motion.div>
                    <div>
                      <h4
                        className="font-semibold mb-1 text-gray-800"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t.location.address}
                      </h4>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Chaussée de Mons 1081
                        <br />
                        1070 Anderlecht, Belgique
                      </p>
                    </div>
                  </motion.div>

                  {/* Téléphone */}
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors mr-3 mt-0.5"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Phone
                        size={18}
                        className="text-yellow-600 flex-shrink-0"
                      />
                    </motion.div>
                    <div>
                      <h4
                        className="font-semibold mb-1 text-gray-800"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t.location.phone}
                      </h4>
                      <motion.a
                        href="tel:+32466468778"
                        className="text-gray-600 hover:text-yellow-600 transition-colors text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                      >
                        +32 465 412 732
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Horaires */}
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors mr-3 mt-0.5"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Clock
                        size={18}
                        className="text-yellow-600 flex-shrink-0"
                      />
                    </motion.div>
                    <div>
                      <h4
                        className="font-semibold mb-2 text-gray-800"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t.location.hours}
                      </h4>
                      <ul
                        className="text-gray-600 text-sm space-y-1"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <li className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            {t.location.days.mondayFriday}:
                          </span>
                          <span>11:30 - 14:30, 18:00 - 22:30</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            {t.location.days.saturday}:
                          </span>
                          <span>18:00 - 23:00</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            {t.location.days.sunday}:
                          </span>
                          <span className="text-red-500">
                            {t.location.closed}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationLocation;
