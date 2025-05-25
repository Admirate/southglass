"use client";

import React, { useState } from "react";
import { useCsrfToken, validateCsrfToken } from "@/lib/csrf";

export default function ContactForm() {
  const csrfToken = useCsrfToken();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Get the CSRF token from the form
    const form = e.target as HTMLFormElement;
    const submittedToken = form.csrf_token.value;
    
    // Validate the CSRF token
    if (!validateCsrfToken(submittedToken)) {
      setErrors({
        ...errors,
        form: "Invalid form submission. Please refresh the page and try again."
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    try {
      // Call the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          csrf_token: submittedToken
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      // Show success state
      setSubmitSuccess(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: ""
    });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        ...errors,
        form: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    } finally {
    setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-800">
      <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
      
      {submitSuccess ? (
        <div className="bg-green-500/10 border border-green-500 p-6 rounded-lg text-center">
          <h3 className="text-xl font-medium text-green-400 mb-2">Thank You!</h3>
          <p className="text-zinc-300">Your message has been sent! We'll get back to you soon.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="mt-4 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden CSRF token field */}
          <input type="hidden" name="csrf_token" value={csrfToken} />
          
          {/* Display form-level errors */}
          {errors.form && (
            <div className="bg-red-500/10 border border-red-500 p-3 rounded-lg mb-4">
              <p className="text-red-500 text-sm">{errors.form}</p>
            </div>
          )}
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-zinc-800 border ${errors.name ? 'border-red-500' : 'border-zinc-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-zinc-800 border ${errors.email ? 'border-red-500' : 'border-zinc-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-zinc-800 border ${errors.phone ? 'border-red-500' : 'border-zinc-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Your phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-zinc-400 mb-1">
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your company (optional)"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-zinc-400 mb-1">
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-zinc-800 border ${errors.inquiryType ? 'border-red-500' : 'border-zinc-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          >
            <option value="" disabled>Select an inquiry type</option>
            <option value="general">General Inquiry</option>
            <option value="sales">Sales</option>
            <option value="support">Technical Support</option>
            <option value="partnership">Partnership</option>
            <option value="careers">Careers</option>
          </select>
          {errors.inquiryType && <p className="mt-1 text-sm text-red-500">{errors.inquiryType}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 bg-zinc-800 border ${errors.message ? 'border-red-500' : 'border-zinc-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="Your message"
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      )}
    </div>
  );
} 