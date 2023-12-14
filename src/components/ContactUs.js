import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Here, you can make an API request to send the form data to your server.
    // For demonstration purposes, we'll just log the data to the console.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can also reset the form after submission if needed.
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const validateEmail = (email) => {
    // Basic email validation using a regular expression.
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
