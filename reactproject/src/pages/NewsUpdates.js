import React, { useState } from 'react';
import '../styles/NewsUpdates.css';

const newsUpdates = [
    {
        title: "Tide rolls over Georgia",
        summary: "Alabama defeats Georgia in a thrilling victory.",
        image: "https://cwingo.github.io/reactproject/images/185b375d0ffd2ccd3ad111685a3c068d_Fotor.jpg",
        description: "Alabama secures a win against Georgia with a decisive score, maintaining their lead in the season."
    },
    {
        title: "Victory against the Badgers",
        summary: "The Crimson Tide outplays Wisconsin.",
        image: "https://cwingo.github.io/reactproject/images/75439668007-usatsi-24356392_Fotor.jpg",
        description: "Alabama outshines Wisconsin in a closely fought match, demonstrating their strength and resilience."
    },
];

function NewsUpdates() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formError, setFormError] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetch('https://formsubmit.co/ajax/cmwingo@email.sc.edu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === 'true') {
                    setFormSubmitted(true);
                } else {
                    setFormError('There was an error submitting the form. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                setFormError('There was an error submitting the form. Please try again.');
            });
    };

    return (
        <div>
            {/* News & Updates Section */}
            <section className="news-updates">
                <h2>Recent Updates</h2>
                <div className="news-grid">
                    {newsUpdates.map((news, index) => (
                        <div className="news-item" key={index}>
                            <h3>{news.title}</h3>
                            <p>{news.summary}</p>
                            <img src={news.image} alt={news.title} />
                            <p className="image-description">{news.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact-section">
                <h2>Contact Me</h2>
                {formSubmitted ? (
                    <div className="form-response success-message">
                        Thank you! Your message has been sent successfully.
                    </div>
                ) : (
                    <form id="contact-form" onSubmit={handleFormSubmit}>
                        {formError && <p className="error-message">{formError}</p>}
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </section>
        </div>
    );
}

export default NewsUpdates;
