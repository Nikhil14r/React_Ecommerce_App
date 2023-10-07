import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!formData.email.match(emailPattern)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="bg-black text-white py-5 h-100 center-content">
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center flex-column text-center ">
                        <h2>Contact Us</h2>
                        <p>Have a question or a suggestion? We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.</p>
                    </div>
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" name="email" value={formData.email} onChange={handleChange} required />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className={`form-control ${errors.message ? 'is-invalid' : ''}`} id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required />
                                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                            </div>
                            <button type="submit" className="btn btn-outline-light">Submit <FontAwesomeIcon icon={faArrowRight} /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;