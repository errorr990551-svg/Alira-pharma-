import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const PopUp = ({ isOpen, onClose, autoShow = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // Handle Auto-Show Logic (Default behavior)
  useEffect(() => {
    if (autoShow && isOpen === undefined) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [autoShow, isOpen]);

  // Handle Controlled Logic (When passed via props)
  useEffect(() => {
    if (isOpen !== undefined) {
      setIsVisible(isOpen);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit (EMAILJS CALL)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_e9tpgmh';
    const templateId = 'template_setcryu'; // Correct Template ID from Image 3
    const publicKey = 'L6kSSqLl5HJakWtm5'; // Fixed: lowercase 'l' instead of 'I'

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      to_email: "anmolchauhan@alirapharmaceuticals.com",
      cc_emails: "akshat99055@gmail.com, errorr990551@gmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });

      alert("Message sent successfully! Our experts will contact you soon.");

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      handleClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(`Failed to send message: ${error.text || "Please check your EmailJS settings."}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-10 z-10 animate-fadeIn scale-100">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 p-1 rounded-full"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-left">
            Drop in your details below
          </h2>
          <p className="text-gray-500 text-lg text-left">
            Let our experts take over from here!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          <div className="grid md:grid-cols-2 gap-5 text-left">
            {/* Name */}
            <div className="relative">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div className="relative text-left">
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 text-left">
            {/* Phone */}
            <div className="relative">
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Company */}
            <div className="relative text-left">
              <input 
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative text-left">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-teal-500/30 uppercase tracking-wider text-sm md:text-base"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default PopUp;
