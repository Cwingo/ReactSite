import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2>Welcome to Alabama Football RTR</h2>
                    <p>The Ultimate Alabama Football Fan Hub</p>
                </div>
            </section>

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
                            src="https://www.youtube.com/embed/007UHPLIScw"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Recent Highlights"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
