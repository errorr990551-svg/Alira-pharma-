import React, { useState } from 'react';
import { X, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactDetailPopup = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: "",
      message: `Requested contact details from website. Phone: ${formData.phone}`,
    };

    try {
      const baseUrl = import.meta.env.VITE_API_URL || "";
      
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit details");
      }

      toast.success("Thank you! Contact details unlocked successfully.");
      
      // Store in localStorage
      localStorage.setItem('alira_contact_details_revealed', 'true');
      
      // Trigger event to sync other components
      window.dispatchEvent(new Event('contactDetailsRevealed'));

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Error submitting contact info:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-8 z-10 animate-fadeIn border border-gray-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-3">
            <Lock size={22} className="stroke-[2.5]" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Fill details to get email & phone number
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Provide your info to instantly unlock direct contact options.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
              Full Name *
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., John Doe"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-sm bg-gray-50 text-gray-700 placeholder-gray-400 font-medium"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
              Email Address *
            </label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g., john@company.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-sm bg-gray-50 text-gray-700 placeholder-gray-400 font-medium"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
              Phone Number *
            </label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., +1 234 567 890"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-sm bg-gray-50 text-gray-700 placeholder-gray-400 font-medium"
              required
            />
          </div>



          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white font-bold py-3.5 rounded-lg transition-all transform active:scale-[0.98] shadow-md shadow-teal-600/10 uppercase tracking-wider text-xs md:text-sm mt-2"
          >
            {loading ? "Submitting..." : "Submit & Reveal Contact Info"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactDetailPopup;
