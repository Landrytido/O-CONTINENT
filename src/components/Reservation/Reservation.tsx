import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { translations } from '../../utils/translations';

interface ReservationProps {
  language: 'fr' | 'en';
}

interface ReservationFormInputs {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: number;
  message?: string;
}

const Reservation: React.FC<ReservationProps> = ({ language }) => {
  const t = translations[language].reservation;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ReservationFormInputs>();

  const onSubmit: SubmitHandler<ReservationFormInputs> = async (data) => {
    setIsSubmitting(true);
    setIsError(false);

    try {
      const result = await emailjs.send(
        'service_2qvd91m',
        'template_i02f3hj',
        {
          name: data.name,
          phone: data.phone,
          date: data.date,
          time: data.time,
          people: data.people,
          message: data.message || ''
        },
        'C64H7rZW7_3deLQw_'
      );

      console.log('EmailJS result:', result.status);

      setIsSubmitting(false);
      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setIsError(true);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  return (
    <section id="reservation" className="section-padding bg-neutral-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title inline-block after:left-1/2 after:-translate-x-1/2">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto mt-4">
            {t.description}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-white rounded-sm shadow-custom p-8">
          {isSuccess && (
            <div className="mb-6 p-4 bg-success-100 text-success-700 rounded-sm">
              {t.successMessage}
            </div>
          )}

          {isError && (
            <div className="mb-6 p-4 bg-error-100 text-error-700 rounded-sm">
              {t.errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                {t.form.name} <span className="text-error-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: true })}
                className={`w-full p-3 border ${errors.name ? 'border-error-500' : 'border-neutral-300'} rounded-sm focus:outline-none focus:ring-2 focus:ring-gold`}
                placeholder={t.form.namePlaceholder}
                disabled={isSubmitting}
              />
              {errors.name && <p className="mt-1 text-sm text-error-500">{t.form.nameRequired}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                {t.form.phone} <span className="text-error-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone', { required: true })}
                className={`w-full p-3 border ${errors.phone ? 'border-error-500' : 'border-neutral-300'} rounded-sm focus:outline-none focus:ring-2 focus:ring-gold`}
                placeholder={t.form.phonePlaceholder}
                disabled={isSubmitting}
              />
              {errors.phone && <p className="mt-1 text-sm text-error-500">{t.form.phoneRequired}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                  {t.form.date} <span className="text-error-500">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  {...register('date', { required: true })}
                  min={tomorrowFormatted}
                  className={`w-full p-3 border ${errors.date ? 'border-error-500' : 'border-neutral-300'} rounded-sm focus:outline-none focus:ring-2 focus:ring-gold`}
                  disabled={isSubmitting}
                />
                {errors.date && <p className="mt-1 text-sm text-error-500">{t.form.dateRequired}</p>}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">
                  {t.form.time} <span className="text-error-500">*</span>
                </label>
                <input
                  id="time"
                  type="time"
                  {...register('time', { required: true })}
                  className={`w-full p-3 border ${errors.time ? 'border-error-500' : 'border-neutral-300'} rounded-sm focus:outline-none focus:ring-2 focus:ring-gold`}
                  disabled={isSubmitting}
                />
                {errors.time && <p className="mt-1 text-sm text-error-500">{t.form.timeRequired}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="people" className="block text-sm font-medium text-neutral-700 mb-1">
                {t.form.people} <span className="text-error-500">*</span>
              </label>
              <input
                id="people"
                type="number"
                min="1"
                max="20"
                {...register('people', { required: true, min: 1, max: 20 })}
                className={`w-full p-3 border ${errors.people ? 'border-error-500' : 'border-neutral-300'} rounded-sm focus:outline-none focus:ring-2 focus:ring-gold`}
                placeholder={t.form.peoplePlaceholder}
                disabled={isSubmitting}
              />
              {errors.people && <p className="mt-1 text-sm text-error-500">{t.form.peopleRequired}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                {t.form.message}
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={3}
                className="w-full p-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                placeholder={t.form.messagePlaceholder}
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full md:w-auto min-w-[200px]"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? t.form.submitting : t.form.submit}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;