import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        location: '',
        stats: '',
    });

    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackType, setFeedbackType] = useState(''); // 'success' or 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.name || !formData.position || !formData.location || !formData.stats) {
            setFeedbackMessage('All fields are required!');
            setFeedbackType('error');
            return;
        }

        // Send data to the API
        fetch('https://projectapi-qow8.onrender.com/api/roster', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                position: formData.position,
                location: formData.location,
                stats: formData.stats.split(',').map((stat) => stat.trim()),
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to add player');
                }
                return response.json();
            })
            .then((data) => {
                setFeedbackMessage('Player added successfully!');
                setFeedbackType('success');
                setFormData({ name: '', position: '', location: '', stats: '' });
            })
            .catch((error) => {
                setFeedbackMessage('Error: Unable to add player.');
                setFeedbackType('error');
                console.error(error);
            });
    };

    return (
        <div>
            {/* Latest News Section */}
            <section className="latest-news">
                <div className="container">
                    <h2>Latest News</h2>
                    <div className="news-grid">
                        <div className="news-item">
                            <img src="https://cwingo.github.io/ReactSite/images/nicksaban.jpeg" alt="Nick Saban" />
                            <h3>Nick Saban Discusses Game Strategies</h3>
                            <p>Read more about Coach Saban’s strategy for the upcoming season.</p>
                        </div>
                        <div className="news-item">
                            <img src="https://cwingo.github.io/ReactSite/images/jalenmilore.jpg" alt="Jalen Milroe" />
                            <h3>Jalen Milroe Shines in Practice</h3>
                            <p>The quarterback showcases his skills ahead of the season opener.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="video-section">
                <div className="container">
                    <h2>Recent Highlights</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/2X5rnY3PKtk?si=MYX-XMP-FVnbp3cC"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Add Player Form */}
            <section className="add-player-form">
                <div className="container">
                    <h2>Add a New Player</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Position:</label>
                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Location:</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Stats (comma-separated):</label>
                            <input
                                type="text"
                                name="stats"
                                value={formData.stats}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit">Add Player</button>
                    </form>
                    {/* Feedback Message */}
                    {feedbackMessage && (
                        <p className={`feedback-message ${feedbackType}`}>
                            {feedbackMessage}
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Home;
