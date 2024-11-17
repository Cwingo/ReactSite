import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import API_BASE_URL from '../config';

function Home() {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        location: '',
        stats: ''
    });
    const [news, setNews] = useState([
        {
            title: 'Nick Saban Discusses Game Strategies',
            image: 'https://cwingo.github.io/ReactSite/images/nicksaban.jpeg',
            description: 'Read more about Coach Saban’s strategy for the upcoming season.'
        },
        {
            title: 'Jalen Milroe Shines in Practice',
            image: 'https://cwingo.github.io/ReactSite/images/jalenmilore.jpg',
            description: 'The quarterback showcases his skills ahead of the season opener.'
        }
    ]);

    // Validation logic
    const validatePlayer = (player) => {
        const errors = {};

        if (!player.name || player.name.length < 2 || player.name.length > 100) {
            errors.name = "Name must be between 2 and 100 characters.";
        }
        if (!player.position || player.position.length < 2 || player.position.length > 50) {
            errors.position = "Position must be between 2 and 50 characters.";
        }
        if (!player.location || player.location.length < 2 || player.location.length > 100) {
            errors.location = "Location must be between 2 and 100 characters.";
        }
        if (!player.stats || !Array.isArray(player.stats) || player.stats.length === 0) {
            errors.stats = "Stats must be a non-empty array.";
        }

        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Validate the form data
        const errors = validatePlayer({ ...formData, stats: formData.stats.split(',') });
        if (Object.keys(errors).length > 0) {
            setErrorMessage(Object.values(errors).join(' '));
            return;
        }

        // Submit the data to the server
        fetch(`${API_BASE_URL}/api/roster`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                stats: formData.stats.split(',').map(stat => stat.trim())
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((data) => {
                        throw new Error(data.error || 'Failed to add player.');
                    });
                }
                return response.json();
            })
            .then((data) => {
                setSuccessMessage('Player added successfully!');
                setFormData({ name: '', position: '', location: '', stats: '' });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <div>
            {/* Latest News Section */}
            <section className="latest-news">
                <div className="container">
                    <h2>Latest News</h2>
                    <div className="news-grid">
                        {news.map((item, index) => (
                            <div className="news-item" key={index}>
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
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
            <section className="add-player">
                <h2>Add a New Player</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Position:
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Location:
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Stats (comma-separated):
                        <input
                            type="text"
                            name="stats"
                            value={formData.stats}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit">Add Player</button>
                </form>
            </section>
        </div>
    );
}

export default Home;
