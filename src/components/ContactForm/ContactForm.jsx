import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    location: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value} = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('submitting')

    try {
      // TODO: Replace with your actual API endpoint
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      // Simulated submission - Replace with real API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        location: '',
        message: ''
      })

      setTimeout(() => setSubmitStatus(null), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        {/* Left Section - Text Content */}
        <div className="contact-form-left">
          <h2 className="contact-form-heading">
            LET'S CRAFT A BEAUTIFUL HOME TOGETHER
          </h2>
          <p className="contact-form-subheading">
            Lorem ipsum dolor sit amet consectetur. Nulla mi id dui erat vestibulum id neque.
            Luctus dis feugiat bibendum massa molestie vitae eget felis. Condimentum in eu nisi
            orci feugiat. In turpis nisi donec non et et.
          </p>
        </div>

        {/* Right Section - Form Fields */}
        <div className="contact-form-right">
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Row 1: Full Name & Company Name */}
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="fullName" className="form-label">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Full & Last Name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter Name"
                />
              </div>
            </div>

            {/* Row 2: Email Address & Phone Number */}
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>

            {/* Row 3: Subject & Location */}
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="subject" className="form-label">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Full & Last Name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter Location"
                />
              </div>
            </div>

            {/* Message Field - Full Width */}
            <div className="form-row">
              <div className="form-field form-field-full">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  placeholder="Enter the query you have..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button - Right Aligned */}
            <div className="form-submit-wrapper">
              <button
                type="submit"
                className="form-submit-button"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? 'Submitting...' : 'Submit'}
              </button>
              {submitStatus === 'success' && (
                <p className="form-message form-message-success">Thank you! Your message has been sent successfully.</p>
              )}
              {submitStatus === 'error' && (
                <p className="form-message form-message-error">Sorry, there was an error. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
